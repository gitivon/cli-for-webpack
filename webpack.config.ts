import { Configuration, DefinePlugin } from 'webpack';
import merge from 'webpack-merge';
import ConfigProd from 'build/production';
import ConfigDev from 'build/development';
import babelConfig from 'babel.config';
import { argv } from 'yargs';
import path from 'path';
import LodashModuleReplacementPlugin from 'lodash-webpack-plugin';
import { AppPackageConfig } from 'build/app';
import { HtmlWebpackPluginHelper, getWebpackEntriesHelper } from 'build/helpers';
import { configInit } from 'components/config/init';
// @ts-ignore
import PreloadWebpackPlugin from 'preload-webpack-plugin';

process.env.APP_projectName = (argv.env as any).project;
process.env.NODE_ENV = (argv.env as any).NODE_ENV;

if (!process.env.APP_projectName) {
  throw new ReferenceError('启动参数缺少项目名称，请添加参数 【npm start --env.project=your-project-name】');
}

// const app: AppPackageConfig = require(`./packages/${process.env.APP_projectName}/app.config`).default;
const entry = Object.assign({
  global: path.resolve(__dirname, './components/global/index.ts'),
}, getWebpackEntriesHelper(process.env.APP_projectName));
// 设置 process.env
const envConfig = configInit(process.env.APP_projectName);
// 写入definePlugin

const config: Configuration = merge({
  entry,
  stats: 'errors-only',
  output: {
    filename: `[name]${process.env.NODE_ENV !== 'development' ? '.[chunkhash:8]' : ''}.js`,
    path: path.resolve(__dirname, `dist/${process.env.APP_projectName}`),
  },
  plugins: [
    ...HtmlWebpackPluginHelper(process.env.APP_projectName, entry),
    // new PreloadWebpackPlugin({
    //   rel: 'preload',
    //   as: 'script'
    // }),
    new DefinePlugin({
      'process.env': JSON.stringify(envConfig),
    }),
    new LodashModuleReplacementPlugin({
      'collections': true,
      'paths': true
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    alias: {
      '#': path.resolve(__dirname),
      '@': path.resolve(__dirname, `packages/${process.env.APP_projectName}/src`)
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: babelConfig,
          },
          {
            loader: 'ts-loader',
            options: 
              {
                "transpileOnly": true,
              }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: babelConfig,
          }
        ]
      },
    ],
  }
}, 
process.env.NODE_ENV === 'development' ? ConfigDev : ConfigProd,
{});
export default config;