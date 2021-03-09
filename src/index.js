import Koa from 'koa'
import path from 'path'
import helmet from 'koa-helmet'
import statics from 'koa-static'
import cors from '@koa/cors'
import jsonutils from 'koa-json'
import koaBody from 'koa-body'
import router from './routes/routes'
import compose from 'koa-compose'
import config from './config/index'
import compress from 'koa-compress'
import JWT from 'koa-jwt'
import errorHandle from './common/ErrorHandle'

const app = new Koa()

// 定义公共路径，不需要jwt鉴权
const jwt = JWT({ secret: config.JWT_SECRET }).unless({
  path: [/^\/public/, /^\/login/]
})

const middleware  = compose([
  helmet(),
  statics(path.join(__dirname, '../public')),
  koaBody(),
  cors(),
  jsonutils({pretty: false, param: 'pretty'}),
  jwt,
  errorHandle
])
if (!config.isDevMode) {
  app.use(compress())
}
app.use(middleware)
app.use(router())
app.listen(3000)
console.log('app started at port 3000...')