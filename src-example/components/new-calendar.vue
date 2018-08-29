<template>
    <div>
      <new-calendar :defalutValue="value"></new-calendar>
    </div>
</template>
<script>
    /* eslint-disable */
    import newCalendar from "../../src/components/new-calendar/new-calendar"
    export default {
      data() {
        return {
          value: [2018,9,11]
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

