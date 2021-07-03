const { merge } = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const common = require('./webpack.common');
const prod = require('./webpack.prod');

module.exports = merge(common, prod, {
  plugins: [new BundleAnalyzerPlugin()],
});
