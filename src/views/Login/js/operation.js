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
      const { data, data: { content } } = await this.$request({ url: '/api/user/login', method: 'post', data: body })
      if (data.code === 200) {
        this.$store.commit('login', content)
        const { redirect } = this.$route.query
        redirect ? this.$router.push(redirect) : this.$router.push('/home')
      }
    }
  }
}