import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
// var Index = require('element-ui/lib/theme-default/index.css')
import Vuex from 'vuex'
import store from './vuex/store'
import axios from 'axios'
import VideoPlayer from 'vue-video-player'
// import 'videojs-flash'
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
// VideoPlayer.config({
//   youtube: true,
//   switcher: true,
//   hls: true
// })
Vue.use(VideoPlayer)
Vue.config.productionTip = false
/* eslint-disable no-new */
Vue.use(ElementUI)
Vue.use(Vuex)
Vue.prototype.$http = axios
// Vue.use(Index)

// 全局自定义指令改变路由title
Vue.directive('title', {
  inserted: function (el, binding) {
    document.title = el.innerText
    el.remove()
  }
})
// 全局自定义指令改变路由title

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

