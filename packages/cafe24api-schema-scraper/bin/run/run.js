/* eslint-disable @typescript-eslint/no-var-requires */

const { openPage, clickEveryShowButtons } = require('./browser');

/**
 * @description
 * Main run script
 */
const run = async (options, callback) => {
  const page = await openPage(options);
  await clickEveryShowButtons(page);
  return page.evaluate(callback);
};

module.exports = {
  run,
};
