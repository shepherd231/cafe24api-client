/**
 * @fileoverview
 * Jest configuration.
 *
 * The test for this package requires Node.js >= 18 or above.
 */

/**
 * @type {import("@jest/types").Config.InitialOptions}
 */
module.exports = {
  setupFiles: ['./tests/jest.polyfills.js'],
  setupFilesAfterEnv: ['./tests/jest.setup.js'],
  displayName: 'cafe24api-client',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: './tsconfig.spec.json' }],
  },
  coverageDirectory: '../../coverage/packages/cafe24api-client',
};
