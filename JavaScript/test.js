/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * 连字符格式换着成驼峰格式
 * @param str string字符串
 * @return string字符串
 */
function cssStyle2DomStyle(str) {
  return str
    .split('-')
    .filter((item) => item)
    .map((item, index) => {
      if (index != 0) {
        return item.replace(item[0], item[0].toUpperCase())
      } else {
        return item
      }
    })
    .join('')
}
let res = cssStyle2DomStyle('hello-world')
console.log(res)
