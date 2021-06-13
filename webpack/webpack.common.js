const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const { InjectManifest } = require('workbox-webpack-plugin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const ImageminWebpackPlugin = require('imagemin-webpack-plugin')
  .default;

const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, '..', 'src/index.js'),
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', 'src/index.html'),
      filename: 'index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '..', 'public/'),
          to: path.resolve(__dirname, '..', 'dist/'),
        },
      ],
    }),
    new WebpackPwaManifest({
      name: 'Sawala',
      short_name: 'Sawala Restaurant',
      description: 'Find your perfect restaurants',
      start_url: './index.html',
      display: 'standalone',
      background_color: '#F2C00A',
      theme_color: '#F2C00A',
      fingerprints: false,
      ios: true,
      crossorigin: 'anonymous',
      publicPath: './',
      icons: [
        {
          src: path.resolve(__dirname, '..', 'public/icons/icon.png'),
          sizes: [192, 256, 384, 512],
          purpose: 'any maskable',
        },
        {
          src: path.resolve(__dirname, '..', 'public/icons/icon.png'),
          sizes: [192, 256, 384, 512],
          purpose: 'any maskable',
          ios: true,
        },
      ],
    }),
    new InjectManifest({
      swSrc: path.resolve(__dirname, '..', 'src/sw.js'),
    }),
    new ImageminWebpackPlugin({
      plugins: [
        imageminMozjpeg({
          quality: 50,
          progressive: true,
        }),
        imageminPngquant({
          quality: [0.3, 0.5],
        }),
      ],
    }),
  ],
};
