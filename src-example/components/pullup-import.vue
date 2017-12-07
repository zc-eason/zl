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
        durationTime: 2000,
        isloading: false,
        loadingEnd: false,
        loadingFail: false,
        totalCount: 0
      }
    },
    components: {
      pullUp
    },
    methods: {
      fetchDateOnBottom () {
          this.isloading = true
          this.loadingFail = false
        // 处理请求数据逻辑 项目里处理逻辑 等待ajax请求, 请求中, 请求回的数据抛错
        setTimeout(() => {
          if (this.totalCount === 1) {
            // 请求数据失败 处理 先显示加载中,再显示加载失败
            this.isloading = false
            this.loadingFail = true
            this.totalCount++
            return
          }
          // 请求成功 返回的值push 到原数组中,isloading不显示
          for (let i = 0; i < 10; i++) {
            let newItem = i + 10
            this.items.push(newItem)
          }
          this.isloading = false
          this.totalCount++
          // 第三次加载的时候loadingEnd就显示了, 所以再上拉就不加载数据了
          if (this.totalCount >= 4) {
            // 加载4次加载完成
            // 如果真正的项目里 判断这次加载的数据是否为空, 如果为空, 则将loadingEnd,置为true
            this.loadingEnd = true
          }
        }, this.durationTime)
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

