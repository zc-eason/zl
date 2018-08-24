<template>
    <div class="new-calendar-wrapper">
      <div class="calendar-flex">
        <div class="flex-row">
          <div class="day-one" v-for="week in weeks">{{week}}</div>
        </div>
        <div class="flex-row" v-for="calendarDay in calendarDays">
          <div class="day-one" v-for="everyDay in calendarDay" v-if="calendarDay">{{everyDay.day}}</div>
        </div>
      </div>
    </div>
</template>
<script>
    /* eslint-disable */
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
         ],
         weeks: ['日', '一', '二', '三', '四', '五', '六']
        }
      },
      methods: {
        render () {
          let allDays = []; // 总数据
          let column = 0;  // 第一行数据
          let now = new Date();
          let year = now.getFullYear(); // 当前年
          let month = now.getMonth();   // 当前月 实际是month+1
          let day = now.getDate();       // 当前日期
          year = 2018
          month = 11
          day = 27
          let firstDayOfNowMonth = new Date(year, month, 1).getDay();  // 当月第一天 星期几
          let alllastDateOfNowMonth = new Date(year, month, 0).getDate() // 上月总天数(上月最后一天日期)
          let allDateOfNowMonth = new Date(year, month + 1, 0).getDate() // 当月总天数
          for(var i=1;i<=allDateOfNowMonth;i++) {
            // 循环每一天
            var nowDay = new Date(year, month, i).getDay();    // 当前星期几
            if (nowDay == 0) {
              // 每个周末创建一个数组
              column++
              allDays[column] = []
            } else if(i == 1) {
              //nowDay是当前index
              // 第一天时, 创建第一行数组,当前周几,并补全前面的几天 29 index->0 30 index->1 31 index->2  1号 index->3  2号index->4
              allDays[column] = []
              for(var j=0;j<nowDay;j++) {
                  allDays[column].push({"day":alllastDateOfNowMonth--,"disabled":true,'lunar':"23" })
              }
              allDays[column].reverse()
            }
            allDays[column].push({"day":i,"disabled":false,'lunar':"23" })
            if (i == allDateOfNowMonth) {
              // 处理余下的几天
              let key = nowDay;
              for(var j=1;key<6;j++) {
                  key++
                  allDays[column].push({"day":j,"disabled":true,'lunar':"23" })
              }
            }
          }
          this.calendarDays = allDays;
          console.log(this.calendarDays)
        }
      },
      created() {
        this.render();
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
  width: 50px;
  /* flex: 1; */
}
</style>

