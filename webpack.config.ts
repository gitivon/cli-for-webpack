import { Configuration, DefinePlugin } from 'webpack';
import merge from 'webpack-merge';
import ConfigProd from './build/production';
import ConfigDev from './build/development';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { argv } from 'yargs';
import path from 'path';
import LodashModuleReplacementPlugin from 'lodash-webpack-plugin';

process.env.APP_projectName = (argv.env as any).project;

if (!process.env.APP_projectName) {
  throw new ReferenceError('启动参数缺少项目名称，请添加参数 【npm start --env.project=your-project-name】');
}

const config: Configuration = merge({
  entry: `./packages/${process.env.APP_projectName}/src/index.ts`,
  stats: 'errors-only',
  output: {
    path: path.resolve(__dirname, `dist/${process.env.APP_projectName}`),
  },
  plugins: [
    new DefinePlugin({}),
    new HtmlWebpackPlugin({
      title: 'TutorABC',
      filename: `index.html`,
    }),
    new LodashModuleReplacementPlugin({
      'collections': true,
      'paths': true
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'ts-loader',
          }
        ]
      },
    ],
  }
}, 
process.env.NODE_ENV === 'development' ? ConfigDev : ConfigProd,
{} );
export default config;