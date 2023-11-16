/* eslint-disable @typescript-eslint/no-var-requires */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const puppeteer = require('puppeteer');

/**
 * @description
 * Opens page with given options
 *
 * @param {puppeteer.Browser} browser
 * @param {({
 *   url: string,
 * })} options
 * @returns {puppeteer.Page}
 */
const openPage = async (browser, options) => {
  const { url } = options;
  const page = await browser.newPage();
  await page.goto(url);

  return page;
};

/**
 * @description
 * Waits until page is loaded
 */
const waitForPageLoad = async (page) => {
  await page.waitForSelector('#title1');
  await page.waitForSelector('#title2');
};

module.exports = {
  openPage,
  waitForPageLoad,
};
