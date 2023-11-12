/* eslint-disable @typescript-eslint/no-var-requires */

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
  .action(async (options) => {
    options = merge(true, loadOptionsFromEnv(), options);
    await run(options, () => {});
  });

program.parse(process.argv);
