/* eslint-disable @typescript-eslint/no-var-requires */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const rollup = require('rollup');
const { default: typescript } = require('@rollup/plugin-typescript');
const { default: resolve } = require('@rollup/plugin-node-resolve');
const { default: terser } = require('@rollup/plugin-terser');
const { default: commonjs } = require('@rollup/plugin-commonjs');
const injectProcessEnv = require('rollup-plugin-inject-process-env');
const dotenv = require('dotenv');

dotenv.config();

/**
 * @returns {import('rollup').RollupOptions['plugins']}
 */
const plugins = () => {
  const isDev = process.env.NODE_ENV === 'development';
  return [
    typescript({
      tsconfig: './tsconfig.bundle.json',
      outputToFilesystem: true,
    }),
    resolve({
      browser: true,
      preferBuiltins: true,
    }),
    commonjs(),
    injectProcessEnv({
      NODE_ENV: process.env.NODE_ENV,
    }),
    isDev && terser(),
  ].filter((plugin) => typeof plugin === 'object');
};

/**
 * @type {import('rollup').RollupOptions}
 */
const config = {
  preserveEntrySignatures: false,
  output: {
    compact: true,
    format: 'iife',
    sourcemap: true,
  },
  plugins: plugins(),
};

module.exports = config;
