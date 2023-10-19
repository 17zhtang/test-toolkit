import request from "@/utils/request";

//项目用户相关的请求地址
import {getTestAccountsRquestData,getTestAccountsResponseData} from './type'

enum API {
  GET_TEST_ACCOUNT_URL = 'testAccount/getTestAccounts'
}

export const reqGetTestAccounts = (data:getTestAccountsRquestData) => request.post<any,getTestAccountsResponseData>(API.GET_TEST_ACCOUNT_URL,data)