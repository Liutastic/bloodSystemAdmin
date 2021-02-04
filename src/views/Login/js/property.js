export default {
  data () {
    return {
      // card样式
      cardStyle: {
        padding: '30px',
        height: '300px',
        width: '500px'
      },
      loginForm: {
        username: 'ldw2333',
        password: '123456'
      },
      loginRules: {
        username: [
          { trigger: 'blur', required: true, message: '请输入用户名' }
        ],
        password: [
          { trigger: 'blur', required: true, massage: '请输入密码' }
        ]
      },
      fromLoading: false
    }
  }
}