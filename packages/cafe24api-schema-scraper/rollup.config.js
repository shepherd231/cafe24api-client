/* eslint-disable @typescript-eslint/no-var-requires */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const rollup = require('rollup');
const { default: typescript } = require('@rollup/plugin-typescript');
const { default: resolve } = require('@rollup/plugin-node-resolve');
const { default: terser } = require('@rollup/plugin-terser');
const { default: commonjs } = require('@rollup/plugin-commonjs');
const dotenv = require('dotenv');

dotenv.config();

/**
 * @returns {import('rollup').RollupOptions['plugins']}
 */
const plugins = () => {
  return [
    resolve({
      browser: true,
      preferBuiltins: true,
    }),
    process.env.NODE_ENV !== 'development' && terser(),
  ].filter((plugin) => typeof plugin === 'object');
};

/**
 * @type {import('rollup').RollupOptions}
 */
const config = {
  preserveEntrySignatures: false,
  output: {
    compact: true,
    format: 'esm',
    sourcemap: true,
  },
  plugins: plugins(),
};

module.exports = config;
