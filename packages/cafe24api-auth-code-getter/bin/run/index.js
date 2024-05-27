#!/usr/bin/env node

/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const commander = require('commander');
const { configureOptions } = require('./options');
const { getAuthCode } = require('../../dist/index');

/**
 * @description Register the `run` command to the program
 *
 * @param {commander.Command} program
 * @returns {void}
 */
const register = (program) => {
  program
    .command('run')
    .option('--mall-id <mall-id>', 'mall id')
    .option('--email <email>', 'email')
    .option('--password <password>', 'password')
    .option('--client-id <client-id>', 'client id')
    .option('--state <state>', 'state')
    .option('--redirect-uri <redirect-uri>', 'redirect uri')
    .option('--scope <scope>', 'scope')
    .action(async (options) => {
      // Configure options
      options = configureOptions(options);

      // Get auth code
      console.info('Getting auth code...');
      const getAuthCodeResult = await getAuthCode(options);
      if (getAuthCodeResult.success) {
        const { code, state } = getAuthCodeResult;
        console.info('Successfully got auth code!');
        console.info(`Auth code: ${code} (state: ${state})`);
      } else {
        const { error } = getAuthCodeResult;
        console.error(`Failed to get auth code: ${JSON.stringify(error)}`);
      }
    });
};

module.exports = {
  register,
};
