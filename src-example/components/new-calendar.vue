<template>
    <div>
      <new-calendar :defalutValue="value" :mutified="mutified"></new-calendar>
    </div>
</template>
<script>
    /* eslint-disable */
    import newCalendar from "../../src/components/new-calendar/new-calendar"
    export default {
      data() {
        return {
          value: [2018,9,11],  // 默认选中日期
          mutified: false       // 默认单选
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

