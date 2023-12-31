import request from "@/utils/requestForBlob";


enum API {
  GET_QRCODE_URL = '/QRCode/getQRCode'
}

request.defaults.responseType = 'blob'

export const reqGetQRCode = (data:string) => request.post(API.GET_QRCODE_URL,data)