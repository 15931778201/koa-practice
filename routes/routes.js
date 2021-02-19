const combineRoutes=require('koa-combine-routers')
const aroutes=require('./aRoutes')
const broutes=require('./bRoutes')
module.exports=combineRoutes(
    aroutes,
    broutes
)