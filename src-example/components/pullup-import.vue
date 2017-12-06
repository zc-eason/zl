<template>
  <div>
    <pullUp :items="items" :durationTime="durationTime"></pullUp>
  </div>
</template>
<script>
  
  import pullUp from '../../src/components/pullup/pullup'
  export default{
    data () {
      return {
        items: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        durationTime: 3000
      }
    },
    components: {
      pullUp
    }
  }
</script>
<style lang="less">
  ul>li{
    width: 100%;
    height: 100px;
    line-height:100px;
    text-align: center;
  }
  .page-bottom{
    height: 50px;
    line-height: 50px;
    text-align: center;
  }
</style>

