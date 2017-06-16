import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
// var Index = require('element-ui/lib/theme-default/index.css')
Vue.config.productionTip = false
/* eslint-disable no-new */
Vue.use(ElementUI)
// Vue.use(Index)
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
