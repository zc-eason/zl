<template>
  <div class="sheet-wrapper" v-if="Visible">
    <div class="show-mask">
      <div class="sheet-items">
        <div class="sheet-item" v-for="(action, index) in actions" @click="actionToFather(action, index)">
          {{action.name}}
        </div>
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
    },
    computed: {
      Visible () {
        return this.sheetVisible
      }
    },
    methods: {
      actionToFather (action, index) {
        const actionMethod = this.actions[index].method
        // 为什么在这里调用函数可以，不用$emit
        // 因为action把这个函数也带过来了
        actionMethod(action, index)
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
