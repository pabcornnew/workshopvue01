import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueSweetalert2 from 'vue-sweetalert2'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  VueSweetalert2,
  render: h => h(App)
}).$mount('#app')
