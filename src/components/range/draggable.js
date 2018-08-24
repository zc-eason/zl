
 /* eslint-disable */
let isDragging = false;
import Vue from 'vue';
// 为了兼容低版本 IE 浏览器做的事件绑定代码封装 要支持服务端渲染
const supportTouch = !Vue.prototype.$isServer && 'ontouchstart' in window;
/**
 *
 *
 * @export
 * @param {any} element
 * @param {any} options
 */
export default function(element, options) {
  // option start drag end把前面三个函数传进来了
  const moveFn = function(event) {
    if (options.drag) {
      options.drag(supportTouch ? event.changedTouches[0] || event.touches[0] : event);
    }
  };

/**
 *
 *
 * @param {any} event
 */

const endFn = function(event) {
    if (!supportTouch) {
      document.removeEventListener('mousemove', moveFn);
      document.removeEventListener('mouseup', endFn);
    }
    document.onselectstart = null;
    document.ondragstart = null;

    isDragging = false;

    if (options.end) {
      options.end(supportTouch ? event.changedTouches[0] || event.touches[0] : event);
    }
  };

  element.addEventListener(supportTouch ? 'touchstart' : 'mousedown', function(event) {
    // touchstart或者mousedown的时候触发start函数
    if (isDragging) return;
    event.preventDefault();
    document.onselectstart = function() { return false; };
    document.ondragstart = function() { return false; };

    if (!supportTouch) {
      document.addEventListener('mousemove', moveFn);
      document.addEventListener('mouseup', endFn);
    }
    isDragging = true;

    if (options.start) {
      options.start(supportTouch ? event.changedTouches[0] || event.touches[0] : event);
    }
  });

  if (supportTouch) {
    element.addEventListener('touchmove', moveFn);
    element.addEventListener('touchend', endFn);
    element.addEventListener('touchcancel', endFn);
  }
};
