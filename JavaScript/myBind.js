/*
 * @Description: Description
 * @Version: 1.0
 * @Autor: WangQiaoLing
 * @Date: 2020-07-22 21:56:59
 * @LastEditors: WangQiaoLing
 * @LastEditTime: 2020-07-26 16:21:16
 */
// 第一遍
function fn1(a, b, c, d) {
  console.log('this', this)
  console.log(a, b, c, d)
  return 'i am fn1'
}

Function.prototype.myBind = function () {
  var self = this
  var thatArg = arguments[0]
  console.log(thatArg) // { x: 100 }
  var args = Array.prototype.slice.call(arguments, 1)
  console.log(args) // [1, 2, 3]
  return function () {
    var funcArgs = args.concat(Array.prototype.slice.call(arguments))
    console.log(funcArgs)
    return self.apply(thatArg, funcArgs)
  }
}
var fn2 = fn1.myBind({ x: 100 }, 1, 2, 3)
var res = fn2(4)
console.log(res)

// 第二遍
function fn(a, b, c) {
  console.log('this', this)
  console.log(a, b, c)
  return 'i am fn'
}
Function.prototype.myBindByApply = function () {
  var self = this
  var obj = arguments[0]
  var outerArgs = Array.prototype.slice.call(arguments, 1)
  return function () {
    return self.apply(
      obj,
      outerArgs.concat(Array.prototype.slice.call(arguments))
    )
  }
}
var fn3 = fn.myBindByApply({ x: 100 }, 1, 2)
var result = fn3(3)
console.log(result)
