import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from 'path';

const extractLoaderOption = (loaders: string[]) => 
  loaders.map((loader) => (
    {
      loader: `${loader}-loader`,
      options: {
        sourceMap: true,
      },
    }
  ));

export default (env: any) => [{
  test: /\.(c|le)ss$/,
  use: [
    env.NODE_ENV === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
    ...extractLoaderOption(['css', 'postcss']),
    {
      loader: 'less-loader',
      options: {
        sourceMap: true,
        // paths: [
        //   path.resolve(__dirname, '../node_modules'),
        //   path.resolve(__dirname, '../')
        // ]
      }
    }
  ],
}]
