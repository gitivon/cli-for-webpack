export default (config: any, env: any) => ({
  ...config,
  presets: [...config.presets, '@vue/babel-preset-jsx'],
});
