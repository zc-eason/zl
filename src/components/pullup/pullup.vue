<template>
  <div>
    <div class="page-bottom">
      <div v-if="isloading1">正在加载中...</div>
      <div>
        <div v-if="loadingMore1">上拉加载更多</div>
        <div v-if="loadingEnd1">加载完成</div>
        <div v-if="loadingFail1" @click="onBottom(1)">加载失败,点击重新加载</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    props: {
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
      },
      loadingMore: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      loadingMore1 () {
        // 加载更多与其他状态相斥 任何状态的变化 导致它变化
        return !(this.isloading || this.loadingEnd || this.loadingFail)
      },
      isloading1 () {
        return this.isloading
      },
      loadingEnd1 () {
        return this.loadingEnd
      },
      loadingFail1 () {
        return this.loadingFail
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
        if (param === 1) {
          this.$emit('fetchDateOnBottom')
          return
        }
        if (this.getScrollTop() + this.getWindowHeight() >= (this.getScrollHeight() - 20) && this.loadingMore1) {
          //  在这里面处理逻辑组件里实现逻辑的
          this.$emit('fetchDateOnBottom')
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

