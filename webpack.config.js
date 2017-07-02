var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: [
    './client/index.jsx',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    modules: ['node_modules', 'shared'],
    extensions: ['.json', '.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, 'client'),
          path.resolve(__dirname, 'shared'),
        ],
        exclude: [
          /node_modules/,
          /server.jsx/,
        ],
        loaders: ['babel-loader'],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    proxy: {
      '*': 'http://127.0.0.1:' + (process.env.PORT || 3000),
    },
    host: '127.0.0.1',
  },
}
