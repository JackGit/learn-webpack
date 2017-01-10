var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin

/**
 * ExtractTextPlugin将每一个chunk中指定的内容抽成独立的文件，例如将ExtractTextPlugin.extract('css')返回的内容抽成css文件
 * 但是也可以一个chunk中抽离出多个独立文件，那么需要多个ExtractTextPlugin实例，例如：
 *    module: {
 *      loaders: [{
 *        test: '', loader: extractTextP1.extract()
 *      }, {
 *        test: '', loader: extractTextP2.extract()
 *      }]
 *    },
 *    plugins: [extractTextP1, extractTextP2]
 *
 */

module.exports = {
  // will create 1 chunk: output-app.js 3.3kb, which contains the app.css content, and this css content will be appended as style tag while js executed
  /*entry: {
    app: './app.js'
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
  }*/

  // will create 1 chunk and 1 css file: output-app.js 1.56kb, extract-app.css < 1kb
  /*entry: {
    app: './app.js'
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
    // new ExtractTextPlugin('extract-[name]2.css') // additional instance will generate duplicated css file
  ]*/

  // will create 2 chunks and 2 css files
  //    output-page-a.js 1.69kb
  //    output-page-b.js  1.7kb
  //    extract-page-a.css
  //    extract-page-b.css
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
    new ExtractTextPlugin('extract-[name].css')
  ]*/

  // will create 3 chunks and 3 css files
  //    output-page-a.js
  //    output-page-b.js
  //    common.js
  //    extract-page-a.css
  //    extract-page-b.css
  //    extract-common.css
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
    new CommonsChunkPlugin({
      name: 'common',
      filename: '[name].js'
    }),
    new ExtractTextPlugin('extract-[name].css')
  ]
}
