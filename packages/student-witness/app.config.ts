import path from 'path';
import { AppPackageConfig } from '../../build/app';

const appConfig: AppPackageConfig = {
  webpackConfig: {
    entry: {
      app: path.resolve(__dirname, './src/app.ts'),
      index: path.resolve(__dirname, './src/index.ts'),
    }
  },
  htmlWebpackPluginConfig: [
    {
      title: 'i\'m index',
      filename: 'index.html',
      chunks: [
        'index',
        'vendors~index'
      ],
    },
    {
      title: 'i\'m index',
      filename: 'app.html',
      chunks: [
        'app',
      ],
    }
  ]
};
export default appConfig;