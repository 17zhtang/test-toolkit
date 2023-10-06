export interface loginFormData {
  account: string;
  password: string;
}

export interface registerFormData {
  account:string;
  username:string;
  password:string;
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



export interface userInfoResponseData extends ResponseData{
  data:{
    // routes:string[],
    // buttons:string[],
    // roles:string[],
    // name:string,
    // avatar:string
    id:number;
    account:string;
    username:string;
    groupId:number;
    avatar:string;
  }
}
