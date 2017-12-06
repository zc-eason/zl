<template>
  <div>
    <ul>
      <li v-for='(index, item) in items'>{{item}}</li>
    </ul>
    <div class="page-bottom">
      <div v-if="isloading">正在加载中...</div>
      <div v-if="loadingEnd">加载完成</div>
      <div v-if="loadingFail" @click="onBottom">加载失败,点击重新加载</div>
    </div>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        items: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        isloading: false,
        loadingEnd: false,
        totalCount: 0,
        loadingFail: false,
        durationTime: 2000,
        failOnce: 0
      }
    },
    methods: {
      getScrollTop () {
        return document.documentElement.scrollTop || document.body.scrollTop
      },
      getScrollHeight () {
        return document.documentElement.scrollHeight || document.body.scrollHeight
      },
      getWindowHeight () {
        return document.documentElement.clientHeight || document.body.clientHeight
      },
      onBottom () {
        if (this.getScrollTop() + this.getWindowHeight() === this.getScrollHeight()) {
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
//            this.items.forEach((item) => {
//              let newItem = item + 10
//              this.items.push(newItem)
//            })
            }, 3000)
            if (this.durationTime < 3000 && this.totalCount === 1 && !this.failOnce) {
              this.isloading = false
              this.loadingFail = true
              this.totalCount--
              this.failOnce++
              clearInterval(fetchTimeOut)
            }
            count++
            console.log(`count${count}`)
          }
        }
      }
    },
    mounted () {
      console.log(this)
      this.$nextTick(() => {
        window.addEventListener('scroll', this.onBottom)
      })
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
