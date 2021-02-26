import combineRoutes from 'koa-combine-routers'
import publicRoutes from './publicRoutes'
export default combineRoutes(publicRoutes)