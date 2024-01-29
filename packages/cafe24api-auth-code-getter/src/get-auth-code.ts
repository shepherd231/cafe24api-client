import puppeteer from 'puppeteer';
import crypto from 'crypto';
import {
  GetAuthCodeOptions,
  GetAuthCodeResult,
  validateOptions,
} from './types';
import {
  APP_INSTALLED_PAGE_URI,
  BUTTON_SELECTOR,
  CHANGE_PASSWORD_NEXT_TIME_BUTTON_SELECTOR,
  CHANGE_PASSWORD_PAGE_URI,
  GRANT_PERMISSIONS_BUTTON_SELECTOR,
  GRANT_PERMISSIONS_PAGE_URI,
  MALL_ID_INPUT_SELECTOR,
  PASSWORD_INPUT_SELECTOR,
} from './values';

export const getAuthCode = async (
  options: GetAuthCodeOptions,
): Promise<GetAuthCodeResult> => {
  // Validate options
  validateOptions(options);

  // Destructure options
  const {
    mallId,
    password,
    clientId,
    redirectUri,
    scope,
    state = crypto.randomBytes(16).toString('hex'),
  } = options;

  // Construct auth code request page url
  const authCodeRequestPageUrl = `https://${mallId}.cafe24api.com/api/v2/oauth/authorize?response_type=code&client_id=${clientId}&state=${state}&redirect_uri=${redirectUri}&scope=${scope}`;

  // Launch browser
  const isDev = !!process.env.CAFE24API_AUTH_CODE_GETTER_DEBUG;
  const browser = await puppeteer.launch({
    headless: isDev ? false : 'new',
    devtools: isDev,
  });

  let result: GetAuthCodeResult;

  try {
    // Create page
    const page = await browser.newPage();

    // Go to auth code page
    await page.goto(authCodeRequestPageUrl);

    const keyInto = async (selector: string, value: string) => {
      const input = await page.$(selector);
      if (!input) {
        throw new Error(
          `Failed to get input element with selector: ${selector}`,
        );
      }
      await input.type(value);
    };

    // Key in mall id and password
    await keyInto(MALL_ID_INPUT_SELECTOR, mallId);
    await keyInto(PASSWORD_INPUT_SELECTOR, password);

    // Click button
    await page.click(BUTTON_SELECTOR);

    // Wait for next page to load
    await page.waitForNavigation();

    if (page.url().match(CHANGE_PASSWORD_PAGE_URI)) {
      // If next page is Password Change page,
      // we need to click "change password next time" button
      await page.click(CHANGE_PASSWORD_NEXT_TIME_BUTTON_SELECTOR);

      // Wait for next page to load
      await page.waitForNavigation();
    }

    if (page.url().match(GRANT_PERMISSIONS_PAGE_URI)) {
      // If next page is Grant Permissions page,
      // we need to click "grant permissions" button
      await page.click(GRANT_PERMISSIONS_BUTTON_SELECTOR);

      // Wait for next page to load
      await page.waitForNavigation();
    }

    if (page.url().match(APP_INSTALLED_PAGE_URI)) {
      // If next page is App Installed page,
      // we need to wait for next page to load
      await page.waitForNavigation();
    }

    // Get search params from current page url
    const { searchParams } = new URL(page.url());

    // Set entries of search params to result
    result = Object.fromEntries(
      searchParams.entries(),
    ) as any as GetAuthCodeResult;
  } finally {
    // Close browser
    await browser.close();
  }

  // Return result
  return result;
};
