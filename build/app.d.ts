import { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

declare interface AppPackageConfig {
  webpackConfig: Configuration;
  htmlWebpackPluginConfig: HtmlWebpackPlugin.Options[];
}
