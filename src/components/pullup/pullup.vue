<template>
  <div>
    <ul>
      <li v-for='(index, item) in items'>{{item}}</li>
    </ul>
    <div class="page-bottom">
      <div v-if="isloading">正在加载中...</div>
      <div v-if="loadingEnd">加载完成</div>
      <div v-if="loadingFail" @click="onBottom">加载失败,点击重新加载</div>
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
      onBottom () {
        if (this.getScrollTop() + this.getWindowHeight() === this.getScrollHeight()) {
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

