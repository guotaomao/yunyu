import axios, { AxiosInstance } from 'axios'
import { headers } from './config'
import getAuth from './auth'
const instance: AxiosInstance = axios.create({
  // baseURL: baseURL,
  headers: { ...headers },
  timeout: 1000,
})

instance.interceptors.request.use(
  config => {
    // console.log('config', config)
    // 发送请求前做什么
    Object.assign(config.headers, { 'Content-Type': 'application/json' }, getAuth())
    return config
  },
  error => {
    // console.log('error', error)
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  response => {
    // 对响应数据做点事
    // console.log('response', response)
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

export default instance
