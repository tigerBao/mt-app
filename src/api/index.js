import axios from '@/axios.js'
var api = {
  searchHotWords () {
    return axios.get('/api/meituan/header/searchHotWords.json')
  },
  search () {
    return axios.get('/api/meituan/header/search.json')
  },
  // MenuList() {
  //   return axios.get('/api/meituan/index/nav.json')
  // }
  getProductsList () {
    return axios.get('/api/meituan/list/goodsList.json')
  },
  getHotCity () {
    return axios.get('/api/meituan/city/hot.json')
  },
  getRecentCity () {
    return axios.get('/api/meituan/city/recents.json')
  },
  getProvince () {
    return axios.get('/api/meituan/city/province.json')
  },
  getPosition () {
    return axios.get('/api/meituan/city/getPosition.json')
  },
  getCityList () {
    return axios.get('/api/meituan/city/cityList.json')
  },
  login (params) {
    return axios.get('/api/meituan/login', params)
  }
}
export default api
