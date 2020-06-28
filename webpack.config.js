const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const autoprefixer = require('autoprefixer')
const packageJson = require('./package.json')

module.exports = (env = {}) => ({
  mode: env.production ? 'production' : 'development',

  entry: {
    feedback: './src/index'
  },

  output: {
    filename: env.production && env.version ? `[name]-${packageJson.version}-[contenthash:8].js` : '[name].js',
    path: path.resolve(__dirname, 'build')
  },

  devtool: env.production ? 'cheap-source-map' : 'inline-source-map',

  resolve: {
    extensions: ['.ts', '.js', '.json']
  },

  module: {
    rules: [
      {
        test: /.ts$/,
        loader: 'babel-loader'
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              attributes: { type: 'text/css', id: 'feedback-style-initial' },
              insert: function(element) {
                const parent = document.querySelector('head')
                parent.insertBefore(element, parent.firstChild)
              }
            }
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [autoprefixer()]
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /.svg$/,
        loader: 'svg-inline-loader'
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: 'head'
    }),
    ...(env.production ? [new CleanWebpackPlugin()] : [])
  ],
  devServer: {
    host: '0.0.0.0',
    port: 3000
  }
})
