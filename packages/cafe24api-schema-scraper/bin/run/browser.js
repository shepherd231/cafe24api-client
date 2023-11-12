/* eslint-disable @typescript-eslint/no-var-requires */

const puppeteer = require('puppeteer');

/**
 * @description
 * Opens page with given options
 *
 * @param {({
 *  url: string
 * })} options
 * @returns {puppeteer.Page}
 */
const openPage = async (options) => {
  const { url } = options;

  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.goto(url);

  return page;
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
  const content = await page.waitForSelector('.page-wrapper > .content');

  // Click every "Show" button
  const showButtons = await content.$$('.endpoint-btn');
  for (const button of showButtons) {
    await button.click();
  }
};

module.exports = {
  openPage,
  clickEveryShowButtons,
};
