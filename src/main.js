import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import VueQrcode from '@chenfengyuan/vue-qrcode'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'



Vue.use(Chartkick.use(Chart))
Vue.use(VueAxios, axios)
Vue.component(VueQrcode.name, VueQrcode)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
