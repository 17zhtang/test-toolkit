import request from "@/utils/request";


import {getTestAccountsRquestData,getTestAccountsResponseData,testAccountRecord} from './type'

enum API {
  GET_TEST_ACCOUNT_URL = 'testAccount/getTestAccounts',
	SAVE_TEST_ACCOUNT_URL = 'testAccount/saveTestAccount',
	ADD_TEST_ACCOUNT_URL = 'testAccount/addTestAccount'
}

export const reqGetTestAccounts = (data:getTestAccountsRquestData) => request.post<any,getTestAccountsResponseData>(API.GET_TEST_ACCOUNT_URL,data)

export const reqSaveTestAccount = (data:testAccountRecord) => request.post(API.SAVE_TEST_ACCOUNT_URL,data)

export const reqAddTestAccount = (data:testAccountRecord) => request.post(API.ADD_TEST_ACCOUNT_URL,data)


