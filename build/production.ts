import { Configuration } from 'webpack';
import WorkboxPlugin from 'workbox-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import merge from 'webpack-merge';
import path from 'path';
import { argv } from 'yargs';

process.env.APP_projectName = (argv.env as any).project;
process.env.APP_mode = (argv.env as any).mode;

const config: Configuration = merge(
  {
    mode: 'production',
    stats: true,
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
    plugins: [
      new WorkboxPlugin.GenerateSW({
        // 这些选项帮助 ServiceWorkers 快速启用
        // 不允许遗留任何“旧的” ServiceWorkers
        clientsClaim: true,
        skipWaiting: true,
      }),
      new CleanWebpackPlugin([process.env.APP_projectName as string], {
        root: path.resolve(__dirname, `../dist`),
      }),
    ],
  },
  process.env.APP_mode == 'analytics'
    ? {
        plugins: [new BundleAnalyzerPlugin()],
      }
    : {},
);
export default config;
