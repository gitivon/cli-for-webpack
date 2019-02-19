const loaders = (env: any) => {
  return [
    {
      test: /\.vue$/,
      loader: 'vue-loader'
    }
  ]
}

export default loaders;