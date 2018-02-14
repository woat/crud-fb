import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  user: {},
  isLoggedIn: false
}

const store = new Vuex.Store({
  state,
  getters: {
    currentUser: state => {
      return state.user
    },
    loggedIn: state => {
      return state.isLoggedIn
    }
  },
  mutations: {
    loginUser (state, newUser) {
      state.user = newUser
      state.isLoggedIn = true
    },
    logoutUser (state) {
      state.user = {}
      state.isLoggedIn = false
    }
  }
})

export default store
