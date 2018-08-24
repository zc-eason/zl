<template>
    <div class="new-calendar-wrapper">
      <div class="calendar-flex">
        <div class="flex-row" v-for="calendarDay in calendarDays">
          <div class="day-one" v-for="day in calendarDay">{{day.day}}</div>
        </div>
      </div>
    </div>
</template>
<script>
    /* eslint-disable */
    import test from '../../src/components/test.vue'
    export default {
      data() {
        return {
          calendarDays: [
            [ {"day":1,"disabled":false,'lunar':"23" }, {"day":2,"disabled":false,'lunar':"23"}, {"day":3,"disabled":false,'lunar':"23"}, {"day":4,"disabled":false,'lunar':"23"} , {"day":5,"disabled":false,'lunar':"23"}, {"day":6,"disabled":false,'lunar':"23"}, {"day":0,"disabled":false,'lunar':"23"}],
            [ {"day":1,"disabled":false,'lunar':"23" }, {"day":2,"disabled":false,'lunar':"23"}, {"day":3,"disabled":false,'lunar':"23"}, {"day":4,"disabled":false,'lunar':"23"} , {"day":5,"disabled":false,'lunar':"23"}, {"day":6,"disabled":false,'lunar':"23"}, {"day":0,"disabled":false,'lunar':"23"}],
            [ {"day":1,"disabled":false,'lunar':"23" }, {"day":2,"disabled":false,'lunar':"23"}, {"day":3,"disabled":false,'lunar':"23"}, {"day":4,"disabled":false,'lunar':"23"} , {"day":5,"disabled":false,'lunar':"23"}, {"day":6,"disabled":false,'lunar':"23"}, {"day":0,"disabled":false,'lunar':"23"}],
            [ {"day":1,"disabled":false,'lunar':"23" }, {"day":2,"disabled":false,'lunar':"23"}, {"day":3,"disabled":false,'lunar':"23"}, {"day":4,"disabled":false,'lunar':"23"} , {"day":5,"disabled":false,'lunar':"23"}, {"day":6,"disabled":false,'lunar':"23"}, {"day":0,"disabled":false,'lunar':"23"} ],
            [ {"day":1,"disabled":false,'lunar':"23" }, {"day":2,"disabled":false,'lunar':"23"}, {"day":3,"disabled":false,'lunar':"23"}, {"day":4,"disabled":false,'lunar':"23"} , {"day":5,"disabled":false,'lunar':"23"}, {"day":6,"disabled":false,'lunar':"23"}, {"day":0,"disabled":false,'lunar':"23"} ],
            [ {"day":1,"disabled":false,'lunar':"23" }, {"day":2,"disabled":false,'lunar':"23"}, {"day":3,"disabled":false,'lunar':"23"}, {"day":4,"disabled":false,'lunar':"23"} , {"day":5,"disabled":false,'lunar':"23"}, {"day":6,"disabled":false,'lunar':"23"}, {"day":0,"disabled":false,'lunar':"23"} ]
         ]
        }
      }
    }
</script>
<style>
.new-calendar-wrapper{
  margin-top: 50px;
}
.calendar-flex {
  width: 350px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  background: #eee;
}
.flex-row{
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
}
.day-one {
  flex: 1;
}
</style>

