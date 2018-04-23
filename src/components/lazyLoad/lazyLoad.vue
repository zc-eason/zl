<template>
  <div>
    <div v-for="item, index in imageList" :key='index' class="lazy-image-wrap">
      <img :src="defaultSrc" :data-src="item.img">
    </div>
  </div>
</template>
<script>
  import throttle from 'lodash/throttle'

  export default{
    props: {
      imageList: {
        type: Array,
        default: () => {
          return []
        }
      },
      defaultSrc: {
        type: String,
        default: '../../../static/1.jpg'
      }
    },
    methods: {
      lazyload () {
        const imageListsLength = this.imageList.length
        const img = document.getElementsByClassName('lazy-image-wrap')
        let n = 0
        // 可见区域高度 667
        const seeHeight = document.documentElement.clientHeight
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        // 滚动条距离顶部高度 起始为0 随着滚动增加慢慢增加
        for (var i = n; i < imageListsLength; i++) {
          console.log(img[i].offsetParent)
            if (img[i].offsetParent < seeHeight + scrollTop) {
                if (img[i].getAttribute('src') === '../../../static/1.jpg') {
                    img[i].src = img[i].getAttribute('data-src')
                }
                n = i + 1
            }
        }
      }
    },
    mounted () {
      this.lazyload()
      this.$nextTick(() => {
        window.addEventListener('scroll', throttle(this.lazyload, 500))
      })
    }
  }
</script>
<style lang="less" scoped>
.lazy-image-wrap{
  text-align: center;
  img {
    vertical-align: middle;
    align-items:center
  }
}
</style>
