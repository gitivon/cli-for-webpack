import { Configuration, HotModuleReplacementPlugin } from 'webpack';
import { argv } from 'yargs';
import WebpackBar from 'webpackbar';

process.env.APP_projectName = (argv.env as any).project;

const config: Configuration = {
  mode: 'development',
  devServer: {
    host: '0.0.0.0',
    contentBase: `./packages/${process.env.APP_projectName}`,
    hot: true,
    stats: 'errors-only',
    compress: true,
    // open: true,
    useLocalIp: true,
    overlay: true,
    historyApiFallback: true,
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [new WebpackBar(), new HotModuleReplacementPlugin()],
};
export default config;
