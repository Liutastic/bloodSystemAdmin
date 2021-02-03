export default {
  // 登录
  login (data) {
    this.$request({
      url: '/api/user/login',
      method: 'post',
      data
    })
  }
}