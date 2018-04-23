<template>
  <div class="lazy-load-wrapper">
    <lazy-load :imageList='imageLists'></lazy-load>
  </div>
</template>
<script>
import lazyLoad from '../../src/components/lazyLoad/lazyLoad.vue'
  export default{
    data () {
      return {
        imageLists: [  // 初始化图片懒加载数据
          { img: require('../assets/swipe/2.jpg') },
          { img: require('../assets/swipe/3.jpg') },
          { img: require('../assets/swipe/4.jpg') },
          { img: require('../assets/swipe/5.jpg') },
          { img: require('../assets/swipe/2.jpg') },
          { img: require('../assets/swipe/3.jpg') },
          { img: require('../assets/swipe/4.jpg') },
          { img: require('../assets/swipe/5.jpg') },
          { img: require('../assets/swipe/2.jpg') },
          { img: require('../assets/swipe/3.jpg') },
          { img: require('../assets/swipe/4.jpg') },
          { img: require('../assets/swipe/5.jpg') },
          { img: require('../assets/swipe/2.jpg') },
          { img: require('../assets/swipe/3.jpg') },
          { img: require('../assets/swipe/4.jpg') },
          { img: require('../assets/swipe/5.jpg') }
        ]
      }
    },
    components: {
      lazyLoad
    }
  }
</script>
<style lang="less" scoped>

</style>
