<template>
  <div>
    <p @click="fun3" style="color: blue">监听数组变化方式一</p>
    <p @click="fun4" style="color: blue">监听数组变化方式二</p>
  </div>
</template>

<script>

export default {
  data () {
    return {
      p: {a: 1},
      arr: [{ 'name': 'jaj' }, { 'age': 12 }, { 'school': 'high' }],
      temperature: [ 14, false, 15 ]
    }
  },
  methods: {
    fun3 () {
      console.log('click 3333')
      this.arr.push({ 'school2': 'high2' })
    },
    fun4 () {
      console.log('click 4444')
      this.temperature[0] += 6
    }
  },
  watch: {
    arr: {
      handler (newValue, oldValue) {
        console.log('数组被改变了')
        console.log(newValue, oldValue)
      },
      deep: true
    }
  }
}
</script>

<style>

</style>
