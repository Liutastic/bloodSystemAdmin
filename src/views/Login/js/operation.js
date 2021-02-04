// import { encrypt } from '../../../utils/crypt'
// import { mapMutations } from 'vuex'
// import user from '@/api/user'
export default {
  mounted () {

  },
  methods: {
    onSubmit () {
      this.$refs['loginFormRef'].validate(valid => {
        if (valid) this.login(this.loginForm)
      })
    },
    async login (body) {
      this.fromLoading = true
      const { data, data: { content } } = await this.$request({ url: '/api/user/login', method: 'post', data: body })
      if (data.code === 200) {
        this.$store.commit('login', content)
        const { redirect } = this.$route.query
        redirect ? this.$router.push(redirect) : this.$router.push('/home')
        // this.$message({ message: '登录成功!', type: 'success' })
        this.$successMsg('登录成功!')
      }
      this.formLoading = false
    }
  }
}