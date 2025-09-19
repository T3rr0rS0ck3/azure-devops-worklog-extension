
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  resolve: { extensions: ['.ts', '.js'] },
  module: { rules: [ { test: /\.ts$/, use: 'ts-loader', exclude: /node_modules/ } ] },
  plugins: [
    new HtmlWebpackPlugin({ template: 'src/index.html', inject: 'body' }),
    new CopyWebpackPlugin({ patterns: [{ from: 'src/style.css', to: '.' }] })
  ]
};
