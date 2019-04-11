const path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  entry: path.resolve(__dirname, './src/js/index.js'),
  devtool: false,
  resolve: { extensions: ['.js', '.jsx'] },
  output: { path: path.join(__dirname, 'build'), filename: '[name].js', publicPath: '/' },
  performance: { hints: false },
  optimization: { splitChunks: { chunks: 'all' } },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loaders: 'babel-loader',
        include: [path.join(__dirname, 'src'), path.join(__dirname, 'node_modules/@salesforce/design-system-react')],
        query: { presets: ['@babel/preset-env', '@babel/preset-react'], plugins: ['@babel/plugin-proposal-class-properties', '@babel/plugin-transform-runtime'] }
      },
      { test: /\.(png|jpg|gif)$/, use: [{ loader: 'file-loader', options: { name: '[name].[ext]' } }] },
      { test: /\.css$/, use: [{ loader: 'style-loader' }, { loader: 'css-loader' }] },
      { test: /\.(svg|gif|jpe?g|png)$/, loader: 'url-loader', options: { limit: 8000, name: 'assets/img/[name]-[chunkhash].[ext]' } },
      { test: /\.(eot|woff|woff2|ttf)$/, loader: 'url-loader?limit=30&name=assets/fonts/webfonts/[name].[ext]' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html', filename: './index.html' }),
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('production') } }),
    new CopyWebpackPlugin([{ from: './src/assets/plugins/salesforce', to: './assets/plugins/salesforce' }, { from: './src/favicon.png', to: './' }])
  ]
};
