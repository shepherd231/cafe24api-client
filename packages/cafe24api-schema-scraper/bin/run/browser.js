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
  await page.waitForSelector('.page-wrapper > .content');
};

const LAST_CODE_BLOCK_SELECTOR =
  '.page-wrapper > .content > section:last-of-type .code-data.response pre';

/**
 * @description
 * Waits until last element (code block) is loaded
 *
 * @param {puppeteer.Page} page
 * @returns {void}
 */
const waitForLastElement = async (page) => {
  await page.waitForSelector(LAST_CODE_BLOCK_SELECTOR);
  return new Promise((resolve) => {
    const interval = setInterval(async () => {
      const codeLength = await page.evaluate((lastCodeBlockSelector) => {
        // eslint-disable-next-line no-undef
        return document.querySelector(lastCodeBlockSelector).innerText.length;
      }, LAST_CODE_BLOCK_SELECTOR);
      if (codeLength > 0) {
        clearInterval(interval);
        resolve();
      }
    }, 200);
  });
};

/**
 * @description
 * Click every "더보기" button exists in the page
 *
 * @param {puppeteer.Page} page
 * @returns {void}
 */
const clickEveryShowButtons = async (page) => {
  await page.evaluate(() => {
    // eslint-disable-next-line no-undef
    const content = document.querySelector('.page-wrapper > .content');
    const showButtons = content.querySelectorAll('.endpoint-btn > button');
    showButtons.forEach((button) => button.click());
  });
};

/**
 * @description
 * Click every button with selector `button.btn.collapsed`
 * in the page
 *
 * @param {puppeteer.Page} page
 * @returns {void}
 */
const clickEveryToggleButtons = async (page) => {
  await page.evaluate(async () => {
    // eslint-disable-next-line no-undef
    const content = document.querySelector('.page-wrapper > .content');
    const toggleButtons = content.querySelectorAll(
      'section.endpoint.method .table-area tbody tr[colspan="2"] button',
    );
    const lastToggleButton = toggleButtons.item(toggleButtons.length - 1);
    await new Promise((resolve) => {
      if (!lastToggleButton) resolve();
      const interval = setInterval(() => {
        if (lastToggleButton.hasAttribute('data-target')) {
          clearInterval(interval);
          resolve();
        }
      });
    });
    toggleButtons.forEach((button) => button.click());
  });
};

module.exports = {
  openPage,
  waitForPageLoad,
  waitForLastElement,
  clickEveryShowButtons,
  clickEveryToggleButtons,
};
