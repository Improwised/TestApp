const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
module.exports = {
  mode: 'development',
  entry: '/src/index.tsx', // main js
  output: {
    path: path.resolve(__dirname, 'dist'), // output folder
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader', // for styles
        ],
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // base html
    }),
    new ESLintPlugin(),
  ],
  resolve: {
    alias: {
      'common': '../common'
    }
  }
}
