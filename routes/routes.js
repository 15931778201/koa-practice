import combineRoutes from 'koa-combine-routers'
import demoRoutes from './demoRoutes'
export default combineRoutes(demoRoutes)