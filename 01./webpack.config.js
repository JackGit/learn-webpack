module.exports = {
  entry: {
    app: './app.js'
  },
  output: {
    path: './output/deep',
    //filename: 'output-file.js',
    //filename: '[name].js',
    filename: '[name][hash].js'
  }
}
