import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../static/css/style.less'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import 'swiper/css/swiper.min.css';


Vue.config.productionTip = false
Vue.use(ElementUI)

//添加cookie到请求头，用于短信验证
axios.defaults.withCredentials = true
Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')