const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')
const path = require('path')
const generalOptions = require('./src/templates/common.options.js')

const isProd = process.env.NODE_ENV === 'production'

const cssDev = [
  'style-loader',
  {
    loader: 'css-loader',
    options: { importLoaders: 2 }
  },
  'postcss-loader',
  'sass-loader'
]
const cssProd = ExtractTextPlugin.extract({
  fallback: 'style-loader',
  use: ['css-loader', 'postcss-loader', 'sass-loader']
})
const cssConfig = isProd ? cssProd : cssDev

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  entry: {
    app: './src/app.js'
  },

  output: {
    path: resolve('dist'),
    filename: './js/[name].bundle.js'
  },

  externals: {
    jQuery: 'jQuery'
  },

  resolve: {
    extensions: ['.js', '.json', '.scss'],
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },

  devServer: {
    publicPath: '/',
    contentBase: [path.join(__dirname, 'dist'), path.join(__dirname, 'src/assets')],
    open: false,
    compress: true,
    hot: true,
    port: 9004
  },

  stats: {
    colors: true
  },

  devtool: 'cheap-eval-source-map',

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: cssConfig
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: 'babel-loader'
      },
      {
        test: /\.pug$/,
        use: 'pug-loader'
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '/',
              name: './images/[name].[ext]'
            }
          },
          {
            loader: 'image-webpack-loader'
          }
        ]
      },
      {
        test: /\.(otf|ttf|eot|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '/',
              context: './src/assets/',
              name: '[path][name].[ext]'
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),

    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/templates/home',
      hash: true
    }),

    new HtmlWebpackPlugin({
      filename: 'stories.html',
      template: './src/templates/stories',
      hash: true
    }),

    new ExtractTextPlugin({
      filename: './styles/app.css',
      allChunks: true,
      disable: !isProd
    })
  ]
}
