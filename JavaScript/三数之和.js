/*
 * @Description: Description
 * @Version: 1.0
 * @Autor: WangQiaoLing
 * @Date: 2020-08-15 15:12:44
 * @LastEditors: WangQiaoLing
 * @LastEditTime: 2020-08-15 15:35:10
 */
function threeSum(nums) {
  const len = nums.length
  const result = []
  if (len < 3 || nums == null) return result
  nums.sort((a, b) => a - b)
  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) break
    // 说明该数字重复，会导致结果重复，所以应该跳过
    if (i > 0 && nums[i] === nums[i - 1]) continue
    let left = i + 1,
      right = len - 1
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right]
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]])
        // 当 sum == 0 时，nums[left] == nums[left+1]则会导致结果重复，应该跳过，left++
        while (nums[left] === nums[left + 1]) left++
        // 当 sumsum == 00 时，nums[R]nums[R] == nums[R-1]nums[R−1] 则会导致结果重复，应该跳过，R--R−−
        while (nums[right] === nums[right + 1]) right--
        left++
        right--
      } else if (sum > 0) {
        right--
      } else {
        left++
      }
    }
  }
  return result
}
