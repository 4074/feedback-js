const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const packageJson = require('./package.json')

module.exports = {
  // mode: 'production',

  entry: {
    analytics: './src/analytics'
  },

  output: {
    filename: `[name]-${packageJson.version}.js`,
    path: path.resolve(__dirname, 'build')
  },

  // devtool: 'inline-source-map',

  resolve: {
    extensions: [".wasm", ".ts", ".tsx", ".mjs", ".cjs", ".js", ".json"]
  },

  module: {
    rules: [
      {
        test: /.ts$/,
        loader: 'babel-loader'
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: 'head'
    }),
    new CleanWebpackPlugin()
  ],
  devServer: {
    host: '0.0.0.0',
    port: 8000
  }
}
