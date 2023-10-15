//路由鉴权
import router from '@/router'

import useUserStore from '@/store/modules/user'
import pinia from '@/store'

let userStore = useUserStore(pinia)

//全局前置守卫
router.beforeEach(async (to: any, from: any, next: any) => {

  let token = userStore.token
  let username = userStore.username
  console.log('路由守卫')
  console.log(token)
  console.log(username)
  if (token) {
    console.log('1')
    if (to.path == '/login') {
      console.log('2')
      next({ path: '/' })
    } else {
      if (username) {
        console.log('3')
        console.log(username)
        next()
      } else {
        try {
          console.log('4')
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
      console.log('5')
      next()
    } else {
      console.log('6')
      next({ path: '/login', query: { redirect: to.path } })
    }
  }
  console.log('7')
  // next()
})
//全局后置守卫
router.afterEach((to: any, from: any) => {

})
