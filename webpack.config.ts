import { Configuration, DefinePlugin } from 'webpack';
import merge from 'webpack-merge';
import ConfigProd from './build/production';
import ConfigDev from './build/development';
import babelConfig from './babel.config';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { argv } from 'yargs';
import path from 'path';
import LodashModuleReplacementPlugin from 'lodash-webpack-plugin';
import { AppPackageConfig } from './build/app';

process.env.APP_projectName = (argv.env as any).project;
process.env.NODE_ENV = (argv.env as any).NODE_ENV;

if (!process.env.APP_projectName) {
  throw new ReferenceError('启动参数缺少项目名称，请添加参数 【npm start --env.project=your-project-name】');
}

const { default: app } : { default: AppPackageConfig } = require(`./packages/${process.env.APP_projectName}/app.config`);

const config: Configuration = merge({
  entry: `./packages/${process.env.APP_projectName}/src/index.ts`,
  stats: 'errors-only',
  output: {
    filename: '[name].[hash:8].js',
    path: path.resolve(__dirname, `dist/${process.env.APP_projectName}`),
  },
  plugins: [
    ...app.htmlWebpackPluginConfig.map(option => new HtmlWebpackPlugin(option)),
    new DefinePlugin({}),
    // new HtmlWebpackPlugin({
    //   title: 'TutorABC',
    //   filename: `index.html`,
    // }),
    new LodashModuleReplacementPlugin({
      'collections': true,
      'paths': true
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
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
{},
app.webpackConfig );
export default config;