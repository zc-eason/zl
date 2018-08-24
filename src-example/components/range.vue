<template>
  <div>
    <zl-range v-model="inputValue"
      :min="0"
      :max="100"
      :step="1"
      :bar-height="10">
      <div slot="start">0</div>
      <div slot="end">100</div>
    </zl-range>
    <span>{{inputValue}}</span>
  </div>
</template>
<script>
  import zlRange from '../../src/components/range/range'

  export default{
    data () {
      return {
        inputValue: 20 // 默认值
      }
    },
    components: {
      zlRange
    },
    watch: {
      inputValue (val) {
        // v-model的值代表是组件中的value, 通过组件中的$emit("input")事件-drag,动态传到inputValue. 及时更新的
        // .sync通过this.$emit('change')来传值,最后还是把值传给inputValue, 一下子更新的
        console.log(`val${val}`)
      }
    }
  }
</script>
<style lang="less" scoped>

</style>
