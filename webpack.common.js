/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
module.exports = {
  entry: {
    main: './src/app/index.ts',
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
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
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};
