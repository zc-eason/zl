<template>
  <div class="mt-range" :class="{ 'mt-range--disabled': disabled }">
    <slot name="start" class="slot-start"></slot>
    <div class="mt-range-content" ref="content">
      <!-- 进度条轨道 -->
      <div class="mt-range-runway" :style="{ 'border-top-width': barHeight + 'px' }"></div>
      <!-- 进度条进度红色标识 -->
      <div class="mt-range-progress" :style="{ width: progress + '%', height: barHeight + 'px' }"></div>
      <!-- 可拖动的thumb -->
      <div class="mt-range-thumb" ref="thumb" :style="{ left: progress + '%' }"></div>
    </div>
    <slot name="end" class="slot-end"></slot>
  </div>
</template>

<script type="text/babel">
  /* eslint-disable */
  import draggable from './draggable';

  export default {
    name: 'zl-range',
    props: {
      min: {
        type: Number,
        default: 0
      },
      max: {
        type: Number,
        default: 100
      },
      step: {
        type: Number,
        default: 1
      },
      disabled: {
        type: Boolean,
        default: false
      },
      value: {
        type: Number
      },
      barHeight: {
        type: Number,
        default: 1
      }
    },

    computed: {
      progress() {
        // value的变化 才会触发progress重新计算
        let value = this.value;
        // 改变value的值 才会变progress value = 20  动态value的值改变progress的值,计算进度条所占百分比
        let numberProgress = Math.floor((value - this.min) / (this.max - this.min) * 100);
        if (typeof value === 'undefined' || value === null) return 0;
        return numberProgress
      }
    },

    mounted() {
      const thumb = this.$refs.thumb;
      const content = this.$refs.content;
      const getThumbPosition = () => {
        const contentBox = content.getBoundingClientRect();
        const thumbBox = thumb.getBoundingClientRect();
        return {
          left: thumbBox.left - contentBox.left, // 小手柄距离box的左边距离
          top: thumbBox.top - contentBox.top,    // 小手柄距离box的顶部距离
          thumbBoxLeft: thumbBox.left // 小手柄距离页面左边的距离
        };
      };

      let dragState = {};
      // 注入这个函数
      draggable(thumb, {
        start: (event) => {
          if (this.disabled) return;
          const position = getThumbPosition();
          const thumbClickDetalX = event.clientX - position.thumbBoxLeft; // 计算鼠标开始的距离
          dragState = {
            thumbStartLeft: position.left, // 0
            thumbStartTop: position.top,    // 0
            thumbClickDetalX: thumbClickDetalX // 移动距离
          };
        },
        drag: (event) => {
          if (this.disabled) return;
          const contentBox = content.getBoundingClientRect(); //contentBox值是一致的
          // pageX获取带滚动条的到页面边缘尺寸, 是及时变化的 deltaX代表距离
          const deltaX = event.pageX - contentBox.left - dragState.thumbStartLeft - dragState.thumbClickDetalX;
          console.log(`deltaX${deltaX}`)
          const stepCount = Math.ceil((this.max - this.min) / this.step); //相当于 平分一下每一次变动几个数字, 共分成几份
          console.log(`stepCount${stepCount}`)
          // 新的position
          const newPosition = (dragState.thumbStartLeft + deltaX) - (dragState.thumbStartLeft + deltaX) % (contentBox.width / stepCount);
          let newProgress = newPosition / contentBox.width;
          // 计算新距离的百分比
           console.log(newProgress)
          if (newProgress < 0) {
            newProgress = 0;
          } else if (newProgress > 1) {
            newProgress = 1;
          }
          let inputValue = Math.round(this.min + newProgress * (this.max - this.min))
          // 打印了n多次这个值,value, 必须用这个, 所以才会改变父元素中的状态 改变value的值 紧接着组件中的value值也有变化
          this.$emit('input', inputValue);
        },
        end: () => {
          if (this.disabled) return;
          // 这个值为什么没有传过去 这个代表的是最后的值
          // this.$emit('change', this.value); 可用可不用
          dragState = {};
        }
      });
    }
  };
</script>
<style lang="less" scoped>
    .mt-range {
      position: relative;
      display: flex;
      height: 30px;
      line-height: 30px;
    }
    .slot-start {
      margin-right: 5px;
    }
    .slot-end {
      margin-left: 5px;
    }
    .mt-range-content {
      position: relative;
      flex: 1;
      margin-right: 30px;
    }
    .mt-range-runway {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
      right: -30px;
      border-top-color: #a9acb1;
      border-top-style: solid;
    }
    .mt-range-thumb {
      background-color: #fff;
      position: absolute;
      left: 0;
      top: 0;
      width: 30px;
      height: 30px;
      border-radius: 100%;
      cursor: move;
      box-shadow: 0 1px 3px rgba(0,0,0,.4);
    }
    .mt-range-progress {
      position: absolute;
      display: block;
      background-color: #26a2ff;
      top: 50%;
      transform: translateY(-50%);
      width: 0;
    }
    .disabled {
      opacity: 0.5;
    }
</style>
