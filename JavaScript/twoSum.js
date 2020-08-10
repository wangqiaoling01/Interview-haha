/*
 * @Description: Description
 * @Version: 1.0
 * @Autor: WangQiaoLing
 * @Date: 2020-07-19 17:22:58
 * @LastEditors: WangQiaoLing
 * @LastEditTime: 2020-07-19 17:26:17
 */
function twoSums(nums, target) {
  let obj = {}
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i]
    if (element in obj) {
      return [obj[element], i]
    } else {
      obj[target - element] = i
    }
  }
  console.log(obj)
}

console.log(twoSums([1, 2, 3], 4))
