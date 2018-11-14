import router from './router'
import store from './store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from "./utils/auth"
//1.创建白名单,那些页面是不需要权限的
const whiteList = ['/login']
//2.设置在页面跳转之前的一些权限判断操作
//to 即将要跳转的页面,from是当前所在的页面,next是判断之后,必须调用next才可以进行下一步的操作
router.beforeEach((to,from,next)=>{
  NProgress.start()
  if (getToken()){
    if (to.path === '/login'){
      next({path:'/list'})
      NProgress.done()//
    } else {
      next()//正常进行页面跳转
    }
  } else{
    //没有token值
    if (whiteList.indexOf(to.path) !== -1){
      next()
    }else {
      next({path:'/login'})
      NProgress.done()
    }
  }
})
router.afterEach(()=>{
  NProgress.done();
})
