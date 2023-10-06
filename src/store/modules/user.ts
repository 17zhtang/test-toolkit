import type {UserState} from '@/store/type'
//静态路由
import { constantRoute } from '@/router/routes'
import { defineStore } from 'pinia'
import { reqLogin,reqRegister, reqUserInfo, reqLogout } from '@/api/user'
import type { loginFormData, loginResponseData,userInfoResponseData,registerFormData } from '@/api/user/type'
import type UserState from './types/type'
import { SET_TOKEN, GET_TOKEN, REMOVE_TOKEN } from '@/utils/token'
import { register } from 'module'
let useUserStore = defineStore('User', {
  state: (): UserState => {
    return {
      token: '',
      menuRoutes: constantRoute, //仓库存储菜单
      account:'',
      username: '',
      avatar: '',
    }
  },
  actions: {
    async userLogin(data: loginFormData) {
      let result: loginResponseData = await reqLogin(data)
      if (result.code == 200) {
        this.token = result.data as string
        SET_TOKEN(result.data as string)
        return 'ok'
      } else {
        return Promise.reject(new Error(result.data))
      }
    },
    async userRegister(data: registerFormData) {
      let result: any = await reqRegister(data)
      if (result.code == 200) {
        return 'ok'
      } else {
        return Promise.reject(new Error(result.data))
      }
    },

    async userInfo() {
      let result:userInfoResponseData = await reqUserInfo()
      if (result.code == 200) {
        this.username = result.data.username
        this.avatar = result.data.avatar
        return 'ok'
      } else {
        return Promise.reject(new Error(result.message))
      }
    },
    async userLogout() {
      let result:any = await reqLogout()
      if (result.code == 200) {
        this.token = ''
        this.username = ''
        this.avatar = ''
        REMOVE_TOKEN()
        return 'ok'
      } else {
        return Promise.reject(new Error(result.message))
      }
    },
  },
  getters: {},  
})

export default useUserStore
