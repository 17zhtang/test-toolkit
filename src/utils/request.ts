import axios from "axios";
import useUserStore from '@/store/modules/user'
import { ElMessage } from "element-plus";
//创建axios实例
let request = axios.create({
    // baseURL: import.meta.env.VITE_APP_BASE_API,
    baseURL:import.meta.env.VITE_SERVE,
    timeout: 5000
})
//请求拦截器
request.interceptors.request.use(config => {
    let userStore = useUserStore()
  if(userStore.token){
    config.headers.token = userStore.token 
  }
    return config;
});
//响应拦截器
request.interceptors.response.use((response) => {
	console.log('----------')
	console.log(response.data)
    return response.data;
}, (error) => {
    let msg = '';
    let status = error.response.status;
    switch (status) {
        case 401:
            msg = "token过期";
            break;
        case 403:
            msg = '无权访问';
            break;
        case 404:
            msg = "请求地址错误";
            break;
        case 500:
            msg = "服务器错误";
            break;
        default:
            msg = "网络错误";
    }
    ElMessage({
        type: 'error',
        message: msg
    })
    return Promise.reject(error);
});
export default request;
