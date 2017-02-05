const path = require('path')
const webpack = require('webpack')

module.exports = {
  context: path.resolve(__dirname, './'),
  entry: {
    app: './app.js'
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: "dist",
    filename: '[name].bundle.js',
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015'] }
        }]
      }
    ]
  },

  devServer: {
    contentBase: path.resolve(__dirname, './'),
    inline: true
  }
}
