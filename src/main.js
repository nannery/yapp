import Vue   from 'vue'
import App   from './App.vue'
import Store from './store.js'

Vue.config.productionTip = false

const yapp = new Vue({
  data:   new Store,
  render: h => h(App)
}).$mount('#app')
