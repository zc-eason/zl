<template>
  <div>
    <div v-for="(index, item) in items" class="item-ui">{{item}}</div>
    <pullUp
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
      fetchDateOnBottom () {
          this.isloading = true
        // 处理请求数据逻辑
        const fetchTimeOut = setTimeout(() => {
            for (let i = 0; i < 10; i++) {
              let newItem = i + 10
              this.items.push(newItem)
            }
            this.loadingFail = false
            this.isloading = false
            this.totalCount++
            if (this.totalCount >= 4) {
              // 加载6次加载完成
              this.loadingEnd = true
            }
          }, this.durationTime)
          if (this.durationTime >= 2000 && this.totalCount === 1 && !this.failOnce) {
            setTimeout(() => {
              // 请求数据失败 处理 先显示加载中,再显示加载失败
              this.isloading = false
              this.loadingFail = true
            }, this.durationTime)
            // 加载失败总数减一
            this.totalCount--
            // 下一次点击的时候failOnce要置为0
            this.failOnce++
            clearInterval(fetchTimeOut)
          }
      }
    },
    mounted () {
      window.scrollTo(0, 0)
    }
  }
</script>
<style lang="less">
  .item-ui{
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

