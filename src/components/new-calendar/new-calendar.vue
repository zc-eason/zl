<template>
    <div class="new-calendar-wrapper">
      <div class="calendar-month-wrapper">
        <div class="calendar-month">
          <div class="arrow-wrapper" @click="nextMonth"><span class="arrow left"></span></div>
          {{year}}年{{month+1}}月
          <div class="arrow-wrapper" @click="lastMonth"><span class="arrow right"></span></div></div>
      </div>
      <div class="calendar-flex">
        <div class="flex-row">
          <div class="day-one" v-for="week in weeks">{{week}}</div>
        </div>
        <div class="flex-row" v-for="calendarDay,index in calendarDays">
          <div class="day-one day-flex" v-for="everyDay,i in calendarDay" v-if="calendarDay.length>0" >
            <div :class="{'inline-circle':everyDay.selected,'disable-font':everyDay.disabled}" @click="selectedDay(everyDay.day,i,index)">{{everyDay.day}}</div>
            </div>
        </div>
      </div>
    </div>
</template>
<script>
    /* eslint-disable */
    export default {
      props: {
        defalutValue: {     // 默认渲染日期
          type: Array,
          default: function(){
              return []
          }
        },
        mutified: {
          type: Boolean,    //默认单选
          default: false
        },
        begin: {
          type: Array,      //可选开始日期
          default: function() {
              return []
          }
        },
        end: {
          type: Array,      //可选结束日期
          default: function() {
              return []
          }
        }
      },
      data() {
        return {
          calendarDays: [],  // 渲染的当月日历数组
          year: 0,    // 当年
          month: 0,   // 当月
          day: 0,     // 当天
          dayWeek: 0,   // 星期几
          weeks: ['日', '一', '二', '三', '四', '五', '六'],  // 星期
          selectedValue: [],  // 保留所选值day,line,i 日期/第几行/第几个
          clearDefalutValue: false
        }
      },
      methods: {
        render (y,m,d) {
          // 默认情况渲染当月日历
          let allDays = []; // 总数据
          let column = 0;  // 第一行数据
          let now = new Date();
          let thisYear;
          let thisMonth;
          let thisDay;
          thisYear = this.year = now.getFullYear(); // 当年
          thisMonth = this.month = now.getMonth();   // 当月 实际是month+1
          thisDay = this.day = now.getDate();       // 当天几号
          if (y || m) {
            // 如果指定了年和月,则改变年月
            this.year = y;
            this.month = m;
          }
          let firstDayOfNowMonth = new Date(this.year, this.month, 1).getDay();  // 当月第一天 星期几
          let alllastDateOfNowMonth = new Date(this.year, this.month, 0).getDate() // 上月总天数(上月最后一天日期)
          let allDateOfNowMonth = new Date(this.year, this.month + 1, 0).getDate() // 当月总天数
          for(var i=1;i<=allDateOfNowMonth;i++) {
            // 循环每一天
            var nowDay = new Date(this.year, this.month, i).getDay();    // 当前星期几
            if (nowDay == 0) {
              // 每个周末创建一个数组
              column++
              allDays[column] = []
            } else if(i == 1) {
              //nowDay是当前index
              // 第一天时, 创建第一行数组,当前周几,并补全前面的几天 29 index->0 30 index->1 31 index->2  1号 index->3  2号index->4
              allDays[column] = []
              for(var j=0;j<nowDay;j++) {
                  allDays[column].push({"day":alllastDateOfNowMonth--,"disabled":true,'selected':false })
              }
              allDays[column].reverse()
            }
            if(this.defalutValue.length>0) {
              if ((i == d) && (this.defalutValue[0]==this.year) && (this.defalutValue[1]==this.month)) {
                // this.clearDefalutValue = false;
                // 默认选中selected置为true
                allDays[column].push({"day":i,"disabled":false,'selected':true })
                this.selectedValue = [i,nowDay,column]  // i 选中天数 nowDay星期几 column 第几行
              } else {
                // 普通日期
                let options = {"day":i,"disabled":false,'selected':false }
                if (this.begin.length>0) {
                    let beginTime = Number(new Date(parseInt(this.begin[0]),parseInt(this.begin[1]) - 1,parseInt(this.begin[2])))
                    if (beginTime > Number(new Date(this.year, this.month, i))) options.disabled = true
                }
                if (this.end.length>0){
                    let endTime = Number(new Date(parseInt(this.end[0]),parseInt(this.end[1]) - 1,parseInt(this.end[2])))
                    if (endTime <  Number(new Date(this.year, this.month, i))) options.disabled = true
                }
                allDays[column].push(options)
              }
            } else {
              if (i == this.day && (thisYear ==this.year) && (thisMonth==this.month)) {
                // this.clearDefalutValue = false;
                // 默认选中selected置为true
                allDays[column].push({"day":i,"disabled":false,'selected':true })
                this.selectedValue = [i,nowDay,column]  // i 选中天数 nowDay星期几 column 第几行
              } else {
                // 普通日期
                let options = {"day":i,"disabled":false,'selected':false }
                if (this.begin.length>0) {
                    let beginTime = Number(new Date(parseInt(this.begin[0]),parseInt(this.begin[1]) - 1,parseInt(this.begin[2])))
                    if (beginTime > Number(new Date(this.year, this.month, i))) options.disabled = true
                }
                if (this.end.length>0){
                    let endTime = Number(new Date(parseInt(this.end[0]),parseInt(this.end[1]) - 1,parseInt(this.end[2])))
                    if (endTime <  Number(new Date(this.year, this.month, i))) options.disabled = true
                }
                allDays[column].push(options)
              }
            }

            if (i == allDateOfNowMonth) {
              // 处理余下的几天
              let key = nowDay;
              for(var j=1;key<6;j++) {
                  key++
                  allDays[column].push({"day":j,"disabled":true,'selected':false })
              }
            }
          }
          this.calendarDays = allDays;
          console.log(allDays)
        },
        nextMonth() {
          // 上一个月
          // 将选中的日期置为空并清除默认选中值
          this.selectedValue = []
          if (this.month == 0) {
            this.month = 12;
            this.year--;
          }
          this.month--;
          this.render(this.year,this.month,this.day);
          // this.clearDefalutValue = true;
        },
        lastMonth() {
          // 下一个月
          // 将选中的日期置为空并清除默认选中值
          this.selectedValue = [];
          this.month++;
          if (this.month == 12) {
            this.month = 0;
            this.year++;
          }
          this.render(this.year,this.month,this.day);
          // this.clearDefalutValue = true;
        },
        selectedDay(selecteday,dayWeek,line) {
          // 修改选中样式selecteday(选中几号) dayWeek(选中星期几) line(选中第几行)
          if (this.mutified) {
            // 多选
            this.$set(this.calendarDays[line], dayWeek, {"day":selecteday,"disabled":false,'selected':true })
          } else {
            // 单选
            // 0 选中天数 1 星期几 2 第几行
            let lastSelectedDay = this.selectedValue[0];
            let lastSelectedDayWeek = this.selectedValue[1];
            let lastSelectedIine = this.selectedValue[2];
            // 将之前选中的置为不可选
            if (lastSelectedDay&&lastSelectedDayWeek&&lastSelectedIine) {
              this.$set(this.calendarDays[lastSelectedIine], lastSelectedDayWeek, {"day":lastSelectedDay,"disabled":false,'selected':false })
            }
            // 将点击选中的置为可选,并保留现在所选日期
            this.$set(this.calendarDays[line], dayWeek, {"day":selecteday,"disabled":false,'selected':true })
            this.selectedValue = [selecteday,dayWeek,line]
            console.log(this.selectedValue)
          }
        }
      },
      created() {
        if (this.defalutValue.length>0) {
          // 若需求有默认显示日期,显示当前年月日
          this.year = this.defalutValue[0]
          this.month = this.defalutValue[1];
          this.day = this.defalutValue[2];
        }
        this.render(this.year,this.month,this.day);
      }
    }
</script>
<style lang="less">
.new-calendar-wrapper {
  margin-top: 50px;
}
.calendar-month-wrapper {
  text-align: center;
  line-height: 40px;
  .arrow-wrapper{
    display: inline-block;
    width: 40px;
    height: 100%;
  }
  .calendar-month .arrow{
    display: inline-block;
    width: 10px;
    height: 10px;
  }
  .calendar-month .left {
    border-left: 1PX solid;
    border-bottom: 1PX solid;
    transform: rotate(45deg);
  }
  .calendar-month .right {
    border-right: 1PX solid;
    border-bottom: 1PX solid;
    transform: rotate(-45deg);
  }
}
.calendar-flex {
  width: 350px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  background: #eee;
}
.flex-row{
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
}
.day-one {
  /* 使高度被内容撑开 */
  width: 50px;
  height: 50px;
  line-height: 50px;
  .inline-circle {
    width: 30px;
    height: 30px;
    line-height: 30px;
    background: red;
    border-radius: 50%;
  }
}
.day-flex {
  // 元素内部垂直居中
  display: flex;
  align-items: center;
  justify-content: center;
}
.disable-font {
    color: #ccc;
    pointer-events: none!important;
    cursor: default!important;
}
</style>

