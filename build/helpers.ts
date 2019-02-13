import path from 'path';
import fs from 'fs';
import HtmlWebpackPlugin from 'html-webpack-plugin';

// HtmlWebpackPlugin
export const HtmlWebpackPluginHelper = (projectName: string, entry: WebpackEntry): HtmlWebpackPlugin[] => {
  const dir = path.resolve(__dirname, `../packages/${projectName}/src/`);
  const dirFiles = fs.readdirSync(dir);
  // 获取 src 下的 js
  const options: HtmlWebpackPlugin.Options[] = Object.keys(entry).map(chunk => {
    const filename = `${chunk}.html`;
    return {
      chunks: [chunk],
      template: dirFiles.includes(filename) ? `${dir}/${filename}` : path.resolve(__dirname, 'index.html'),
      filename: filename,
    }
  });
  return options.map(option => 
    new HtmlWebpackPlugin(option)
  );
}

interface WebpackEntry {
  [key: string]: string;
}

// 获取 webpack entry
export const getWebpackEntriesHelper = (projectName: string, pathname = 'src'): WebpackEntry => {
  const dir = path.resolve(__dirname, `../packages/${projectName}`, pathname);
  const dirFiles = fs.readdirSync(dir);
  // 获取 src 下的 js
  return dirFiles
    .filter((file => 
      ['.ts', '.js'].includes(path.extname(file))
    ))
    .reduce((current, val, index) => ({
      ...current,
      [val.split('.')[0]]: `${dir}/${val}`,
    }), {});
}
