<template>
    <div id="header">
        <h3>欢迎</h3>
        <button @click="exit">退出登录</button>
        <hr/>
        <router-link :to="'./'">首页</router-link>
        <router-link :to="'./AboutUs'">关于我们</router-link>
    </div>
</template>

<script>
import store from '@/vuex/store';
import {mapState,mapMutations} from 'vuex';
export default {
    methods: {
        ...mapMutations(['LOGOUT']),
        exit(){
        alert("退出成功");
        store.commit('LOGOUT');
        this.$router.push('./Login')
        }
    },
}
</script>