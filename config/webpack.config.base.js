const path = require('path')
const utils = require('./utils')
const nodeExcternals = require('webpack-node-externals')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const { DefinePlugin } = require('webpack')
// debugger
const webpackConfig = {
  target: 'node',
  entry: { 
    // 来定义入口文件
    server: path. join(utils.APP_PATH, 'index.js')
  },
  output: { 
    //定义构建后的文件的输出
    filename: '[name].bundle.js',
    path: utils.DIST_PATH
  },
  module: {
    //关于模块的加载相关，我们就定义在module.loaders中。这里通过正则表达式去匹配不同后缀的文件名，然后给它们定义不同的加载器。比如说给less文件定义串联的三个加载器（！用来定义级联关系）：
    rules: [{
      test: /\.(js|jsx)$/,
      use: {
        loader: 'babel-loader'
      },
      exclude: [path. join(__dirname, '/node_modules')]
    }]
  },
  // webpack在构建包的时候会按目录的进行文件的查找，resolve属性中的extensions数组中用于配置程序可以自行补全哪些文件后缀：
  // resolve: {
  //   extensions:['','.js','.json']
  // },
  // 当我们想在项目中require一些其他的类库或者API，而又不想让这些类库的源码被构建到运行时文件中，这在实际开发中很有必要。此时我们就可以通过配置externals参数来解决这个问题：
  externals: [nodeExcternals()],
  plugins: [
    new CleanWebpackPlugin(),
    new DefinePlugin({
      'process.dev': {
        NODE_ENV: (process.env.NODE_ENV === 'production' ||
        process.env.NODE_ENV === 'prod' ) ? "'production'" : 
        "'development'"
      }
    })
  ],
  node: {
    global: true,
    __filename: true,
    __dirname: true
  }
}
console.log(webpackConfig)
module.exports = webpackConfig

// 调试命令
// win npx node --inspect-brk  ./node_modules/webpack/bin/webpack --inline--process
// mac npx node --inspect-brk  ./node_modules/webpack/bin/webpack --inline--process || npx node --inspect-brk ./node_modules/.bin/webpack --inline--process