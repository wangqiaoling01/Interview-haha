/*
 * @Description: Description
 * @Version: 1.0
 * @Autor: WangQiaoLing
 * @Date: 2020-08-18 14:33:33
 * @LastEditors: WangQiaoLing
 * @LastEditTime: 2020-08-18 14:43:43
 */

Function.prototype.myCall = function (context, ...args) {
  let context = context || window
  context.fn = this // 将函数设为对象的属性
  const result = context.fn(args) // 执行该函数
  delete context.fn // 删除该函数
  return result
}
var foo = {
  value: 1,
}

function bar(a, b) {
  console.log(this.value)
}

bar.call(foo, 'kevin', 18) // 1

Function.prototype.myBind = function () {
  const args = Array.prototype.slice.call(arguments)
  const self = this
  const obj = args.shift()
  return function () {
    const innerArgs = Array.prototype.slice.call(arguments)
    self.apply(obj, innerArgs.concat(args))
  }
}
