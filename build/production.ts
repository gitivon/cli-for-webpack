import { Configuration } from 'webpack';
import WorkboxPlugin from 'workbox-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import path from 'path';
import { argv } from 'yargs';

process.env.APP_projectName = (argv.env as any).project;
// console.log(process.env.APP_projectName);
const config: Configuration = {
  mode: 'production',
  optimization: {
    minimize: true,
  },
  plugins: [
    new WorkboxPlugin.GenerateSW({
      // 这些选项帮助 ServiceWorkers 快速启用
      // 不允许遗留任何“旧的” ServiceWorkers
      clientsClaim: true,
      skipWaiting: true,
    }),
    new CleanWebpackPlugin(
      [process.env.APP_projectName as string],
      {
        root: path.resolve(__dirname, `../dist`),
      },
    ),
  ]
};
export default config;