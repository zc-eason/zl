<template>
  <div class="action-sheet-wrapper">
    <div class="action-sheet-button" @click="PullUpSheet">点击上拉 action sheet</div>
    <div class="action-sheet-button" @click="noCancelButton">不带取消按钮的action sheet</div>
    <actionSheet
      :actions="actions"
      :sheetVisible="sheetVisible"
      v-on:changeVisible='changeVisible'
      >
    </actionSheet>
  </div>
</template>
<script>
  import actionSheet from '../../src/components/actionSheet/actionSheet'
  
  export default{
    data () {
      return {
        actions: [{name: '拍照', method: this.takePhoto},
                  {name: '从照片中选择', method: this.choicePhoto},
                  {name: '取消', method: this.cancel},
                  {name: '取消', method: this.cancel},
                  {name: '取消', method: this.cancel},
                  {name: '取消', method: this.cancel},
                  {name: '取消', method: this.cancel},
                  {name: '取消', method: this.cancel}],
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
      },
      takePhoto () {
        this.sheetVisible = false
        console.log('我要调起手机拍照功能啦~')
      },
      choicePhoto () {
        this.sheetVisible = false
        console.log('我想从手机相册里选择照片')
      },
      cancel () {
        this.sheetVisible = false
        console.log('取消吧,不选啦!')
      },
      changeVisible () {
        this.sheetVisible = false
      }
    }
  }
</script>
<style lang="less">
.action-sheet-wrapper{
  width: 100%;
  box-sizing: border-box;
  padding: 200px 0;
  .action-sheet-button{
    background-color: #f6f8fa;
    box-shadow: 0 0 1PX #b8bbbf;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    margin: 0 15px 20px ;
  }
}
</style>
