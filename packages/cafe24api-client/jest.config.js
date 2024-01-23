/**
 * @type {import("@jest/types").Config.InitialOptions}
 */
module.exports = {
  displayName: 'cafe24api-client',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: './tsconfig.spec.json' }],
  },
  transformIgnorePatterns: [],
  moduleNameMapper: {
    '^url-join$': '<rootDir>/node_modules/url-join/lib/url-join.js',
  },
  coverageDirectory: '../../coverage/packages/cafe24api-client',
};
