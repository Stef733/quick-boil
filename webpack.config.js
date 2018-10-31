const path = require('path');

module.exports = {
  entry: './src/index.html',
  output: {
    path: path.resovle(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.tsx?$/, use: 'ts-loader', ignore: /node_modules/ }
    ],
    resolve: [ 'ts', 'tsx', 'js' ]
  }
}