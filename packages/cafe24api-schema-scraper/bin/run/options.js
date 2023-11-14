/* eslint-disable @typescript-eslint/no-var-requires */

const { recursive: merge } = require('merge');

/**
 * @description
 * Load options from execution environment.
 */
const loadOptionsFromEnv = () => {
  return {
    url: process.env.CAFE24_DOCS_PAGE_URL,
  };
};

/**
 * @description
 * Validate options.
 */
const validateOptions = (options) => {
  if (!options.url) {
    console.error('`url` option is required');
    process.exit(1);
  }
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
  options = merge(true, loadOptionsFromEnv(), options);
  validateOptions(options);
  return options;
};

module.exports = {
  configureOptions,
};
