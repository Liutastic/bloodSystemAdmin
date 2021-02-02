import axios from 'axios'

const service = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 5 * 1000
})

// 下面配置请求拦截器和响应拦截器


export default service