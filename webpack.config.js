const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractCSS = new ExtractTextPlugin('styles.min.css');

module.exports = {
  mode: 'development',
  entry: {
    home: './src/index.js',
    details: './src/js/details.js',
    job_entry: './src/js/job-entry.js'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'js/[name].main.js',
    publicPath: '/assets/'
  },
  devServer: {
    port: 1234,
    contentBase: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: extractCSS.extract([
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ])
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  plugins: [
    extractCSS
  ]
}