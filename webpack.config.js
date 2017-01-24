const webpack = require('webpack');

module.exports = {
  entry: {
    filename: './app.js',
  },
  output: {
    path: './',
    filename: 'bundle.js',
  },
  watch: true,
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules|vendor|bower_components/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
        },
      },
    ],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      output: {
        comments: false,
      },
      sourceMap: true,
    }),
  ],
};