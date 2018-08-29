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
        <div class="flex-row" v-for="calendarDay in calendarDays">
          <div class="day-one day-flex" v-for="everyDay in calendarDay" v-if="calendarDay.length>0" >
            <div :class="{'inline-circle':everyDay.selected,'disable-font':everyDay.disabled}">{{everyDay.day}}</div>
            </div>
        </div>
      </div>
    </div>
</template>
<script>
    /* eslint-disable */
    export default {
      props: {
        defalutValue: {  // 默认渲染日期
          type: Array,
            default: function(){
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
        }
      },
      methods: {
        render (y,m,d) {
          // 默认情况渲染当月日历
          let allDays = []; // 总数据
          let column = 0;  // 第一行数据
          let now = new Date();
          this.year = now.getFullYear(); // 当年
          this.month = now.getMonth();   // 当月 实际是month+1
          this.dayWeek = now.getDate();       // 当天星期几
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
            if (i == d) {
              // 默认选中selected置为true
              allDays[column].push({"day":i,"disabled":false,'selected':true })
            } else {
              allDays[column].push({"day":i,"disabled":false,'selected':false })
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
        },
        nextMonth() {
          // 上一个月
          if (this.month == 0) {
            this.month = 12;
            this.year--;
          }
          this.month--;
          this.render(this.year,this.month);
        },
        lastMonth() {
          // 下一个月
          this.month++;
          if (this.month == 12) {
            this.month = 0;
            this.year++;
          }
          this.render(this.year,this.month);
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

