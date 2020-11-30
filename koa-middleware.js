const Koa = require('koa');
const Router = require('koa-router');
const Koabody = require('koa-body');
const { resolve } = require('path');
const cors = require('@koa/cors');
// 创建一个Koa对象表示web app本身:
const app = new Koa();
const router = new Router();

router.prefix('/api') // 前缀

router.get('/', ctx => {
  console.log(ctx);
  console.log(ctx.request);
  ctx.body = 'hello world'
})

router.get('/api', ctx => {
  // 获取param
  const params = ctx.request.query
  console.log(ctx.request);
  console.log(params.name, params.age);
  ctx.body = {
    'name': params.name,
    'age': params.age
  }
})

router.get('/async', async(ctx) => {
  let result = await new Promise((resolve) => {
    setTimeout(function() {
      resolve('hello 2s later')
    }, 2000)
    ctx.body = result
  })
})

router.post('/post', async(ctx) => {
  let { body } = ctx.request
  // console.log(body);
  console.log(ctx.request);
  ctx.body = {
    ...body
  }
})
app.use(Koabody())
app.use(cors())
app.use(router.routes())
   .use(router.allowedMethods())
// 在端口3000监听:
app.listen(3000);
console.log('app started at port 3000...');