import Vue from 'vue'
import App from './App.vue'
import './plugins/element' // elementUI按需引入
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
