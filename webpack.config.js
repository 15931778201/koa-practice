const path = require('path')
const nodeExcternals = require(' webpack-node- externals')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const webpackConfig = {
  target: 'node',
  mode: 'develop',
  entry: {
    server: path. join(__dirname, 'src/app.js')
  },
  output: {
    filename: [name].bundle.js,
    path: path. join(__dirname, './dist')
  },
  devtool:'inline-source-map',
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      use: {
        loader: 'babel-loader'
      },
      exclude: [path. join(__dirname, '/node_modules')]
    }]
  },
  externals: [nodeExcternals()],
  plugins: [
    new CleanWebpackPlugin()
  ],
  node: {
    
  }
}