declare module 'preload-webpack-plugin' {
  import { Plugin } from 'webpack';
  interface Options {
    rel?: string;
    include?: string | string[];
    excludeHtmlNames?: string | string[];
    as?: string | ((entry: string) => string);
    fileBlacklist?: RegExp | RegExp[];
    fileWhitelist?: RegExp | RegExp[];
  }
  interface PreloadWebpackPlugin {
    new (config?: Options): Plugin;
  }
  const content: PreloadWebpackPlugin;
  export default content;
}

