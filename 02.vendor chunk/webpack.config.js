var webpack = require('webpack')

module.exports = {
  // will output only one chunk: output-app.js 225kb
  /* entry: {
    app: './app.js'
  },
  output: {
    path: './output',
    filename: 'output-[name].js',
  },*/

  // output two chunks:
  //    output-app.js < 1kb
  //    commonschunk-vendor.js 227kb
  /*entry: {
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
  ]*/

  // it will give error, a dependency to an entry point is not allowed
  // because vue and vue-router are depedencies of app.js, these two can't be another entry points
  entry: {
    app: './app.js',
    vue: 'vue',
    vrouter: 'vue-router'
  },
  output: {
    path: './output',
    filename: 'output-[name].js',
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vue',
      filename: 'commonschunk-[name].js'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vrouter',
      filename: 'commonschunk-[name].js'
    })
  ]
}
