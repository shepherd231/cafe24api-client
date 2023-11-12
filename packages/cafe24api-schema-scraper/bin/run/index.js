/* eslint-disable @typescript-eslint/no-var-requires */

const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
const { program } = require('commander');
const { version } = require('../../package.json');
const { recursive: merge } = require('merge');
const { loadOptionsFromEnv } = require('./env');
const { run } = require('./run');

dotenv.config();

program
  .name('cafe24api-schema-scraper')
  .version(version)
  .description('Cafe24 API Schema Scraper');

program
  .option('--url <url>', 'url to Cafe24 API Docuemntation page to scrape')
  .option(
    '--output <output>',
    'output file path. If not specified, print to stdout',
  )
  .action(async (options) => {
    // Configure options
    options = merge(true, loadOptionsFromEnv(), options);

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

    if (options.output) {
      fs.writeFileSync(options.output, JSON.stringify(result, null, 2));
    } else {
      console.log(JSON.stringify(result, null, 2));
    }
  });

program.parse(process.argv);
