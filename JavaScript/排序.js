/*
 * @Description: Description
 * @Version: 1.0
 * @Autor: WangQiaoLing
 * @Date: 2020-07-27 12:52:08
 * @LastEditors: WangQiaoLing
 * @LastEditTime: 2020-07-27 13:06:19
 */
function swap(arr, i, j) {
  ;[arr[j], arr[i]] = [arr[i], arr[j]]
  return arr
}
// console.log(swap([2, 1], 0, 1))
function bubble_sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        ;[arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]
      }
    }
  }
  return arr
}
// console.log(bubble_sort([5, 6, 8, 9, 7]))
function quick_sort(nums) {
  if (nums.length <= 1) {
    return nums
  }
  const mid_index = Math.floor(nums.length / 2)
  const mid_value = nums.splice(mid_index, 1)[0]
  let left_nums = [],
    right_nums = []
  for (let i = 0; i < nums.length; i++) {
    nums[i] > mid_value ? right_nums.push(nums[i]) : left_nums.push(nums[i])
  }
  return quick_sort(left_nums).concat(mid_value, quick_sort(right_nums))
}
console.log(quick_sort([5, 6, 8, 9, 7]))
