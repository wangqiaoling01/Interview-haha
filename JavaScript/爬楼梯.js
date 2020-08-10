/*
 * @Description: Description
 * @Version: 1.0
 * @Autor: WangQiaoLing
 * @Date: 2020-08-02 20:38:43
 * @LastEditors: WangQiaoLing
 * @LastEditTime: 2020-08-03 10:40:30
 */
var climbStairs = function (n) {
  let cache = []
  for (let i = 0; i <= n - 1; i++) {
    if (i === 0 || i === 1 || i === 2) {
      cache[i] = i + 1
    } else {
      cache[i] = cache[i - 1] + cache[i - 2]
    }
  }
  console.log(cache)
  return cache.pop()
}
console.log(climbStairs(2))
// let num1 = 0
// let arr1 = [1, 2, 3]
// arr1.reverse().map((item, index) => {
//   num1 += item * Math.pow(10, arr1.length - index - 1)
// })

// function ListNode(val) {
//   this.val = val
//   this.next = null
// }

// let resArr = []
// for (let i = 0; i < String(807).length; i++) {
//   resArr.unshift(String(807)[i])
// }
// console.log(resArr)
// let resNodeList = []
// let index = 0
// let cur = (resLink = new ListNode(Number(resArr[index])))
// while (index < resArr.length) {
//   resLink.next = Number(resArr[index + 1])
//     ? new ListNode(Number(resArr[index + 1]))
//     : null
//   resNodeList.push(resLink)
//   index++
//   resLink = resLink.next
// }
// console.log(Number(null))
