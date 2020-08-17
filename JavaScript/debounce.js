/*
 * @Description: Description
 * @Version: 1.0
 * @Autor: WangQiaoLing
 * @Date: 2020-07-21 10:26:31
 * @LastEditors: WangQiaoLing
 * @LastEditTime: 2020-08-10 14:18:21
 */
function debounce(fn, delay) {
  let timer = null
  return function () {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      this.call(fn)
      timer = null
    }, delay)
  }
}
