import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  position: {
    name: '北京'
  }
}
const mutations = {
  setPosition (state, val) {
    console.log(state, val)
    state.position = val
  }
}

const actions = {
  setPosition ({commit}, val) {
    commit('setPosition', val)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
