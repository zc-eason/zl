<template>
  <div class="sheet-wrapper" v-if="sheetVisible">
    <div class="show-mask">
      <div class="sheet-items">
        <div class="sheet-item" v-for="action in actions">{{action}}</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    props: {
      actions: {
        type: Array,
        default: []
      },
      sheetVisible: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
<style lang="less">
  .sheet-wrapper{
    .show-mask{
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, .6);
      z-index: 99;
    }
    .sheet-items{
      width: 100%;
      background-color: white;
      position: absolute;
      bottom: 0;
      z-index: 100;
    }
    .sheet-item{
      height: 40px;
      line-height: 40px;
      text-align: center;
    }
  }
</style>
