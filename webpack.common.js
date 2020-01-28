const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/app/index.js',
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.(svg|png|jpe?g|gif)$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[hash].[ext]',
            esModule: false,
            outputPath: 'images',
          },
        },
      },
    ],
  },
};
