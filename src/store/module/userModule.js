// import axios from 'axios'
const
  state = {
    userInfo: {
      username: '',
      avatar: '',
      token: '',
      phone: '',
    },
    isLogin: false
  },
  mutations = {
    login (state, data) {
      console.log('vuex中的data', data)
      console.log('vuex中的state', state)
      state.userInfo.token = data.token
      state.userInfo.username = data.username
      state.userInfo.avatar = data.avatar
      state.userInfo.phone = data.phone
      window.localStorage.setItem('token', data.token)
    }
  }
// actions = {

// },
// getters = {

// }

export default {
  state,
  mutations
}