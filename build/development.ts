import { Configuration, HotModuleReplacementPlugin } from 'webpack';

const config: Configuration = {
  mode: 'development',
  devServer: {
    contentBase: './',
    hot: true,
    stats: 'errors-only',
  },
  devtool: 'inline-source-map',
  plugins: [
    new HotModuleReplacementPlugin(),
  ]
};
export default config;