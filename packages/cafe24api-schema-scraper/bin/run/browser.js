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

const LAST_ELEMENT_SELECTOR = '#retrieve-a-count-of-dailyvisits';

/**
 * @description
 * Waits until last element appears.
 *
 * @param {puppeteer.Page} page
 * @returns {void}
 */
const waitForLastElement = async (page) => {
  await page.waitForSelector(LAST_ELEMENT_SELECTOR);
};

/**
 * @description
 * Click every "더보기" button exists in the page
 *
 * @param {puppeteer.Page} page
 * @returns {void}
 */
const clickEveryShowButtons = async (page) => {
  // Get documentation body
  const content = await page.$('.page-wrapper > .content');

  // Click every "Show" button
  const showButtons = await content.$$('.endpoint-btn > button');
  for (const button of showButtons) {
    await button.click();
  }
};

module.exports = {
  openPage,
  waitForLastElement,
  clickEveryShowButtons,
};
