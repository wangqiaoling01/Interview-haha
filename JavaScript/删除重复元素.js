/*
 * @Description: Description
 * @Version: 1.0
 * @Autor: WangQiaoLing
 * @Date: 2020-07-27 13:09:49
 * @LastEditors: WangQiaoLing
 * @LastEditTime: 2020-07-27 14:03:03
 */
/**
 * @description: 删除排序数组中的重复元素
 * @param {type}：nums
 * @return: 去重后的数组长度
 * @author: WangQiaoLing
 */
function removeDuplicates(nums) {
  let slow = 0
  for (let fast = 1; fast < nums.length; j++) {
    if (nums[slow] !== nums[fast]) {
      slow++
      nums[slow] = nums[fast]
    }
  }
  return slow + 1
}
console.log(removeDuplicates([0, 0, 1, 1, 1]))
