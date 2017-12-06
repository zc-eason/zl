<template>
  <div>
    <ul>
      <li v-for='(index, item) in items'>{{item}}</li>
    </ul>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
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
          alert('已经到最底部了！!')
          this.items.forEach((item) => {
            let newItem = item + 10
            this.items.push(newItem)
          })
          // 当然也可以for循环, 每次10次, 原来基础上+1
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
</style>
