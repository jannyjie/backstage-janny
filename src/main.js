import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入CSS
import "@/assets/scss/main.scss"
import Ant from "ant-design-vue/es";
import "ant-design-vue/dist/antd.css";

createApp(App).use(store).use(router).use(Ant).mount('#app')
