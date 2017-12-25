<template>
  <div class="mint-swipe-item">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    mounted () {
      console.log(`this.slideList${this.slideList}`)
      this.$parent && this.$parent.swipeItemCreated(this)
    },
    destroyed () {
      this.$parent && this.$parent.swipeItemDestroyed(this)
    }
  }
</script>
<style lang="less">
  img{
  width: 100%;
  vertical-align: middle;
  }
</style>
