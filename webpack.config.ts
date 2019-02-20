import { Configuration, DefinePlugin } from 'webpack';
import merge from 'webpack-merge';
import ConfigProd from './build/production';
import ConfigDev from './build/development';
import babelConfig from './babel.config';
import { argv } from 'yargs';
import path from 'path';
import LodashModuleReplacementPlugin from 'lodash-webpack-plugin';
import { AppPackageConfig } from './build/app';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import {
  HtmlWebpackPluginHelper,
  getWebpackEntriesHelper,
} from './build/helpers';
import { configInit } from './components/config/init';
// @ts-ignore
import PreloadWebpackPlugin from 'preload-webpack-plugin';
import cssLoader from './build/css-loader';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import createStyledComponentsTransformer from 'typescript-plugin-styled-components';
import VueLoaders from './build/loaders/vue-loader';
import assetsLoader from './build/loaders/assets-loader';
// @ts-ignore
import VueLoaderPlugin from 'vue-loader/lib/plugin';

process.env.APP_projectName = (argv.env as any).project;
process.env.NODE_ENV = (argv.env as any).NODE_ENV;

const styledComponentsTransformer = createStyledComponentsTransformer();

if (!process.env.APP_projectName) {
  throw new ReferenceError(
    '启动参数缺少项目名称，请添加参数 【npm start --env.project=your-project-name】',
  );
}

// const app: AppPackageConfig = require(`./packages/${process.env.APP_projectName}/app.config`).default;
const entry = Object.assign(
  getWebpackEntriesHelper(process.env.APP_projectName),
);
// 设置 process.env
const envConfig = configInit(process.env.APP_projectName);
// 写入definePlugin

const hashName = process.env.NODE_ENV !== 'development' ? '.[chunkhash:8]' : '';

const config: Configuration = merge(
  {
    entry,
    stats: 'errors-only',
    output: {
      filename: `[name]${hashName}.js`,
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
        collections: true,
        paths: true,
      }),
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: `[name]${hashName}.css`,
        chunkFilename: `[id]${hashName}.css`,
      }),
      new ForkTsCheckerWebpackPlugin({
        checkSyntacticErrors: true,
        // tsconfig: path.resolve(__dirname, 'tsconfig.json'),
        // tslint: path.resolve(__dirname, 'tslint.json'),
        watch: ['./**/src/**/*.tsx'],
        // ignoreLints: [
        //   'no-console',
        //   'object-literal-sort-keys',
        //   'quotemark',
        // ],
      }),
      new VueLoaderPlugin(),
    ],
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.jsx', '.vue'],
      alias: {
        '#': path.resolve(__dirname),
        '@': path.resolve(
          __dirname,
          `packages/${process.env.APP_projectName}/src`,
        ),
        vue$: 'vue/dist/vue.runtime.esm.js',
      },
    },
    module: {
      noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
      rules: [
        ...cssLoader(process.env),
        ...VueLoaders(process.env),
        ...assetsLoader(process.env),
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: babelConfig(process.env),
            },
            {
              loader: 'ts-loader',
              options: {
                transpileOnly: true,
                getCustomTransformers: () => ({
                  before: [styledComponentsTransformer],
                }),
                appendTsxSuffixTo: ['\\.vue$'],
              },
            },
          ],
        },
        {
          test: /\.jsx$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: babelConfig(process.env),
            },
          ],
        },
      ],
    },
  },
  process.env.NODE_ENV === 'development' ? ConfigDev : ConfigProd,
  {},
);
export default config;
