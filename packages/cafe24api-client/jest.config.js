/**
 * @type {import("@jest/types").Config.InitialOptions}
 */
module.exports = {
  displayName: 'cafe24api-client',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: './tsconfig.spec.json' }],
  },
  coverageDirectory: '../../coverage/packages/cafe24api-client',
};
