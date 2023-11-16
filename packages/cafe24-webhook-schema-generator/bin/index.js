#!/usr/bin/env node

/* eslint-disable @typescript-eslint/no-var-requires */

const dotenv = require('dotenv');
const { program } = require('commander');
const { version } = require('../package.json');
const run = require('./run');

dotenv.config();

program
  .name('cafe24-webhook-schema-generator')
  .version(version)
  .description('Cafe24 Webhook Schema Generator');

run.register(program);

program.parse(process.argv);
