const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

dotenv.config();

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(jpe?g|png|gif|mp3|svg|ico)$/,
        exclude: /node-modules/,
        loader: 'file-loader',
        options: {
          outputPath: 'img/'
        }
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body',
    }),
    new webpack.DefinePlugin({
      'process.env.SERVER_URL': JSON.stringify(process.env.SERVER_URL),
    }),
    new MiniCssExtractPlugin({
      filename: 'app.css',
      chunkFilename: '[id].css',
    }),
    new webpack.DefinePlugin({
      'process.env.SERVER_URL': JSON.stringify(process.env.SERVER_URL),
      'process.env.SECRET': JSON.stringify(process.env.SECRET),
      'process.env.FACEBOOK_SHARE_URL': JSON.stringify(process.env.FACEBOOK_SHARE_URL),
      'process.env.TWITTER_SHARE_URL': JSON.stringify(process.env.TWITTER_SHARE_URL),
      'process.env.FACEBOOK_SHARE_APP_ID': JSON.stringify(process.env.FACEBOOK_SHARE_APP_ID)
    })
  ],
};
