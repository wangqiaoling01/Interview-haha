/*
 * @Description: 归并排序
 * @Version: 1.0
 * @Autor: WangQiaoLing
 * @Date: 2020-07-08 22:00:46
 * @LastEditors: WangQiaoLing
 * @LastEditTime: 2020-07-28 10:19:20
 */
function merge_sort(arr) {
  return merge_sort_excute(arr, 0, arr.length - 1)
}
function merge_sort_excute(arr, start, end) {
  console.log(arr, start, end)
  if (start < end) {
    // 分
    const middle = parseInt(start + ((end - start) >> 1))
    const arr1 = merge_sort_excute(arr, start, middle)
    const arr2 = merge_sort_excute(arr, middle + 1, end)
    // 治
    return merge_array(arr1, arr2)
  }
  return [arr[end]]
}
function merge_array(arr1, arr2) {
  let merge_arr = []
  let index_1 = 0
  let index_2 = 0

  while (index_1 < arr1.length && index_2 < arr2.length) {
    if (arr1[index_1] <= arr2[index_2]) {
      merge_arr.push(arr1[index_1])
      index_1++
    } else {
      merge_arr.push(arr2[index_2])
      index_2++
    }
  }

  if (index_1 < arr1.length) {
    while (index_1 < arr1.length) {
      merge_arr.push(arr1[index_1])
      index_1++
    }
  }

  if (index_2 < arr2.length) {
    while (index_2 < arr2.length) {
      merge_arr.push(arr2[index_2])
      index_2++
    }
  }

  return merge_arr
}
// var arr1 = [1, 3, 5]
// var arr2 = [2, 4, 6]
// console.log(merge_array(arr1, arr2))
// const arr = [7, 2, 8, 1, 4, 6, 9, 3]
// console.log(merge_sort(arr))

const arr = [4, 1]
console.log(merge_sort(arr))
