const loaders = (env: any) => {
  return [
    {
      test: /\.(png|jpg|gif)$/,
      use: [{ loader: 'file-loader' }],
    },
    {
      test: /\.svg$/,
      loader: '@svgr/webpack',
    },
  ];
};

export default loaders;
