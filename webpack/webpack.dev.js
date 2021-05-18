/* eslint-disable import/no-extraneous-dependencies */
const { merge } = require('webpack-merge');
const path = require('path');
const Dotenv = require('dotenv-webpack');
const { HotModuleReplacementPlugin } = require('webpack');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  stats: 'errors-warnings',
  devServer: {
    port: 3000,
    contentBase: [
      path.resolve(__dirname, '..', 'src'),
      path.resolve(__dirname, '..', 'dist'),
    ],
    hot: true,
    open: true,
  },
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, '..', './.env.development'),
    }),
    new HotModuleReplacementPlugin(),
  ],
});
