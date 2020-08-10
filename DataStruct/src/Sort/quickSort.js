/*
 * @Description: 快速排序
 * @Version: 1.0
 * @Autor: WangQiaoLing
 * @Date: 2020-07-08 22:29:50
 * @LastEditors: WangQiaoLing
 * @LastEditTime: 2020-07-16 22:16:13
 */
/**
 * 对于一个无序的数组，从中随机找出一个数，以这个数为基准对数组进行处理，
 * 处理之后，这个基准数的左边的数值都比它小，右边都比它大，如此便完成了一次分，
 * 其结果是数组里面的数据被分成了两派，一派在基准的左边，一派在基准值的右边
 * 接下来要治，分别智力治理这两派，对他们进行分，递归，当一派中只有一个值的时候，就不需要分治了，他已经是有序的了
 */

// 取arr[start]为基准值,将start到end这个区域进行分区
function partition(arr, start, end) {
  let base_pos = start
  let base_value = arr[start]

  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < base_value) {
      base_pos++
      if (base_pos != i) {
        ;[arr[base_pos], arr[i]] = [arr[i], arr[base_pos]]
      }
    }
  }
  arr[start] = arr[base_pos]
  arr[base_pos] = base_value
  return base_pos
}

function quick_sort_ex(arr, start, end) {
  if (start < end) {
    let poivotpos = partition(arr, start, end)
    quick_sort_ex(arr, start, poivotpos - 1)
    quick_sort_ex(arr, poivotpos + 1, end)
  }
}

function quick_sort(arr) {
  quick_sort_ex(arr, 0, arr.length - 1)
}

// var arr = [7, 2, 8, 1, 4, 6, 9, 3]
// quick_sort(arr)
// console.log(arr)

function quick(arr) {
  if (arr.length <= 1) {
    return arr
  }
  let middle_index = Math.floor(arr.length / 2)
  let middel_value = arr.splice(middle_index, 1)[0]
  let left_ary = []
  let right_ary = []
  for (let i = 0; i < arr.length; i++) {
    const elem = arr[i]
    elem < middel_value ? left_ary.push(elem) : right_ary.push(elem)
  }
  return quick(left_ary).concat(middel_value, quick(right_ary))
}
var arr = [7, 2, 8, 1, 4, 6, 9, 3]
let res = quick(arr)
console.log(res)
