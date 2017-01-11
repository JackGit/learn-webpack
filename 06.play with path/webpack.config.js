var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports =  {
  entry: {
    app: './app.js'
  },
  output: {
    path: './output',
    // publicPath: 'my/path/',
    filename: 'output-[name].js'
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('css')
    }, {
      test: /\.jpg$/,
      loader: 'file'
    }]
  },
  plugins: [
    new ExtractTextPlugin('[name]-style.css'),
    new HTMLWebpackPlugin()
  ]
}
