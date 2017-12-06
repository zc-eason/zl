<template>
  <div>
    <pullUp
      :items="items"
      :durationTime="durationTime"
      :isloading="isloading"
      :loadingEnd="loadingEnd"
      :loadingFail="loadingFail"
      v-on:fetchDateOnBottom="fetchDateOnBottom">
    </pullUp>
  </div>
</template>
<script>
  
  import pullUp from '../../src/components/pullup/pullup'
  export default{
    data () {
      return {
        items: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        durationTime: 3000,
        isloading: false,
        loadingEnd: false,
        loadingFail: false,
        totalCount: 0,
        failOnce: 0
      }
    },
    components: {
      pullUp
    },
    methods: {
      fetchDateOnBottom (param) {
        if (param === 1) this.loadingFail = false
        if (this.loadingFail) return
        let count = 0
        if (this.loadingEnd) {
          return
        }
//          alert('已经到最底部了！!')
        if (!count) {
          this.loadingFail = false
          this.isloading = true
          const fetchTimeOut = setTimeout(() => {
            this.isloading = false
            for (let i = 0; i < 10; i++) {
              let newItem = i + 10
              this.items.push(newItem)
            }
            this.totalCount++
            count = 0
            if (this.totalCount >= 5) {
              // 加载6次加载完成
              this.loadingEnd = true
            }
          }, this.durationTime)
          if (this.durationTime >= 2000 && this.totalCount === 1 && !this.failOnce) {
            setTimeout(() => {
              // 请求数据
              this.isloading = false
              this.loadingFail = true
            }, this.durationTime)
            this.totalCount--
            this.failOnce++
            clearInterval(fetchTimeOut)
          }
          count++
          console.log(`count${count}`)
        }
      }
    },
    mounted () {
      window.scrollTo(0, 0)
    }
  }
</script>
<style lang="less">
  ul>li{
    width: 100%;
    height: 100px;
    line-height:100px;
    text-align: center;
  }
  .page-bottom{
    height: 50px;
    line-height: 50px;
    text-align: center;
  }
</style>

