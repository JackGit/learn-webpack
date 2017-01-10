/**
 * 每个entry记录会被打包成一个output文件（即为chunk）
 * 每个entry记录有 名字 和 文件组成
 *      名字默认为main，如果以object形式定义entry，则为object的key（也是chunk name）
 *      文件可以是字符串，也可以是字符串数组。每个字符内容其实和require中的内容一致，可以是文件路径，可以是npm包名称
 */

module.exports = {
  /**
   *
   * will output as
   * |-output
   *         |-output-file.js
  entry: './app.js',  // => entry: { main: './app.js' }
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
  entry: ['./app.js', './better-app.js'], // => entry: { main: ['./app.js', './better-app.js'] }
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
   */
  entry: {
    'app': './app.js'
  },
  output: {
    path: './output',
    filename: '[name]-[hash].js'
  }
}
