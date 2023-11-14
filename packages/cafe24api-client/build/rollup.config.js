const { default: babel } = require('@rollup/plugin-babel');
const { default: terser } = require('@rollup/plugin-terser');

module.exports = (config) => {
  const { input, fileName, name } = config;
  return {
    input: {
      input,
      external: ['cafe24api-client'],
      plugins: [
        babel({
          exclude: 'node_modules/**',
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
