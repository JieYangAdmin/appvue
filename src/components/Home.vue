<template>
  <div class="home">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from '@/components/pages/Header';
export default {
  data () {
    return {
     
    }
  },
  components: {
    Header
  }
}
</script>

<style lang="less">
  @import "../assets/base.less";
  body{
    background: none;
  }
</style>
