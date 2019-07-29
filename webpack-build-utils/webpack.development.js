const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [{ loader: MiniCssExtractPlugin.loader }, 'css-loader'],
      },
      {
        test: /\.(scss|sass)$/,
        exclude: /node_modules/,
        use: [{ loader: MiniCssExtractPlugin.loader }, 'css-loader', 'sass-loader'],
      },
    ],
  },
  devServer: {
    port: 8000,
  },
};
