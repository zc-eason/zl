<template>
  <div class="swipe-wrapper">
    <div class="pic-wrapper">
      <div class="pic" v-for="pic in pictures">
        <img :src=pic>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    props: {
      pictures: {
        type: Array,
        default: () => {
          return []
        }
      }
    }
  }
</script>
<style lang="less">
  .swipe-wrapper{
    margin-top: 30px;
    white-space: nowrap;
  }
  .pic{
    display: inline-block;
    width: 100%;
  }
  .pic> img{
    width: 100%;
    vertical-align: middle;
  }
</style>
