import {merge} from 'webpack-merge'
import baseWebpackConfig from './webpack.config.base'

const devWepackConfig = merge(baseWebpackConfig, {
  devtool:'eval-source-map',
  mode: 'development',
  stats: { children: false }
})

export default devWepackConfig