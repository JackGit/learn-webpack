
/**
 * CommonsChunkPlugin是在现有的chunks中提取公共的代码（依赖），将这部分公共代码生成新的一个chunk。
 * 这个chunk通过options.name来命名，对应生成的文件通过options.filename来命名。
 *
 * 可以定义多个CommonsChunkPlugin来不断的提取公共代码，但是一般到webpack-bootstrap这一部分就可以了，再往下就没有意义了
 */

var webpack = require('webpack')

module.exports = {
  entry: {
    home: './home-page.js',
    profile: './profile-page.js'
  },
  output: {
    path: './output',
    filename: 'output-[name].js',
  },

  plugins: [
    // existing chunks: home, profile
    // this CommonsChunkPlugin is to get common code of chunks, which are home and profile
    // and this common code will be generated as another chunk, name of which is 'common'
    // so by the end of this plugin, there are 3 chunks: home, profile and common
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common', // this 'common' name is just like 'home' or 'profile' of the entry object, is the name of chunk
      filename: 'commonschunk-[name].js'
    }),
    // existing chunks: home, profile, common
    // this CommonsChunkPlugin is to get common code of the 3 chunks
    // and this common code will be generated as another chunk, name of which is 'webpack-bootstrap'
    // so by the end of this plugin, there are 4 chunks: home, profile, common, webpack-bootstrap
    new webpack.optimize.CommonsChunkPlugin({
      name: 'webpack-bootstrap',
      filename: 'commonschunk-[name].js'
    })

    // below is the short style for above two plugins
    // array of name, is the array of common chunk names
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: ['common', 'webpack-bootstrap'],
    //   filename: 'commonschunk-[name].js'
    // })
  ]
}
