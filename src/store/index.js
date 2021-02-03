import Vue from 'vue'
import Vuex from 'vuex'
import userModule from './module/userModule'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    userModule
  }
})

export default store
