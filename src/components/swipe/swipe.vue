<template>
  <div class="carousel-wrap" id="carousel">
    <transition-group tag="ul" class='slide-ul' name="list">
      <li v-for="(list,index) in slideList" :key="index" v-show="index===currentIndex">
        <a :href="list.clickUrl" >
          <img :src="list.image" :alt="list.desc">
        </a>
      </li>
    </transition-group>
    <div class="carousel-items">
      <span v-for="(item,index) in slideList.length" :class="{'active':index===currentIndex}" @click="mouseOverChange(index)"></span>
    </div>
  </div>
</template>
<script>
  export default{
    props: {
      slideList: {
        type: Array,
        default: () => {
          return []
        }
      }
    },
    data () {
      return {
        currentIndex: 0,
        timer: 0
      }
    },
    methods: {
      autoPlay () {
        this.currentIndex++
        if (this.currentIndex > this.slideList.length - 1) {
          this.currentIndex = 0
        }
      },
      mouseOverChange (index) {
        clearInterval(this.timer)
        this.currentIndex = index
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.timer = setInterval(() => {
          this.autoPlay()
        }, 4000)
      })
    }
  }
</script>
<style lang="less">
  .carousel-wrap {
    height: 235px;
    width: 100%;
    overflow: hidden;
    // 删除
    background-color: #fff;
  }
  
  .slide-ul {
    position: relative;
    width: 100%;
    height: 100%;
  }
  
  .slide-ul li {
    position: absolute;
    width: 100%;
    /*height: 100%;*/
  }
  
  img {
    width: 100%;
    /*height: 100%;*/
  }
  
  .carousel-items {
    position: absolute;
    z-index: 10;
    top: 380px;
    width: 100%;
    margin: 0 auto;
    text-align: center;
    font-size: 0;
  }
  
  .carousel-items span {
    display: inline-block;
    height: 6px;
    width: 30px;
    margin: 0 3px;
    background-color: #b2b2b2;
    cursor: pointer;
  }
  .carousel-items .active {
    background-color: orange;
  }
  
  .list-enter-active {
    transition: all 1s ease;
    transform: translateX(0)
  }
  
  .list-leave-active {
    transition: all 1s ease;
    transform: translateX(-100%)
  }
  
  .list-enter {
    transform: translateX(100%)
  }
  
  .list-leave {
    transform: translateX(0)
  }
</style>
