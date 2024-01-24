const exclude = ['node_modules/**', '**/tests'];

module.exports = {
  env: {
    test: {
      presets: [
        '@babel/preset-typescript',
        ['@babel/preset-env', { modules: 'commonjs' }],
      ],
    },
    build: {
      ignore: exclude,
      presets: [
        '@babel/preset-typescript',
        [
          '@babel/preset-env',
          {
            modules: false,
            loose: false,
          },
        ],
      ],
    },
  },
  plugins: [
    ['@babel/plugin-transform-class-properties', { loose: false }],
    ['@babel/plugin-transform-object-rest-spread', { loose: false }],
  ],
};
