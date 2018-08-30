<template>
    <div>
      <new-calendar :defalutValue="value" :mutified="mutified" :begin="begin" :end="end"></new-calendar>
    </div>
</template>
<script>
    /* eslint-disable */
    import newCalendar from "../../src/components/new-calendar/new-calendar"
    export default {
      data() {
        return {
          value: [],  // 默认选中日期
          mutified: false,       // 默认单选
          begin: [2018,5,16], //可选开始日期
          end: [2018,10,16], //可选结束日期
        }
      },
      components: {
        newCalendar
      },
      methods: {
      }
    }
</script>
<style>
</style>

