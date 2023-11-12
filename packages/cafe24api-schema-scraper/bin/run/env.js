/**
 * @description
 * Load options from execution environment.
 */
const loadOptionsFromEnv = () => {
  return {
    url: process.env.CAFE24_DOCS_PAGE_URL,
  };
};

module.exports = {
  loadOptionsFromEnv,
};
