/* eslint global-require:0 import/no-dynamic-require: 0 */
const path = require('path');
const Logger = require('@availity/workflow-logger');
const { existsSync } = require('fs');
const trimStart = require('lodash.trimstart');
const chalk = require('chalk');
const merge = require('lodash.merge');
const fs = require('fs');
const get = require('lodash.get');
const yargs = require('yargs');
const each = require('lodash.foreach');
const isString = require('lodash.isstring');
const isFunction = require('lodash.isfunction');
const isObject = require('lodash.isobject');
const getPort = require('get-port');

function argv() {
  return yargs.argv;
}

function stringify(obj) {
  each(obj, (value, key) => {
    if (isString(value)) {
      try {
        JSON.parse(value);
        obj[key] = value;
      } catch (error) {
        obj[key] = JSON.stringify(value);
      }
    } else if (isObject(value) && !isFunction(value)) {
      stringify(value);
    }
  });
  return obj;
}

const settings = {
  // Cache these values
  configuration: null,
  workflowConfigPath: null,
  devServerPort: null,
  ekkoServerPort: null,

  app() {
    return path.join(this.project(), 'project/app');
  },

  include() {
    // Allow developers to add their own node_modules include path
    const userInclude = this.configuration.development.babelInclude;
    const includes = ['@av', ...userInclude].join('|');
    const regex = new RegExp(`node_modules[/\\\\](?=(${includes})).*`);
    return [this.app(), regex];
  },

  // https://webpack.js.org/configuration/devtool/
  sourceMap() {
    // Get sourcemap from command line or developer config else "source-map"
    const sourceMap = get(this.configuration, 'development.sourceMap', 'cheap-module-source-map');

    return this.isDistribution() || this.isDryRun() ? 'source-map' : sourceMap;
  },

  coverage() {
    return get(this.configuration, 'development.coverage', path.join(this.project(), 'coverage'));
  },

  css() {
    return this.isDistribution() ? '[name]-[chunkhash:8].css' : '[name].css';
  },

  // Returns the JSON object from contents or the JSON object from
  // the project root
  pkg(contents) {
    if (contents) {
      return JSON.parse(contents || this.raw());
    }

    return require(path.join(this.project(), 'package.json'));
  },

  // Don’t use [chunkhash] in development since this will increase compilation time
  // In production, [chunkhash] generate hashes depending on the file contents this if
  // the contents don't change the file could potentially be cached in the browser.
  fileName() {
    return this.isDistribution() ? '[name]-[chunkhash:8].js' : '[name].js';
  },

  chunkFileName() {
    return this.isDistribution() ? '[name]-[chunkhash:8].js' : '[name].js';
  },

  output() {
    return this.isDistribution() ? path.join(this.project(), 'dist') : path.join(this.project(), 'build');
  },

  port() {
    return this.devServerPort;
  },

  host() {
    return get(this.configuration, 'development.host', '0.0.0.0');
  },

  ekkoPort() {
    return this.ekkoServerPort;
  },

  open() {
    return get(this.configuration, 'development.open');
  },

  targets() {
    const defaultTargets = {
      ie: 11
    };

    const developmentTarget = get(this.configuration, 'development.targets', defaultTargets);

    return this.isDevelopment() ? developmentTarget : defaultTargets;
  },

  globals() {
    const configGlobals = stringify(get(this.configuration, 'globals', {}));

    const env = this.environment();

    // - Read environment variables from command line
    // - Filter out variables that have not been declared in workflow config
    // - Apply environment variables to the default config
    // - Map "staging" to "production" for process.env so that React deploys without extra debugging
    //   capabilities
    const parsedGlobals = Object.keys(process.env)
      .filter(key => key in configGlobals)
      .reduce(
        (result, key) => {
          result[key] = JSON.stringify(process.env[key]);
          return result;
        },
        {
          'process.env.NODE_ENV': JSON.stringify(env === 'staging' ? 'production' : env),
          __TEST__: env === 'test',
          __DEV__: env === 'development',
          __PROD__: env === 'production',
          __STAGING__: env === 'staging'
        }
      );

    return merge(configGlobals, parsedGlobals);
  },

  project() {
    return process.cwd();
  },

  version() {
    return this.pkg().version || 'N/A';
  },

  browsers() {
    return this.configuration.testing.browsers;
  },

  title() {
    return get(this.configuration, 'app.title', 'Availity');
  },

  log() {
    Logger.warn(chalk.bold.yellow('REACT'));

    if (!this.isTesting()) {
      Logger.info(
        `Using ${chalk.blue(trimStart(path.relative(process.cwd(), this.workflowConfigPath), 'node_modules/'))}`
      );
    }
  },

  logLevel() {
    const level = get(this.configuration, 'development.logLevel', 'none');
    return get(argv(), 'development.logLevel', level);
  },

  async init() {
    this.configuration = require('./defaults');
    let developerConfig = {};

    const defaultWorkflowConfig = path.join(__dirname, 'workflow.js');
    const jsWorkflowConfig = path.join(settings.project(), 'project/config/workflow.js');

    if (existsSync(jsWorkflowConfig)) {
      // Try workflow.js
      this.workflowConfigPath = jsWorkflowConfig;
      developerConfig = require(this.workflowConfigPath);
    } else {
      // fall back to default ./workflow.js
      this.workflowConfigPath = defaultWorkflowConfig;
    }

    // Merge in ./workflow.js defaults with overrides from developer config
    if (typeof developerConfig === 'function') {
      this.configuration = developerConfig(this.configuration);
    } else {
      merge(this.configuration, this.pkg().availityWorkflow, developerConfig);
    }

    // Merge in CLI overrides.  The command line args can pass nested properties like:
    //
    //    start --development.port=3000 --ekko.port=9999
    //
    // Yargs will convert those arguments into an object.  We pluck the only the top level attributes that we
    // are interested in and merge into the default configuration.
    //
    const args = argv();
    merge(this.configuration, {
      development: args.development,
      ekko: args.ekko,
      globals: args.globals
    });

    this.targets();
    this.globals();

    this.devServerPort = get(this.configuration, 'development.port', 3000);
    for (;;) {
      const availablePort = await getPort({ port: this.devServerPort, host: this.host() }); // eslint-disable-line no-await-in-loop
      if (availablePort === this.devServerPort) break;
      this.devServerPort += 1;
    }

    const wantedEkkoPort = get(this.configuration, 'ekko.port', 9999);
    this.ekkoServerPort = await getPort({ port: wantedEkkoPort, host: this.host() }); // eslint-disable-line no-await-in-loop
    if (wantedEkkoPort !== this.ekkoServerPort) {
      this.configuration.ekko.pluginContext = this.configuration.ekko.pluginContext.replace(
        `:${wantedEkkoPort}`,
        `:${this.ekkoServerPort}`
      );
      if (Array.isArray(this.configuration.proxies)) {
        this.configuration.proxies.forEach(proxy => {
          proxy.target = proxy.target.replace(`:${wantedEkkoPort}`, `:${this.ekkoServerPort}`);
        });
      }
    }
  },

  raw() {
    if (!this.raw) {
      this.raw = fs.readFileSync(path.join(process.cwd(), 'package.json'), 'utf8');
    }

    return this.raw;
  },

  asset(workflowFilePath, projectFilePath) {
    const hasProjectFile = fs.existsSync(projectFilePath);
    const filePath = hasProjectFile ? projectFilePath : workflowFilePath;

    if (!this.isTesting()) {
      const message = trimStart(path.relative(process.cwd(), filePath), 'node_modules/');
      Logger.info(`Using ${chalk.blue(message)}`);
    }

    return path.relative(this.app(), filePath);
  },

  config() {
    return this.configuration;
  },

  environment() {
    if (process.env.NODE_ENV) {
      return process.env.NODE_ENV;
    }

    process.env.NODE_ENV = 'development';
    return process.env.NODE_ENV;
  },

  // Uses globby which defaults to process.cwd() and path.resolve(options.cwd, "/")
  js() {
    let includeGlobs = argv().include;

    const defaultInclude = [
      `${this.app()}/**/*.js`,
      `${this.app()}/**/*.jsx`,
      `${this.app()}/**/*.ts`,
      `${this.app()}/**/*.tsx`
    ];

    if (!includeGlobs || !Array.isArray(includeGlobs) || includeGlobs.length === 0) {
      includeGlobs = defaultInclude;
    }

    return includeGlobs.concat(includeGlobs);
  },

  isDryRun() {
    return argv().dryRun !== undefined;
  },

  isStaging() {
    return this.environment() === 'staging';
  },

  isIntegration() {
    return this.environment() === 'integration';
  },

  isNotifications() {
    return get(this.configuration, 'development.notification', true);
  },

  isDevelopment() {
    return this.environment() === 'development';
  },

  isTesting() {
    return this.environment() === 'test';
  },

  isIgnoreUntracked() {
    return argv().ignoreGitUntracked !== undefined;
  },

  isWatch() {
    return argv().watch !== undefined;
  },

  isIntegrationTesting() {
    return argv().integration !== undefined;
  },

  isProduction() {
    return argv().production || this.environment() === 'production';
  },

  isDistribution() {
    return this.isProduction() || this.isStaging();
  },

  isCoverage() {
    return argv().coverage !== undefined;
  },

  isFail() {
    return argv().fail !== undefined;
  },

  isProfile() {
    return argv().profile !== undefined;
  },

  historyFallback() {
    return get(this.configuration, 'development.historyFallback', true);
  },

  isLinterDisabled() {
    return argv().disableLinter !== undefined;
  },

  isHotLoader() {
    const isHot = get(this.configuration, 'development.hotLoader', true);

    if (typeof isHot === 'object') {
      return isHot.enabled;
    }

    return isHot;
  },

  getHotLoaderName() {
    const isExperimental = get(this.configuration, 'development.hotLoader.experimental', false);

    return isExperimental ? 'react-refresh/babel' : 'react-hot-loader/babel';
  },

  getHotLoaderEntry() {
    return get(this.configuration, 'development.hotLoaderEntry', /\/App\.jsx?/);
  },

  isEkko() {
    return get(this.configuration, 'ekko.enabled', true);
  },

  commitMessage() {
    return argv().message;
  }
};

module.exports = settings;
