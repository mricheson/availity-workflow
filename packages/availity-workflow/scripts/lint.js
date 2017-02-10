'use strict';

const eslint = require('eslint');
const globby = require('globby');
const Promise = require('bluebird');
const ora = require('ora');

const Logger = require('availity-workflow-logger');
const settings = require('availity-workflow-settings');

function lint() {

  let engine;

  if (!settings.isLinting()) {
    Logger.warn('Linting is disabled');
    return Promise.resolve(true);
  }

  let future;

  try {
    engine = new eslint.CLIEngine({
      useEslintrc: true
    });
  } catch (err) {
    future = Promise.reject('ESLint configuration error in availity-workflow');
  }

  future = new Promise((resolve, reject) => {

    Logger.info('Started linting');
    const spinner = ora('running linter rules');
    spinner.color = 'yellow';
    spinner.start();

    const files = settings.js();

    // Uses globby which defaults to process.cwd() and path.resolve(options.cwd, "/")
    globby(files).then(paths => {

      spinner.stop();

      const report = engine.executeOnFiles(paths);

      if (report.errorCount || report.warningCount) {

        const formatter = engine.getFormatter();
        Logger.info(`${formatter(report.results)}`);
        Logger.failed('Failed linting');
        reject('Failed linting');

      } else {

        Logger.ok(`Finished linting ${paths.length} file(s)`);
        resolve('Finished linting');

      }

    });

  });

  return future;

}

module.exports = lint;