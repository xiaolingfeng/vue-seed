import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from '@/router/index'
import VueRouter from 'vue-router'
import '@/style/index.less'
import '@/directive/index'
Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
