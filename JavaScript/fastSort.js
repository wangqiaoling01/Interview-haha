/*
 * @Description: Description
 * @Version: 1.0
 * @Autor: WangQiaoLing
 * @Date: 2020-07-19 17:36:36
 * @LastEditors: WangQiaoLing
 * @LastEditTime: 2020-07-19 17:48:54
 */
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr
  }
  const middle_index = Math.floor(arr.length / 2)
  const middle_value = arr.splice(middle_index, 1)[0]
  let leftArr = []
  let rightArr = []
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i]
    element > middle_value ? rightArr.push(element) : leftArr.push(element)
  }
  return quickSort(leftArr).concat(middle_value, quickSort(rightArr))
}
console.log(quickSort([5, 4, 3, 2, 1]))
