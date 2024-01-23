const { default: babel } = require('@rollup/plugin-babel');
const { default: terser } = require('@rollup/plugin-terser');
const { default: resolve } = require('@rollup/plugin-node-resolve');
const { default: commonjs } = require('@rollup/plugin-commonjs');
const { default: json } = require('@rollup/plugin-json');
const peerDepsExternal = require('rollup-plugin-peer-deps-external');
const { dts } = require('rollup-plugin-dts');

const extensions = ['.ts', '.mjs', '.js', '.json', '.node'];
const exclude = ['node_modules/**', '**/tests/**'];

const configFactory = (config) => {
  const { input, fileName, name } = config;
  return {
    input: {
      input,
      external: ['cafe24api-client'],
      plugins: [
        peerDepsExternal({
          includeDependencies: true,
        }),
        resolve({
          extensions,
          preferBuiltins: true,
          browser: true,
        }),
        json(),
        commonjs({
          exclude,
          ignoreGlobal: true,
        }),
        babel({
          extensions,
          exclude,
          babelHelpers: 'bundled',
        }),
        terser(),
      ],
    },
    output: {
      file: fileName,
      format: 'umd',
      name: name || 'cafe24api-client',
      compact: true,
    },
  };
};

const dtsFactory = (config) => {
  const { input, fileName, name } = config;
  return {
    input: {
      input,
      plugins: [dts()],
    },
    output: {
      file: fileName,
      format: 'es',
      name: name || 'cafe24api-client',
    },
  };
};

module.exports = {
  source: configFactory,
  dts: dtsFactory,
};
