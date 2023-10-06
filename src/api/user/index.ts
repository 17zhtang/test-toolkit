import request from "@/utils/request";

//项目用户相关的请求地址
import type {
  loginFormData,
  registerFormData,
  loginResponseData,
  userInfoResponseData,
} from "./type";

enum API {
  LOGIN_URL = '/user/login',
  REGISTER_URL = '/user/register',
  USERINFO_URL = '/user/getUserInfo',
  LOGOUT_URL='/user/logout'
}
//登录接口
export const reqLogin = (data: loginFormData) =>
  request.post<any, loginResponseData>(API.LOGIN_URL, data);

export const reqRegister = (data: registerFormData) => request.post<any,any>(API.REGISTER_URL,data)

export const reqUserInfo = () =>
  request.get<any, userInfoResponseData>(API.USERINFO_URL)
//退出登录
export const reqLogout = () => request.post<any, any>(API.LOGOUT_URL)
