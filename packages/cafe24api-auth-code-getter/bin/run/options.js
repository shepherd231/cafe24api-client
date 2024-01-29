/* eslint-disable @typescript-eslint/no-var-requires */

const { recursive: merge } = require('merge');

/**
 * @description
 * Load options from execution environment.
 */
const loadOptionsFromEnv = () => {
  return {
    mallId: process.env.CAFE24_MALL_ID,
    password: process.env.CAFE24_MALL_PASSWORD,
    clientId: process.env.CAFE24_CLIENT_ID,
    state: process.env.CAFE24_AUTH_STATE,
    redirectUri: process.env.CAFE24_AUTH_REDIRECT_URI,
    scope: process.env.CAFE24_AUTH_SCOPE,
  };
};

/**
 * @description
 * Configure options with given default options and options from execution environment.
 *
 * @param {Record<string, any>}
 * @returns {{
 *   url: string;
 *   output: string;
 * }}
 */
const configureOptions = (options) => {
  return merge(true, loadOptionsFromEnv(), options);
};

module.exports = {
  configureOptions,
};
