const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const resolve = (src) => path.posix.join(__dirname, '../', src)

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  entry: {
    app: resolve('example/entry.js')
  },
  output: {
    path: resolve('dist'),
    filename: 'static/js/[name].[hash:8].js',
    publicPath: ''
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {},
    modules: [
      resolve('node_modules'),
      resolve('example'),
      resolve('src')
    ]
  },
  module: {
    rules: [
      {
        test: /.(vue|js)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [
          resolve('example'),
          resolve('src')
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.less/,
        use: [
          'vue-style-loader',
          'css-loader',
          'less-loader'
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve('example/index.html')
    })
  ]
}
