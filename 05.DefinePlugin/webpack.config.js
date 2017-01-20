var webpack = require('webpack')
var PRODUCT_SERVER_URL = 'http://product.server.url'

/**
 * The DefinePlugin allows you to create global constants which can be configured at compile time
 */

module.exports =  {
  entry: {
    app: './app.js'
  },
  output: {
    path: './output',
    filename: 'output-[name].js'
  },
  plugins: [
    new webpack.DefinePlugin({
      // SERVER_URL: PRODUCT_SERVER_URL // this won't work, will be compiled as (http://....)
      // SERVER_URL: '"http://product.server.url"' // this is ok
      SERVER_URL: JSON.stringify(PRODUCT_SERVER_URL), // this is ok, will be compiled as ('http://...')
      IS_PRODUCTION: true,
      INLINE_CODE: 'console.log(Date.now())'
    })
  ]
}
