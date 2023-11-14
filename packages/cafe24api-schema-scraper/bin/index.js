#!/usr/bin/env node

/* eslint-disable @typescript-eslint/no-var-requires */

const dotenv = require('dotenv');
const { program } = require('commander');
const { version } = require('../package.json');
const run = require('./run');

dotenv.config();

program
  .name('cafe24api-schema-scraper')
  .version(version)
  .description('Cafe24 API Schema Scraper');

run.register(program);

program.parse(process.argv);
