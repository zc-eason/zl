<template>
  <div>
    <div class="page-bottom">
      <div>正在加载中...</div>
      <div>
        <div v-if="isloading1">上啦加载更多，与三个相斥</div>
        <div v-if="loadingEnd">加载完成</div>
        <div v-if="loadingFail" @click="onBottom(1)">加载失败,点击重新加载</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    props: {
      items: {
        type: Array,
        default: []
      },
      durationTime: {
        type: Number,
        default: 2000
      },
      isloading: {
        type: Boolean,
        default: false
      },
      loadingEnd: {
        type: Boolean,
        default: false
      },
      loadingFail: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      isloading1 () {

        return isloading
      }
    },
    methods: {
      getScrollTop () {
        return document.documentElement.scrollTop || document.body.scrollTop
      },
      getScrollHeight () {
        return document.documentElement.scrollHeight || document.body.scrollHeight
      },
      getWindowHeight () {
        return document.documentElement.clientHeight || document.body.clientHeight
      },
      onBottom (param) {
        if (this.getScrollTop() + this.getWindowHeight() === this.getScrollHeight()) {
         //  在这里面处理逻辑 
          this.$emit('fetchDateOnBottom', param)
        }
      }
    },
    mounted () {
      this.$nextTick(() => {
        window.addEventListener('scroll', this.onBottom)
      })
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

