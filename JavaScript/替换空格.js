/*
 * @Description: Description
 * @Version: 1.0
 * @Autor: WangQiaoLing
 * @Date: 2020-07-19 16:58:32
 * @LastEditors: WangQiaoLing
 * @LastEditTime: 2020-07-19 17:15:08
 */
function replaceString(string) {
  let result = []
  for (let i = 0; i < string.length; i++) {
    result.push(string[i])
    if (string[i] === ' ') {
      result.push(' ')
      result.push(' ')
    }
  }

  let index1 = string.length - 1
  let index2 = result.length - 1
  while (index1 > 0 && index2 > index1) {
    if (string[index1] === ' ') {
      result[index2] = '0'
      result[index2 - 1] = '2'
      result[index2 - 2] = '%'
      index2 -= 3
      index1--
    } else {
      index1--
      index2--
    }
  }
  return result.join('')
}

const string = 'We are happy'
console.log(replaceString(string))
