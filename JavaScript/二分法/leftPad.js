/*
 * @Description: Description
 * @Version: 1.0
 * @Autor: WangQiaoLing
 * @Date: 2020-07-27 10:48:36
 * @LastEditors: WangQiaoLing
 * @LastEditTime: 2020-07-27 11:33:05
 */
/**
 * 如果要拼接 1000 个 ch，不停地计算，共拼接10次
 * @description: 在 str 前补字符 ch，长度为len
 * @param {type}
 * @return:
 * @author: WangQiaoLing
 */
function leftpad(str, len, ch) {
  if (!ch && ch !== 0) {
    ch = ' '
  }
  // 需要补齐的长度
  let length = len - str.length
  return ch + Array(length).join(ch) + str
}
console.log(leftpad('hello', 10, '0'))
/**
 * 使用二分法，拼接 0 00 0000 00000000
 * 比如要拼接10个0 则 00000000 + 00 拼接2次
 * @description:
 * @param {type}
 * @return:
 * @author: WangQiaoLing
 */
function leftpad2(str, len, ch) {
  if (!ch && ch !== 0) {
    ch = ' '
  }
  // 需要补齐的长度
  let length = len - str.length
  // 二分法
  let total = ''
  while (length) {
    if (length % 2 === 1) {
      total += ch
    }
    if (length === 1) {
      return total + str
    }
    ch += ch
    length = parseInt(length / 2)
  }
}
console.log(leftpad2('hello', 11, '0'))
/**
 * 使用二分法，拼接 0 00 0000 00000000
 * 比如要拼接10个0 则 00000000 + 00 拼接2次
 * 使用与运算进行优化
 * @description:
 * @param {type}
 * @return:
 * @author: WangQiaoLing
 */
function leftpad3(str, len, ch) {
  if (!ch && ch !== 0) {
    ch = ' '
  }
  // 需要补齐的长度
  let length = len - str.length
  // 二分法
  let total = ''
  while (length) {
    if (length & 1) {
      total += ch
    }
    if (length === 1) {
      return total + str
    }
    ch += ch
    // length = parseInt(length / 2)
    length = length >> 1
  }
}
console.log(leftpad2('hello', 11, '0'))
