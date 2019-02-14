import path from 'path';
import fs from 'fs';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { configInit } from '../components/config/init';

// HtmlWebpackPlugin
export const HtmlWebpackPluginHelper = (projectName: string, entry: WebpackEntry): HtmlWebpackPlugin[] => {
  const envConfig = configInit(projectName);
  const dir = path.resolve(__dirname, `../packages/${projectName}/src/`);
  const dirFiles = fs.readdirSync(dir);
  // 获取 src 下的 js
  const options: HtmlWebpackPlugin.Options[] = Object.keys(entry).map(chunk => {
    const filename = `${chunk}.html`;
    return {
      title: envConfig.TITLE || 'TutorABC',
      chunks: [chunk, `vendors~${chunk}`],
      template: dirFiles.indexOf(filename) >= 0 ? `${dir}/${filename}` : path.resolve(__dirname, 'index.html'),
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
      ['.ts', '.js'].indexOf(path.extname(file)) >= 0
    ))
    .reduce((current, val, index) => ({
      ...current,
      [val.split('.')[0]]: `${dir}/${val}`,
    }), {});
}
