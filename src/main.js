import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
// var Index = require('element-ui/lib/theme-default/index.css')
import Vuex from 'vuex'
import store from './vuex/store'
import VueI18n from 'vue-i18n'
import i18n from './vueI18n/i18n.js'
Vue.config.productionTip = false
/* eslint-disable no-new */
Vue.use(ElementUI)
Vue.use(Vuex)
Vue.use(VueI18n)

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
i18n.locale = 'en'
