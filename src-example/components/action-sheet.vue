<template>
  <div class="action-sheet-wrapper">
    <div class="action-sheet-button" @click="PullUpSheet">点击上拉 action sheet</div>
    <div class="action-sheet-button" @click="noCancelButton">不带取消按钮的action sheet</div>
    <actionSheet
      :actions="actions"
      :sheetVisible="sheetVisible">
    </actionSheet>
  </div>
</template>
<script>
  import actionSheet from '../../src/components/actionSheet/actionSheet'
  
  export default{
    data () {
      return {
        actions: ['拍照', '从相册中选择', '取消'],
        sheetVisible: false
      }
    },
    components: {
      actionSheet
    },
    methods: {
      PullUpSheet () {
        this.sheetVisible = true
      },
      noCancelButton () {
        this.sheetVisible = true
      }
    }
  }
</script>
<style lang="less">
.action-sheet-wrapper{
  width: 100%;
  box-sizing: border-box;
  padding: 200px 15px;
  .action-sheet-button{
    background-color: #f6f8fa;
    box-shadow: 0 0 1PX #b8bbbf;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
  }
}
</style>
