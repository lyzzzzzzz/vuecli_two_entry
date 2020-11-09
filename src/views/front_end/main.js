import Vue from 'vue'
import App from './App.vue'
import '../../plugins/element.js'
import router from '../../router/front_end/index'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
