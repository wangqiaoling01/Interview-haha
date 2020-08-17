/*
 * @Description: Description
 * @Version: 1.0
 * @Autor: WangQiaoLing
 * @Date: 2020-07-21 10:28:12
 * @LastEditors: WangQiaoLing
 * @LastEditTime: 2020-08-10 14:18:38
 */
function throttle(fn, delay) {
  let timer = null
  return function () {
    if (timer) {
      return
    }
    timer = setTimeout(() => {
      this.call(fn)
      timer = null
    }, delay)
  }
}
