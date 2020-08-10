/*
 * @Description: Description
 * @Version: 1.0
 * @Autor: WangQiaoLing
 * @Date: 2020-07-08 12:17:17
 * @LastEditors: WangQiaoLing
 * @LastEditTime: 2020-07-08 12:41:55
 */
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1)
  }, 2000)
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2)
  }, 1000)
})

Promise.race([p1, p2]).then(
  (values) => {
    console.log('values = ', values)
  },
  (reason) => {
    console.log('reason =', reason)
  }
)
