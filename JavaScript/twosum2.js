/*
 * @Description: Description
 * @Version: 1.0
 * @Autor: WangQiaoLing
 * @Date: 2020-08-07 23:16:55
 * @LastEditors: WangQiaoLing
 * @LastEditTime: 2020-08-07 23:19:02
 */
function twoSum(numbers, target) {
  let i = 0
  let j = numbers.length - 1
  while (i < j) {
    let sum = numbers[i] + numbers[j]
    if (sum === target) {
      return [i + 1, j + 1]
    } else if (sum < target) {
      i += i
    } else {
      j -= j
    }
  }
}
console.log(twoSum([2, 7, 11, 15], 9))
