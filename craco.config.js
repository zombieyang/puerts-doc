const {addAfterLoader, loaderByName} = require('@craco/craco')

module.exports = {
  webpack: {
    configure(webpackConfig) {
    // addAfterLoader(webpackConfig, loaderByName('babel-loader'), {
    //     test: /\.md$/,
    //     loader: require.resolve('text-loader')
    // })
    addAfterLoader(webpackConfig, loaderByName('babel-loader'), {
        test: /\.ya?ml?$/,
        loader: require.resolve('yaml-loader')
    })
      return webpackConfig
    }
  }
}