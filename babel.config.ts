export default {
  plugins: [
    '@babel/transform-runtime',
    '@babel/plugin-syntax-dynamic-import',
    'lodash',
  ],
  presets: [
    [
      '@babel/env',
      {
        modules: 'auto',
        useBuiltIns: 'usage',
        targets: {
          browsers: ['>0.25%'],
          node: 8,
        },
      },
    ],
    '@vue/babel-preset-jsx',
  ],
};
