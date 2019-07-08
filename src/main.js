// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/main.css'
import store from './store'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.directive('document-click', {
  bind (el, binding, vnode) {
    console.log('dddd')
    document.addEventListener('click', binding.value, false)
  },
  inserted () {
    console.log('inserted')
  },
  update () {
    console.log('update')
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
// 引进ElementUI组件
// import Vue from 'vue'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/them-chalk/index.css'
// import App from './App.vue'
// Vue.use(ElementUI);
// new Vue({
//   el: '#app',
//   render: h =>h(App)
// })
