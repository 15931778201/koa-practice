const {merge} = require('webpack-merge')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const baseWebpackConfig = require('./webpack.config.base')

const prodWepackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  stats: { children: false , warnings: false,  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserWebpackPlugin({
        terserOptions: {
          warnings: false,
          ecma: undefined,
          parse: {},
          compress: {
            warnings: false,
            drop_console: false,
            drop_debugger: false,
            dead_code: true
          },
          mangle: true, // Note `mangle.properties` is `false` by default.
          module: false,
          // Deprecated
          output: {
            comments: false,
            beautify: false
          },
          format: null,
          // parallel: true,
          sourceMap: false
        },
      }),
    ],
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 3,
          enforce: true
        }
      }
    }
  },
})

module.exports = prodWepackConfig

