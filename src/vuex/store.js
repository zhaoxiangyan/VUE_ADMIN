import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
// import * as getters from './getters'

Vue.use(Vuex)
// 应用初始状态
const state = {
  collapsed: false,
  locale: 'en'
}

// 定义所需的 mutations
const mutations = {
  CHANGECOLLAPSED (state) {
    state.collapsed = !state.collapsed
  },
  // CHANGELANGUAGE (state, {type}) {
  //   state.locale = type
  // }
  CHANGELANGUAGE (state, n) {
    state.locale = n
  }
}

// 创建 store 实例
export default new Vuex.Store({
  actions,
  getters: {
    getcollapsed: state => state.collapsed,
    getlocale: state => state.locale
  },
  state,
  mutations
})
