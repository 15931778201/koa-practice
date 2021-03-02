import combineRoutes from 'koa-combine-routers'
import publicRoutes from './publicRoutes'
import loginRoutes from './loginRoutes'

export default combineRoutes(publicRoutes, loginRoutes)