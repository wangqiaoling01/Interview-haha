/*
 * @Description: Description
 * @Version: 1.0
 * @Autor: WangQiaoLing
 * @Date: 2020-07-08 11:56:09
 * @LastEditors: WangQiaoLing
 * @LastEditTime: 2020-07-08 22:28:19
 */
// export default
class Sort {
  constructor(array = []) {
    this.array = array
  }
  // 冒泡排序
  bubbleSort() {
    for (let i = 0; i < this.array.length; i++) {
      for (let j = 0; j < this.array.length - i - 1; j++) {
        if (this.array[j] > this.array[j + 1]) {
          ;[this.array[j + 1], this.array[j]] = [
            this.array[j],
            this.array[j + 1],
          ]
        }
      }
    }
  }
  // 归并排序
  mergeSort() {
    return this.mergeSortExcutor(this.array, 0, this.array.length - 1)
  }
  // 归并排序辅助函数
  mergeSortExcutor(arr, start, end) {
    if (start < end) {
      const middle = Math.floor((start + end) / 2)
      const arr1 = this.mergeSortExcutor(arr, start, middle)
      const arr2 = this.mergeSortExcutor(arr, middle + 1, end)
      return this.merge_array(arr1, arr2)
    }
    return [arr[end]]
  }
  // 合并两个有序数组
  merge_array(arr1, arr2) {
    console.log(arr1, arr2)

    const merge_arr = []
    let index_1 = 0
    let index_2 = 0
    while (index_1 < arr1.length && index_2 < arr2.length) {
      // 哪一个数组的头部元素小，就合并谁，然后更新头部的位置
      if (arr1[index_1] <= arr2[index_2]) {
        merge_arr.push(arr1[index_1])
        index_1++
      } else {
        merge_arr.push(arr2[index_2])
        index_2++
      }
    }
    // 循环结束后，arr1或 arr2 有剩余
    // 如果 arr1 有剩余，则将其全部合并

    if (index_1 < arr1.length) {
      while (index_1 < arr1.length) {
        merge_arr.push(arr1[index_1])
        index_1++
      }
    }
    if (index_2 < arr2.length) {
      // 如果 arr2 有剩余，则将其全部合并
      while (index_2 < arr2.length) {
        merge_arr.push(arr2[index_2])
        index_2++
      }
      return merge_arr
    }
  }
  print() {
    return this.array
  }
}
var arr = [7, 2, 8, 1, 4, 6, 9, 3]
const merge_sort = new Sort(arr)
let res = merge_sort.mergeSort()
// console.log(res)
// var arr1 = [1, 3, 5]
// var arr2 = [2, 4, 6]
// const merge_sort = new Sort()
// let res = merge_sort.merge_array(arr1, arr2)
console.log(res)
