import { getValue, getHValue,setValue } from './RedisConfig'
setValue('imooc', 'imooc message from redis client')
getValue('imooc').then((res) => {
  console.log('getValue:'+ res)
})

setValue('imoocobj', {name: 'wusx',age: 23, email: '719791415@qq.com'})
getHValue('imoocobj').then((res) => {
  console.log('getHValue:'+ JSON.stringify(res, null ,2))
})