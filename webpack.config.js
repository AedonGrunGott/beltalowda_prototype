const Dotenv = require('dotenv-webpack');
const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: path.join(__dirname, 'client', 'source', 'index.jsx'),
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        resolve: {
          extensions: ['.js', '.jsx', '.png', '.jpg'],
        },
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  output: {
    path: path.join(__dirname, '/client/dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new Dotenv(),
  ],
};
