<template>
<div class='wk-input-wrapper'>
  <div class='wk-input-flex'>
    <div class='wk-input-lable'>
      <span v-for='word in title'>{{word}}</span>
    </div>
    <input class='state'
      :placeholder="wkPlaceholder"
      @blur='validateInput'
      v-model="inputValue"/>
    <!--<img @click='clearValue' class="wk-img-input" :src="require('@assets/images/order/order-cancel.png')">-->
  </div>
</div>
</template>
<script>
// import { Toast } from 'mint-ui'

export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    wkPlaceholder: {
      type: String,
      default: ''
    },
    nameValidate: {
      type: Boolean,
      default: false
    },
    idNumValidate: {
      type: Boolean,
      default: false
    },
    phoneValidate: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      inputValue: ''
    }
  },
  components: {
//    Toast
  },
  methods: {
    validateInput () {
      const cx = /^[\u4E00-\u9FA5]{2,5}(?:·[\u4E00-\u9FA5]{1,5})*$/
      const gex = /^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/
      if (this.nameValidate) {
        let name = this.inputValue
        name = name.replace(/^\s*/g, '').replace(/\s*$/g, '')
        if (!name) {
//          Toast({
//            message: '请填写出游人姓名',
//            position: 'middle',
//            className: 'submit-fail',
//            duration: 1000
//          });
          alert('填写出游人姓名')
        } else if (!cx.test(name)) {
//          Toast({
//            message: '姓名填写不正确',
//            position: 'middle',
//            className: 'submit-fail',
//            duration: 1000
//          });
        }
        return
      }
      if (this.idNumValidate) {
        let idCard = this.inputValue
        idCard = idCard.replace(/^\s*/g, '').replace(/\s*$/g, '')
        console.log('校验身份证号')
        if (!idCard) {
//          Toast({
//            message: '请填写出游人身份证号',
//            position: 'middle',
//            className: 'submit-fail',
//            duration: 1000
//          });
        } else if (!gex.test(idCard)) {
//          Toast({
//            message: '身份证号不正确',
//            position: 'middle',
//            className: 'submit-fail',
//            duration: 1000
//          });
        }
      }
    },
    clearValue () {
      this.inputValue = ''
    }
  }
}
</script>
<style lang='less'>
  .wk-input-flex {
    display: flex;
    width: 100%;
    height: 45px;
    line-height: 45px;
    font-size: 15px;
    color: #1C1C1C;
  }
  .wk-input-lable{
    width: 60px;
    display: flex;
    justify-content: space-between;
  }
  .state{
    margin-left: 15px;
    flex: 1
  }
  .wk-img-input{
    width: 15px;
    height: 15px;
    margin-top: 16px;
  }
</style>

