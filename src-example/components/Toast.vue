<template>
  <div>
    <div class="toast-wrapper">
      <button value="点击弹出Toast" @click="showToast">点击弹出Toast</button>
      <button value="点击弹出带有icon的Toast" @click="showIconToast">点击弹出带有icon的Toast</button>
      <button value="自定义Toast的位置" @click="showCustomToast">自定义Toast的位置</button>
    </div>
    <!--<middleToast :toastShow="toastShow" :toastMessage="toastMessage" :style="toastBackground" :class="{toastColor:toastColor}"></middleToast>-->
    <iconToast :toastShow="toastShow" :bg="toastBackground"></iconToast>
    <!--<customToast :toastShow="toastShow" :position="position"></customToast>-->
  </div>
</template>
<script>
  import middleToast from '../../src/components/toast/middleToast'
  import iconToast from '../../src/components/toast/iconToast'
  import customToast from '../../src/components/toast/customToast'

  var imgUrl = require('../assets/logo.png')

  export default{
    data () {
      return {
        toastShow: false,
        toastMessage: '我是toast,我被弹出来了我被弹出来了我被弹出来了我被弹出来了我被弹出来了',
        toastColor: false,
        toastBackground: {
          'background': 'url(' + imgUrl + ') no-repeat',
          'background-size': '100px 100px'
        },
        IcontoastShow: false,
        position: {
          'top': '100px',
          'left': '100px'
        }
      }
    },
    components: {
      middleToast,
      iconToast,
      customToast
    },
    methods: {
      showToast () {
        this.toastShow = true
        setTimeout(() => {
          this.toastShow = false
        }, 3000)
      },
      showIconToast () {
        this.toastShow = true
        this.IcontoastShow = true
        setTimeout(() => {
          this.IcontoastShow = false
        }, 3000)
      },
      showCustomToast () {
        this.toastShow = true
//        setTimeout(() => {
//          this.toastShow = false
//        }, 3000)
      }
    }
  }
</script>
<style lang="less" scoped>
  .toast-wrapper{
    width: 100%;
    position: absolute;
    top: 40%;
    left: 0;
    margin: 0 20px;
  }

  button{
    height: 40px;
    margin-bottom: 20px;
    width: 335px;
    background-color: #f6f8fa;
    font-size: 18px;
    box-shadow: 0 0 1PX #b8bbbf;
  }
  .toastColor{
    background-color: black;
  }
</style>
