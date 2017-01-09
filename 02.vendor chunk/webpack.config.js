var webpack = require('webpack')

module.exports = {
  entry: {
    app: './app.js',
    vendor: ['vue', 'vue-router']
  },
  output: {
    path: './output',
    filename: 'output-[name].js',
  },

  plugins: [
    // if we don't set the vendor chunk as a common chunk by using this CommonsChunkPlugin, we will end up with two chunks:
    //    'app' chunk about 225kb size, and 'vendor' chunk about 225kb size
    // but if we set vendor as common chunk, then webpack will abstract the common code from app chunk code, so we will have:
    //    'app' chunk less than 1kb size, and 'vendor' chunk about 225kb size
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',   // set the existing chunk (chunk name is 'vendor') as a common chunk
      filename: 'commonschunk-[name].js'
    })
  ]
}
