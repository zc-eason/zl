<template>
  <div style="min-height: 667px;" class="wheel-wrapper">
    <div class="wrapper typo" id="wrapper">
    <section class="wheel-container" id="gbWheel">
        <div class="wheel-content wheel-run">
            <ul class="wheel-line">
                <li v-for="item, index in awards" class="wheel-litem"
                :style="{transform: 'rotate('+(index*turnNum+turnNum/2)+'turn)'}">
                </li>
            </ul>
            <div class="wheel-list">
                <div class="wheel-item" v-for="item, index in awards">
                    <div class="wheel-icontent"
                    :style="{transform: 'rotate('+index*turnNum+'turn)'}">
                      {{item.text}}
                      <p class="wheel-iicon"><i :class="item.name"></i></p>
                      <p class="wheel-itext"></p>
                    </div>
                </div>
            </div>
        </div>
        <a href="javascript:;" class="wheel-btn" id="gbLottery" @click="gbLottery">抽奖</a>
    </section>
	</div>
  <iconToast :toastShow="toastShow" :toastMessage="toastMessage" :style="toastBackground" :class="{toastColor:toastColor}"></iconToast>
  <div class="wheel-share">分享出去</div>
  </div>
</template>
<script>
  import iconToast from '../../src/components/toast/iconToast'
  // var kafei = require('../assets/swipe/kafei.jpg')
  export default{
    data () {
      return {
        awards: [
                  {'text': '耳机', 'name': 'icono-headphone', img: require('../assets/swipe/erji.jpg')},
                  {'text': 'iPhone', 'name': 'icono-iphone', img: require('../assets/swipe/iPhone.jpg')},
                  { 'text': '相机', 'name': 'icono-camera', img: require('../assets/swipe/xiangji.jpeg') },
                  { 'text': '咖啡杯', 'name': 'icono-cup', img: require('../assets/swipe/kafei.jpg') },
                  { 'text': '小狗', 'name': 'icono-cup', img: require('../assets/swipe/dog.jpg') },
                  { 'text': '小猫', 'name': 'icono-cup', img: require('../assets/swipe/miao.jpg') },
                  { 'text': '小猫', 'name': 'icono-cup', img: require('../assets/swipe/miao.jpg') },
                  { 'text': '小猪', 'name': 'icono-cup', img: require('../assets/swipe/pig.jpg') }
                ],
        turnNum: 0,
        toastShow: false,
        toastMessage: '恭喜你中奖了',
        toastBackground: {
          'background-size': '100% 100%',
          'z-index': 29999
        },
        toastColor: false,
        angel: 3600
      }
    },
    components: {
      iconToast
    },
    methods: {
      showToast (i) {
        this.toastShow = true
        this.toastColor = true
        this.toastMessage = `恭喜你中了一个${this.awards[i].text}`
        var imgUrl = this.awards[i].img
        this.toastBackground.backgroundImage = 'url(' + imgUrl + ')'
        setTimeout(() => {
          this.toastShow = false
        }, 5000)
      },
      gbLottery () {
        const random = Math.random()
        const i = parseInt(random * this.awards.length)
        document.getElementById('gbWheel').querySelector('.wheel-content').style.transform = 'rotate(' + (this.angel + 360 - this.turnNum * 360 * i) + 'deg)'
        this.angel += 3600
        document.getElementById('gbWheel').querySelector('.wheel-content').style.transition = '5s'
        // document.getElementById('gbLottery').style.transform = 'rotate(' + (720 + 360 - this.turnNum * 360 * i + 10) + 'deg)'
        // document.getElementById('gbLottery').style.transition = '2s'
        setTimeout(() => {
          this.showToast(i)
        }, 5000)
      }
    },
    mounted () {
      this.turnNum = 1 / this.awards.length
    }
  }
</script>
<style lang="less" scoped>
.wrapper{
  padding:100px 0px;
}

.wheel-container ul,.wheel-container li,.wheel-container p {
	margin: 0;
	padding: 0
}

.wheel-container ul,.wheel-container li {
	list-style: none
}

.wheel-container {
	margin: 0 auto;
	position: relative;
	width: 300px;
	height: 300px;
	border-radius: 50%;
	box-shadow: 0 2px 3px #333, 0 0 2px #000;
	overflow: hidden
}

.wheel-content {
	position: absolute;
	left: 10px;
	top: 10px;
	z-index: 2;
	width: 280px;
	height: 280px;
	box-sizing: border-box;
	border-radius: inherit;
	background-clip: padding-box;
	background-color: black;
	background-size: 12px 14px
}

.wheel-content:before {
	content: ' ';
	position: absolute;
	left: -10px;
	top: -10px;
	z-index: -1;
	width: 280px;
	height: 280px;
	border-radius: inherit;
	border: 10px solid #E44025;
	box-shadow: 0 0 2px 2px rgba(0,0,0,0.2) inset
}

.wheel-list {
	position: absolute;
	left: 0;
	top: 0;
	width: inherit;
	height: inherit;
	z-index: 888
}

.wheel-item {
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	color: #e4370e;
	font-weight: bold;
	text-shadow: 0 1px 1px rgba(255,255,255,0.6)
}

.wheel-icontent {
	position: relative;
	display: block;
	padding-top: 15px;
	margin: 0 auto;
	text-align: center;
	-webkit-transform-origin: 50% 140px;
	-ms-transform-origin: 50% 140px;
	transform-origin: 50% 140px
}

.wheel-itext {
	font-size: 14px;
	font-weight: lighter
}

.wheel-iicon [class*=icono-] {
	color: #e4370e
}

.wheel-line {
	position: absolute;
	left: 0;
	top: 0;
	width: inherit;
	height: inherit;
	z-index: 99
}

.wheel-litem {
	position: absolute;
	left: 140px;
	top: 0;
	width: 1px;
	height: 140px;
	background-color: rgba(228,55,14,0.6);
	overflow: hidden;
	-webkit-transform-origin: 50% 140px;
	-ms-transform-origin: 50% 140px;
	transform-origin: 50% 140px
}

.wheel-btn {
	position: absolute;
	left: 110px;
	top: 110px;
	z-index: 400;
	width: 80px;
	height: 80px;
	border-radius: 50%;
	color: #F4E9CC;
	background-color: #E44025;
	line-height: 80px;
	text-align: center;
	font-size: 20px;
	text-shadow: 0 -1px 1px rgba(0,0,0,0.6);
	box-shadow: 0 3px 5px rgba(0,0,0,0.6),0 0 5px 4px rgba(0,0,0,0.2) inset;
	text-decoration: none
}

a.wheel-btn {
	border-bottom: none
}

.wheel-btn::after {
	position: absolute;
	content: '';
	left: 25px;
	top: -10px;
	width: 30px;
	height: 30px;
	background-color: #E44025;
	-webkit-transform: rotate(45deg);
	-ms-transform: rotate(45deg);
	transform: rotate(45deg);
	box-shadow: 0 3px 5px rgba(0,0,0,0.6),0 0 5px 4px rgba(0,0,0,0.2) inset
}

.wheel-btn.disabled,.wheel-btn.disabled::after {
	pointer-events: none;
	background: #B07A7B;
	color: #ccc
}

.wheel-run {
	-webkit-transition: -webkit-transform 6s ease;
	transition: transform 6s ease
}
.wheel-wrapper{
  min-height: 667px;
  background-image: url('../assets/swipe/timg5.jpeg')
}
.toastColor{
  background-color: #E44025;
}
.wheel-share{
  background-color: #e4370e;
  color: white;
  width: 200px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  position: relative;
  bottom: -80px;
  margin: 0 auto;
  border-radius: 8px;
}
</style>
