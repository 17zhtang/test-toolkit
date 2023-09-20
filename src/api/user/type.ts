export interface loginFormData {
  account: string;
  password: string;
}

//定义全部接口返回数据都拥有ts类型
export interface ResponseData {
  code: number;
  message: string;
  success: boolean;
}

//定义登录接口返回数据类型
export interface loginResponseData extends ResponseData {
  data: string;
}
