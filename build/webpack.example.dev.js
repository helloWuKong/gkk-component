const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./webpack.common')
const resolve = (src) => path.posix.join(__dirname, '../', src)

module.exports = merge(base, {
  mode: 'development',
  devServer: {
    contentBase: resolve('/dist'),
    compress: true,
    host: '0.0.0.0',
    port: 9000,
    hot: true,
    historyApiFallback: true,
    overlay: {
      errors: true
    },
    stats: 'errors-only'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  stats: {
    assets: false
  }
})
