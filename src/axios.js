import axios from 'axios'
axios.defaults.baseURL = 'http://api.duyiedu.com'
axios.interceptors.request.use(function (config) {
  config.params = {
    ...config.params,
    appkey: '1140343834_1562481513407'
  }
  return config
},
function (error) {
  return Promise.reject(error)
})
export default axios
