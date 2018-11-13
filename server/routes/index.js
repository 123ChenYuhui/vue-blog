import Router from 'koa-router'
import {base_API} from "../config"

const router = new Router()
//前端所有的请求发过来的时候都是http://localhost:3000/api/.....
router.get('/',async ctx=>{
    ctx.body = '欢迎使用vue-blog接口测试服务器'
})
//所有的路由都写在这里
router.prefix(`${base_API}`)

router.get('/index',async ctx=>{
    ctx.body = '我是首页的接口'
})
export default router