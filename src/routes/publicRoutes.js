import Router from 'koa-router'
import publicController from '../api/publicController'

const router=new Router()
router.prefix('/public')

router.get('/demo', publicController.demo)
router.get('/getCaptcha', publicController.getCaptcha)

export default router