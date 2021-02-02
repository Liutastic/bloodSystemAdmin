import { encrypt } from '../../../utils/crypt'

export default {
  mounted () {

  },
  methods: {
    onSubmit () {
      console.log(encrypt('233'))
    }
  }
}