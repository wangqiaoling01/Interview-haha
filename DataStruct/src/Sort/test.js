/*
 * @Description: Description
 * @Version: 1.0
 * @Autor: WangQiaoLing
 * @Date: 2020-07-08 17:39:27
 * @LastEditors: WangQiaoLing
 * @LastEditTime: 2020-07-08 22:18:11
 */
// import Sort from './index'
// const arr = [53, 17, 78, 9, 45, 65, 87, 23]
// const sort_array = new Sort(arr)
// function test_bubbleSort() {
//   sort_array.bubbleSort()
//   return sort_array.print()
// }

// function test_mergeSort() {
//   sort_array.mergeSort()
// }
// export { test_bubbleSort, test_mergeSort }

function merge_sort_ex(arr, start, end) {
  if (start < end) {
    // 分
    var middle = Math.floor((start + end) / 2)
    var arr1 = merge_sort_ex(arr, start, middle)
    var arr2 = merge_sort_ex(arr, middle + 1, end)
    // 治
    return merge(arr1, arr2)
  }
  return [arr[end]]
}

function merge_sort(arr) {
  return merge_sort_ex(arr, 0, arr.length - 1)
}

// 合并两个有序数组
function merge(arr1, arr2) {
  var merge_arr = []
  var index_1 = 0
  var index_2 = 0

  while (index_1 < arr1.length && index_2 < arr2.length) {
    // 哪个数组的头部元素小,就合并谁,然后更新头的位置
    if (arr1[index_1] <= arr2[index_2]) {
      merge_arr.push(arr1[index_1])
      index_1++
    } else {
      merge_arr.push(arr2[index_2])
      index_2++
    }
  }

  // arr1有剩余
  if (index_1 < arr1.length) {
    while (index_1 < arr1.length) {
      merge_arr.push(arr1[index_1])
      index_1++
    }
  }

  // arr2有剩余
  if (index_2 < arr2.length) {
    while (index_2 < arr2.length) {
      merge_arr.push(arr2[index_2])
      index_2++
    }
  }

  return merge_arr
}

// var arr = [7, 2, 8, 1, 4, 6, 9, 3]
// console.log(merge_sort(arr))
// var arr1 = [1, 3, 5]
// var arr2 = [2, 4, 6]
// console.log(merge(arr1, arr2))
