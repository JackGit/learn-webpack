module.exports = {
  /**
   *
   * will output as
   * |-output
   *         |-output-file.js
  entry: './app.js',
  output: {
    path: './output',
    filename: 'output-file.js'
  }
  */

  /**
   *
   * will output as
   * |-output
   *         |-main.js
  entry: './app.js',
  output: {
    path: './output',
    filename: '[name].js'
  }
  */

  /**
   *
   * will output as
   * |-output
   *         |-main.js
  entry: ['./app.js', './better-app.js'],
  output: {
    path: './output',
    filename: '[name].js'
  }
  */

  /**
   *
   * will output as
   * |-output
   *         |-output-app.js
   *         |-output-better.js
  entry: {
    app: './app.js',
    better: './better-app.js'
  },
  output: {
    path: './output',
    filename: 'output-[name].js'
  }
  */

  /**
   *
   * will output as
   * |-output
   *         |-app-entry.js
  entry: {
    'app-entry': './app.js'
  },
  output: {
    path: './output',
    filename: '[name].js'
  }
  */

  /**
   *
   * will output as
   * |-output
   *         |-path
   *              |-of
   *                 |-entry.js
  entry: {
    'path/of/entry': './app.js'
  },
  output: {
    path: './output',
    filename: '[name].js'
  }
  */

  /**
   *
   * will output as
   * |-output
   *         |-app-<xxxhashcodexxx>.js
  entry: {
    'app': './app.js'
  },
  output: {
    path: './output',
    filename: '[name]-[hash].js'
  }
  */

  entry: {
    app: './app.js',
    vender: []
  }
}
