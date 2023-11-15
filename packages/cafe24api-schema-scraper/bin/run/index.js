#!/usr/bin/env node

/* eslint-disable @typescript-eslint/no-var-requires */

const fs = require('fs');
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const commander = require('commander');
const { configureOptions } = require('./options');
const { run } = require('./run');

/**
 * @description Register the `run` command to the program
 *
 * @param {commander.Command} program
 * @returns {void}
 */
const register = (program) => {
  program
    .command('run')
    .option('--url <url>', 'url to Cafe24 API Docuemntation page to scrape')
    .option(
      '--output <output>',
      'output file path. If not specified, print to stdout',
    )
    .option(
      '--noout',
      'do not output the result. This flag has lower priority than --output',
    )
    .action(async (options) => {
      // Configure options
      options = configureOptions(options);

      // Load scripts to run in the browser
      // Note that this script assigns the result to `window.__result`
      // as a workaround to return the result from the browser
      const scripts = fs.readFileSync(
        path.resolve(__dirname, '../../dist/index.js'),
        { encoding: 'utf-8' },
      );

      const result = await run(
        options,
        `
      (() => {
        ${scripts}
        return window.__result;
      })()
    `,
      );

      if (!result) {
        console.error('Error occured on the browser side');
        process.exit(1);
      }

      if (options.output) {
        const output = path.isAbsolute(options.output)
          ? options.output
          : path.resolve(process.cwd(), options.output);
        fs.writeFileSync(output, JSON.stringify(result, null, 2));
        process.exit(0);
      }

      if (!options.noout) {
        console.log(JSON.stringify(result, null, 2));
      }
    });
};

module.exports = {
  register,
};
