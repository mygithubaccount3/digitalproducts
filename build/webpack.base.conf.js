const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const imagemin = require('imagemin-webpack-plugin').default;
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const purgeCSS = require('purgecss-webpack-plugin');
const glob = require('glob');

const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../dist'),
  assets: 'assets/'
};

module.exports = {
  // BASE config
  externals: {
    paths: PATHS
  },
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: `${PATHS.assets}js/[name].js`,
    path: PATHS.dist,
    publicPath: '/'
  },
  /*resolve: {
    modules: [
        path.join(__dirname, '../src/js')
    ]
  },*/
  watch: true,
  module: {
    rules: [
      {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: '/node_modules/'
    }, {
      test: /\.(png|jpg|gif|svg)$/,
      loader: 'file-loader',
      options: {
        name: '../img/[name].[ext]'
      }
    }, {
      test: /\.scss$/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: { sourceMap: true }
        },
        {
          loader: 'sass-loader',
          options: { sourceMap: true }
        }
      ]
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        {
          loader: 'postcss-loader',
          options: { sourceMap: true, config: { path: `${PATHS.src}/js/postcss.config.js` } }
        }
      ]
    }]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `${PATHS.assets}css/[name].css`
    }),
    /*new HtmlWebpackPlugin({
      hash: false,
      template: `${PATHS.src}/index.html`,
      filename: './index.html'
    }),*/
    new CopyWebpackPlugin([
      { from: `${PATHS.src}/img`, to: `${PATHS.assets}img` },
      { from: `${PATHS.src}/index.html`, to: '' }
    ]),
    new imagemin({
      disable: process.env.NODE_ENV !== 'production',
      pngquant: {
        quality: '70-75'
      }
      /*optipng: {
        optimizationLevel: 7
      }*/
    }),
    new CleanWebpackPlugin('../dist/*', {verbose: true, allowExternal: true}),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
      }),
    new purgeCSS({
      paths: glob.sync(`${PATHS.src}/**/*`,  { nodir: true }),
    }),
  ]
};
