module.exports = {
  env: {
    test: {
      presets: [['@babel/preset-env', { modules: 'commonjs' }]],
    },
    build: {
      presets: [
        [
          '@babel/preset-env',
          {
            modules: false,
            loose: true,
          },
        ],
      ],
    },
  },
};
