const Koa = require('koa');
const path = require('path');
const helmet = require('koa-helmet');
const statics = require('koa-static');
const app = new Koa();
app.use(helmet());
app.use(statics(path.join(__dirname, '../public')))
app.listen(3000)
console.log('app started at port 3000...');