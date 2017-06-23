import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
// import * as getters from './getters'

Vue.use(Vuex)

// 应用初始状态
const state = {
  collapsed: false
}

// 定义所需的 mutations
const mutations = {
  CHANGECOLLAPSED (state) {
    state.collapsed = !state.collapsed
  }
}

// 创建 store 实例
export default new Vuex.Store({
  actions,
  getters: {
    getcollapsed: state => state.collapsed
  },
  state,
  mutations
})
