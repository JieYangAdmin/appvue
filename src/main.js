// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'

// 引入公共js
import base from './assets/base.js'
// 引入vuex
import store from './vuex/store'
//引入loginMock.js
import Mock from './mock/mock'
// 引入axios http请求库
import axios from 'axios'

// 设置默认的请求
axios.defaults.baseURL = 'http://mockjs.com/api';
Vue.prototype.$base = base;
Vue.prototype.$http = axios;


Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

