import type {UserState} from '@/store/type'
//静态路由
import { constantRoute } from '@/router/routes'
import { defineStore } from 'pinia'
let useUserStore = defineStore('User', {
  state: (): UserState => {
    return {
      token: 'fake token',
      menuRoutes: constantRoute, //仓库存储菜单
      username: '',
      avatar: '',
    }
  },
  getters: {},
})

export default useUserStore
