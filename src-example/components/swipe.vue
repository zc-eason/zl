<template>
  <div>
    <div>基础用法</div>
    <swipe :pictures="pictures"></swipe>
  </div>
</template>
<script>
  import swipe from '../../src/components/swipe/swipe'
  export default{
    data () {
      return {
        autoTime: 0,
        pictures: [require('../../src-example/assets/swipe/1.jpg'),
                  require('../../src-example/assets/swipe/2.jpg'),
                  require('../../src-example/assets/swipe/3.jpg'),
                  require('../../src-example/assets/swipe/4.jpg'),
                  require('../../src-example/assets/swipe/5.jpg')
                  ]
      }
    },
    components: {
      swipe
    }
  }
</script>
<style lang="less">

</style>
