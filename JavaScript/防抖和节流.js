/*
 * @Description: 防抖和节流
 * @Version: 1.0
 * @Autor: WangQiaoLing
 * @Date: 2020-08-18 13:26:49
 * @LastEditors: WangQiaoLing
 * @LastEditTime: 2020-08-18 13:52:04
 */
/**
 * @description: 防抖函数：在事件被触发 delay 秒后再执⾏回调，如果在这 delay 秒内⼜被触发，则重新计时。
 * 适用场景：
 * 1.按钮提交场景：防⽌多次提交按钮，只执⾏最后提交的⼀次
 * 2.服务端验证场景：表单验证需要服务端配合，只执⾏⼀段连续的输⼊事件的最后⼀次，还有搜索联想词功能类似
 * @param {number} 间隔时间
 * @param {function} 回调函数
 * @return {function}
 * @author: WangQiaoLing
 */
function debounce(delay, fn) {
  let timer = null
  return (...args) => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.call(args)
      timer = null
    }, delay)
  }
}
/**
 * @description: 节流函数：规定 delay 时间内，只能触发⼀次函数。如果这个单位时间内触发多次函数，只有⼀次⽣效
 * 适⽤场景：
 * 1.拖拽场景：固定时间内只执⾏⼀次，防⽌超⾼频次触发位置变动
 * 2.缩放场景：监控浏览器resize
 * 3.动画场景：避免短时间内多次触发动画引起性能问题
 * @param {number} 间隔时间
 * @param {function} 回调函数
 * @return {function}
 * @author: WangQiaoLing
 */
function throttle(delay, fn) {
  let timer = null
  return (...args) => {
    if (timer) return
    timer = setTimeout(() => {
      fn.call(args)
      timer = null
    }, delay)
  }
}
