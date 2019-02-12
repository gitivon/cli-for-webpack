import WebpackBar from 'webpackbar';
import { Configuration, DefinePlugin } from 'webpack';
import merge from 'webpack-merge';
import ConfigProd from './production';
import ConfigDev from './development';

const config: Configuration = merge({
  mode: 'production',
  entry: './packages/student-witness/src/index.ts',
  stats: 'errors-only',
  plugins: [
    new WebpackBar({
      profile: true,
    }),
    new DefinePlugin({}),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
    ],
  }
}, process.env.NODE_ENV === 'development' ? ConfigDev : ConfigProd );
export default config;