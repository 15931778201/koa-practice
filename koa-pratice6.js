const Koa = require('koa');
const Router = require('koa-router');
const Koabody = require('koa-body');
const cors = require('@koa/cors');
// 创建一个Koa对象表示web app本身:
const app = new Koa();
const router = new Router();

router.prefix('/api') // 前缀

router.post('/user', async(ctx) => {
  let { body, header } = ctx.request
  if(!header.role || header.role !== "admin"){
    ctx.body = {
      'status': '401',
      'msg': 'unauthorized post'
    }
  }
  else if(!body.name || body.name === '' || !body.email || body.email === ''){
    ctx.body = {
      'status': '401',
      'msg': 'name和email不可为空'
    }
  }
  else {
    ctx.body = {
      'code': '200',
      'data': body,
      'msg': '上传成功'
    }
  }
  console.log(ctx.request.body);
})
app.use(Koabody())
app.use(cors())
app.use(router.routes())
   .use(router.allowedMethods())
// 在端口3000监听:
app.listen(3000);
console.log('app started at port 3000...');