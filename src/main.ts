import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'virtual:svg-icons-register'
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import gloablComponent from './components/index';
import '@/styles/index.scss'

const app = createApp(App)
//注册Elment-Plus
app.use(ElementPlus, {
    locale: zhCn//element-plus国际化配置
})
//注册全局组件
app.use(gloablComponent);
app.mount('#app')
