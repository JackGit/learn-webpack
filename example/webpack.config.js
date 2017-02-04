var path = require('path')

module.exports = {
  entry: {
    'assets/js/home': path.resolve(__dirname, './src/pages/home/main.js'),
    'assets/js/about': path.resolve(__dirname, './src/pages/about/main.js')
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name].bundle.js'
  }
}
