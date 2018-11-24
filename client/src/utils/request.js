import axios from 'axios'
import Vue from 'vue'

// 创建axios实例
const service = axios.create({
  baseURL: "http://localhost:4000/api", // api 的 base_url
  timeout: 5000 // 请求超时时间
})
// response 拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    return response.data
  },
  error => {
    //服务器报出来的所有的错误，都会被前端接收到这个位置，这个位置会打印这些错误信息，方便进行调试....
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)
export default service
