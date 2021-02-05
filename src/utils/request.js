import axios from 'axios'

const service = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 5 * 1000
})

// 下面配置请求拦截器和响应拦截器

// 请求拦截
service.interceptors.request.use(config => {
  config.headers.Authorization = window.localStorage.getItem('token')
  return config
})

// 响应拦截
service.interceptors.response.use(response => {
  // console.log(response)
  return response.data
},
  err => {
    return Promise.reject(err)
  })

export default service