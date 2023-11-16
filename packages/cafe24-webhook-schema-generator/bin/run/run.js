/* eslint-disable @typescript-eslint/no-var-requires */

const puppeteer = require('puppeteer');
const { openPage, waitForPageLoad } = require('./browser');

const isDev = process.env.NODE_ENV === 'development';

/**
 * @description
 * Main run script
 *
 * @param {({
 *   url: string,
 * })} options
 * @param {string} callback
 */
const run = async (options, callback) => {
  const browser = await puppeteer.launch({
    headless: isDev ? false : 'new',
    devtools: isDev,
  });
  const page = await openPage(browser, options);
  await waitForPageLoad(page);
  const result = await page.evaluate(callback);
  await page.close();
  await browser.close();
  return result;
};

module.exports = {
  run,
};
