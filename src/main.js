import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

const yapp = new Vue({
  render: h => h(App)
}).$mount('#app')
