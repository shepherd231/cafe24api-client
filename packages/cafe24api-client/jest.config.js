/**
 * @type {import("@jest/types").Config.InitialOptions}
 */
module.exports = {
  displayName: 'cafe24api-client',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  coverageDirectory: '../../coverage/packages/cafe24api-client',
};
