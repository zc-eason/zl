<template>
  <div>
    <mint-swipe :show-indicators="true" v-if="slideList" :auto="5000" :speed="1000" :defaultIndex="2">
      <mint-swipe-item v-for="(item, index) in slideList" :key="index">
        <a style="display: block" :href="item.clickUrl">
          <img :src="item.image"/>
        </a>
      </mint-swipe-item>
    </mint-swipe>
  </div>
</template>
<script>
  import mintSwipe from '../../src/components/mint-swipe/mint-swipe'
  import mintSwipeItem from '../../src/components/mint-swipe/mint-swipe-item'
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
      mintSwipe,
      mintSwipeItem
    },
    mounted () {
      console.log(this.slideList)
    }
  }
</script>
<style>
</style>
