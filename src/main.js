import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
// import elementui from 'element-ui'
import request from './utils/request'
import 'element-ui/lib/theme-chalk/index.css'
import './plugins/elementui'

Vue.config.productionTip = false

// Vue.use(elementui)

// 把axios挂载在vue原型上
Vue.prototype.$request = request

// elementUI部分需要挂载在Vue原型
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
