<template>
<transition name="fade">
   <div v-if="toastShow" class="toast-bis-style" :style="bg"><div>{{toastMessage}}</div></div>
</transition>
</template>
<script>
  export default{
    props: {
      toastShow: {
        type: Boolean,
        default: false
      },
      toastMessage: {
        type: String,
        default: '弹出Toast'
      },
      bg: Object
    }
  }
</script>
<style lang="less">
  body{
    background-size: 100px 100px;
  }
  .toast-bis-style{
     width: 200px;
    position:absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: .8;
    padding: 10px 20px;
    color: black;
    font-size: 14px;
    text-align: center;
    transform-origin: -50% -50%;
    
  }

  .fade-enter-active {
    // transition: opacity 1s;
    transform-origin: 0 0;
    animation: fadeIn .5s
  }
  .fade-leave-active {
    // transition: opacity 1s;
    transform-origin: 0 0;
    animation: fadeOut .5s
  }

  // .fade-enter, .fade-leave-to  {
  //   opacity: 0
  // }
@keyframes fadeOut {
    from {
        opacity: 1;
    }
    50% {
        opacity: 0;
        transform-origin: 0% 0%;
        -webkit-transform: scale3d(.3, .3, .3);
        transform: scale3d(.3, .3, .3);
    }
    to {
        opacity: 0;
    }
}
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform-origin: 0% 0%;
    transform: scale3D(.3, .3, .3);
    }
    50% {
      opacity: 1;
    }
}

</style>
