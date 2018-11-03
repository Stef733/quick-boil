const common = require('./webpack.common');
const merge = require('webpack-merge');
const webpack = require('webpack');


module.exports = merge(common, {
  mode: 'development',
  entry: [
    'webpack-hot-middleware/client'
  ],
  devtool: 'inline-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
});