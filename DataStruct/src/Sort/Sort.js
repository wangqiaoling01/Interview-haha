/*
 * @Description: Description
 * @Version: 1.0
 * @Autor: WangQiaoLing
 * @Date: 2020-07-07 22:33:29
 * @LastEditors: WangQiaoLing
 * @LastEditTime: 2020-07-07 22:56:08
 */
class Sort {
  constructor(array) {
    this.array = array
  }

  // 冒泡排序
  bubble_sort() {
    for (let i = 0; i < this.array.length; i++) {
      for (let j = 0; j < this.array.length - i - 1; j++) {
        if (this.array[i] > this.array[j]) {
          ;[this.array[j], this.array[i]] = [this.array[i], this.array[j]]
        }
      }
    }
    return this.array
  }

  // 快速排序
  quick_sort() {
    return this.quick(this.array, 0, this.array.length - 1)
  }
  // 快排辅助函数
  quick(array, left, right) {
    let index
    if (array.length > 1) {
      index = this.partition(array, left, right)
      if (left < index - 1) {
        this.quick(array, left, index - 1)
      }
      if (index < right) {
        this.quick(array, index, right)
      }
    }
    return array
  }
  partition(array, left, right) {
    const piovt = array[Math.floor((right + left) / 2)]
    let i = left
    let j = right
    while (i <= j) {
      while (array[i] < piovt) {
        i++
      }
      while (array[j] > piovt) {
        j--
      }
      if (i <= j) {
        ;[array[j], array[i]] = [array[i], array[j]]
        i++
        j--
      }
    }
    return i
  }
}

const arr = new Sort([5, 4, 3, 2, 1])
// let res_bubble_sort = arr.bubble_sort()
// console.log(res_bubble_sort)
let res_quick_sort = arr.quick_sort()
console.log(res_quick_sort)
