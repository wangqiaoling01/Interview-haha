/*
 * @Description: Description
 * @Version: 1.0
 * @Autor: WangQiaoLing
 * @Date: 2020-07-19 17:16:12
 * @LastEditors: WangQiaoLing
 * @LastEditTime: 2020-07-19 17:36:20
 */
function fibonacci1(n) {
  if (n === 1 || n === 2) {
    return 1
  }
  return fibonacci1(n - 1) + fibonacci1(n - 2)
}
console.log(fibonacci1(6))

function fibonacci2(n) {
  let cache = []
  for (let i = 0; i <= n - 1; i++) {
    if (i === 0 || i === 1) {
      cache[i] = 1
    } else {
      cache[i] = cache[i - 1] + cache[i - 2]
    }
  }
  return cache.pop()
}
console.log(fibonacci2(6))

function fibonacci3(n) {
  let queue = new queue()
  let index = 0
  queue.enqueue(1)
  queue.enqueue(1)
  while (index < n - 2) {
    let pre_item = queue.dequeue()
    let head_item = queue.head()
    let next_item = pre_item + head_item
    queue.enqueue(next_item)
    index += 1
  }
  queue.dequeue()
  return queue.head()
}
