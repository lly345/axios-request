import Vue from 'vue'
import Router from 'vue-router'
import {routes} from './routes'
Vue.use(Router)

const route= new Router({
  linkActiveClass:"active",
  routes
})

/**导航的前置守卫 */
route.beforeEach((to,from,next)=>{
  const requeireAuth=to.meta.autorization
  // 判断路由是否需要登录态
  if(requeireAuth){
    const token=window.$store.state.Login.token
    
    if(token){
      next()
    }else{
      next('/login')
    }
  }else{
    next()
  }
})

export default route
