//路由鉴权
import router from '@/router'

import useUserStore from '@/store/modules/user'
import pinia from '@/store'

let userStore = useUserStore(pinia)

//全局前置守卫
router.beforeEach(async (to: any, from: any, next: any) => {

  let token = userStore.token
  let username = userStore.username
  if (token) {

    if (to.path == '/login') {

      next({ path: '/' })
    } else {
      if (username) {

        next()
      } else {
        try {
          await userStore.userInfo()
          next()
        } catch (error) {
          await userStore.userLogout()
          next({ path: '/login', query: { redirect: to.path } })
        }
      }
    }
  } else {
    if (to.path == '/login') {
      next()
    } else {
      next({ path: '/login', query: { redirect: to.path } })
    }
  }
  // next()
})
//全局后置守卫
router.afterEach((to: any, from: any) => {

})
