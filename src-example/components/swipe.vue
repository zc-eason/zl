<template>
  <div>
    <div>基础用法</div>
    <swipe
      :slideList='slideList'
    >
    <div>
      
    </div>
    </swipe>
  </div>
</template>
<script>
  import swipe from '../../src/components/swipe/swipe'
  export default{
    data () {
      return {
        autoTime: 0,
        slideList: [
          {
            'clickUrl': '#',
            'desc': 'nhwc',
            'image': require('../../src-example/assets/swipe/2.jpg')
          },
          {
            'clickUrl': '#',
            'desc': 'hxrj',
            'image': require('../../src-example/assets/swipe/3.jpg')
          },
          {
            'clickUrl': '#',
            'desc': 'rsdh',
            'image': require('../../src-example/assets/swipe/4.jpg')
          }
        ],
        timer: ''
      }
    },
    components: {
      swipe
    }
  }
</script>
<style lang='less'>

</style>
