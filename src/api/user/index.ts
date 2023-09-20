import request from "@/utils/request";

//项目用户相关的请求地址
import type {
  loginFormData,
  loginResponseData
} from "./type";

enum API {
  LOGIN_URL = "/user/login",
}
//登录接口
export const reqLogin = (data: loginFormData) =>
  request.post<any, loginResponseData>(API.LOGIN_URL, data);



