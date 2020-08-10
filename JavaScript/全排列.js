/*
 * @Description: Description
 * @Version: 1.0
 * @Autor: WangQiaoLing
 * @Date: 2020-07-27 12:17:38
 * @LastEditors: WangQiaoLing
 * @LastEditTime: 2020-07-27 12:18:06
 */
function permute(nums) {
  let list = []
  backtrack(list, [], nums)
  return list
}
function backtrack(list, temp, nums) {
  if (temp.length == nums.length) {
    return list.push([...temp])
  }
  for (let i = 0; i < nums.length; i++) {
    if (temp.includes(nums[i])) continue
    temp.push(nums[i])
    backtrack(list, temp, nums)
    temp.pop()
  }
}
let res = permute([1, 2, 3])
console.log(res)
