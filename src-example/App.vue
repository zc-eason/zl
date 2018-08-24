/*
 * @Author: mikey.zhaopeng
 * @Date: 2018-04-28 18:33:32
 * @Last Modified by:   mikey.zhaopeng
 * @Last Modified time: 2018-04-28 18:33:32
 */
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
@import url('./assets/stand.less');

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
  font-size: 14px;
}
</style>
