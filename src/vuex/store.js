import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

// 初始化时用localStore.getItem('user')，刷新页面无需重新登录
const state = {
    islogin: false
}
const mutations = {
    //将islogin保存到localStorage里，islogin表示登陆状态
    SET_islogin: (state, data) => {
        state.islogin = data
        localStorage.setItem('islogin', data) 
    },
    GET_USER: (state,data) => {
        //存储用户名
        state.user = data;
        localStorage.setItem('user',data)
    },
    LOGOUT: (state) => {
        //登出时清除用户名
        state.islogin = null
        state.user = null
        localStorage.removeItem('islogin')
        localStorage.removeItem('user')
        state.islogin = false
    }
}
const actions = {}

export default new Vuex.Store({
    state,
    mutations,
    actions
})