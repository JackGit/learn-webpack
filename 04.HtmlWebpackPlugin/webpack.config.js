var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HTMLWebpackPlugin = require('html-webpack-plugin')
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin


module.exports = {

  // will create 2 chunks and 1 html file
  //    output-page-a.js
  //    index.html (will add above two chunks as external script tag)
  /*entry: {
    'page-a': './pageA.js'
  },
  output: {
    path: './output',
    filename: 'output-[name].js'
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: 'css-loader'
    }]
  },
  plugins: [
    new HTMLWebpackPlugin()
  ]*/

  // will create 1 chunk, 1 css and 1 html
  //    output-page-a.js
  //    extract-page-a.css
  //    index.html (has output-page-a.js in script and extract-page-a.css as link)
  /*entry: {
    'page-a': './pageA.js'
  },
  output: {
    path: './output',
    filename: 'output-[name].js'
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('css-loader')
    }]
  },
  plugins: [
    new ExtractTextPlugin('extract-[name].css'),
    new HTMLWebpackPlugin()
  ]*/


  // will have 2 chunks, 2 css and 1 html
  //    output-page-a.js
  //    output-page-b.js
  //    output-page-a.css
  //    output-page-b.css
  //    index.html (include above 4 resources together)
  /*entry: {
    'page-a': './pageA.js',
    'page-b': './pageB.js'
  },
  output: {
    path: './output',
    filename: 'output-[name].js'
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('css-loader')
    }]
  },
  plugins: [
    new ExtractTextPlugin('extract-[name].css'),
    new HTMLWebpackPlugin()
  ]*/


  // will have 2 chunks, 2 css files and 2 html
  // and the 2 html file has the same content, which includes all the chunks and css files
  entry: {
    'page-a': './pageA.js',
    'page-b': './pageB.js'
  },
  output: {
    path: './output',
    filename: 'output-[name].js'
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('css-loader')
    }]
  },
  plugins: [
    new ExtractTextPlugin('extract-[name].css'),
    new HTMLWebpackPlugin({
      filename: 'page-a.html'
    }),
    new HTMLWebpackPlugin({
      filename: 'page-b.html'
    })
  ]

  // how to create page-a.html includes page-a.js and page-a.css, and create another page-b.html, includes page-b.js and page-b.css?
  
}
