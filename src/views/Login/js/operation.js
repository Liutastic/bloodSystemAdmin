// import { encrypt } from '../../../utils/crypt'
// import { mapMutations } from 'vuex'
// import user from '@/api/user'
export default {
  mounted () {

  },
  methods: {
    onSubmit () {
      this.$refs['loginFormRef'].validate(valid => {
        if (valid) this.login()
      })

    },
    // async login () {
    //   let res
    //   try {
    //     res = await user.login()

    //   } catch (err) {
    //     return
    //   }
    //   if (res.code === 200) {
    //     this.$store.commit('login', res.data.data)
    //     const { redirect } = this.$route.query
    //     redirect ? this.$router.push(redirect) : this.$router.push('/home')
    //   }
    //   return
    // },
    async login (body) {
      const { res } = await this.$request({ url: '/api/user/login', method: 'post', data: body })
      if (res.code === 200) {
        this.$store.commit('login', res.data.data)
        const { redirect } = this.$route.query
        redirect ? this.$router.push(redirect) : this.$router.push('/home')
      }
    }
  }
}