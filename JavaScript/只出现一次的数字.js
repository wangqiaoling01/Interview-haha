/*
 * @Description: Description
 * @Version: 1.0
 * @Autor: WangQiaoLing
 * @Date: 2020-07-27 16:07:01
 * @LastEditors: WangQiaoLing
 * @LastEditTime: 2020-07-27 16:15:28
 */
/**
 * 异或：如果a、b两个值不相同，则异或结果为1。如果a、b两个值相同，异或结果为0。
 * @description: 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
 * @param {type}
 * @return:
 * @author: WangQiaoLing
 */
function singleNumber(nums) {
  let result = 0
  for (let i = 0; i < nums.length; i++) {
    result = result ^ nums[i]
  }
  return result
}
console.log(singleNumber([1, 2, 2]))
