/* eslint-disable */

const nxPreset = require('@nx/jest/preset').default;

/**
 * @type {import("@jest/types").Config.InitialOptions}
 */
module.exports = {
  ...nxPreset,
  testMatch: ['**/?(*.)+(e2e-spec|spec|test).[jt]s?(x)'],
  verbose: true,
};
