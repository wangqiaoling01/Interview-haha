/*
 * @Description: Description
 * @Version: 1.0
 * @Autor: WangQiaoLing
 * @Date: 2020-07-19 23:28:28
 * @LastEditors: WangQiaoLing
 * @LastEditTime: 2020-07-22 15:56:15
 */

function sendRequest(chunks, limit = 4) {
  return new Promise((resolve, reject) => {
    const len = chunks.length
    let counter = 0

    const start = async () => {
      console.log('start', counter)
      const task = chunks.shift()
      if (task) {
        setTimeout(() => {
          console.log(task)
        }, 0)
        if (counter == len - 1) {
          // 最后一个
          resolve()
        } else {
          counter++
          start()
        }
      }
    }
    while (limit > 0) {
      start()
      limit -= 1
    }
  })
}
sendRequest([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14])
