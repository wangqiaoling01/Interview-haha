/*
 * @Description: Description
 * @Version: 1.0
 * @Autor: WangQiaoLing
 * @Date: 2020-07-28 21:06:56
 * @LastEditors: WangQiaoLing
 * @LastEditTime: 2020-07-29 15:16:33
 */
function add() {
  let args = [...arguments]
  innerAdd = function () {
    args.push(...arguments)
    return innerAdd
  }
  innerAdd.sumof = function () {
    return args.reduce((cur, total) => cur + total, 0)
  }
  innerAdd.mulof = function () {
    return args.reduce((cur, total) => cur * total, 1)
  }
  return innerAdd
}
// console.log(add(1)(2)(3).sumof())
// console.log(add(0)(2)(3).mulof())

function curry(fn, args) {
  let length = fn.length
  args = args || []
  return function () {
    let allArgs = [...args, ...arguments]
    if (allArgs.length >= length) {
      return fn.apply(this, allArgs)
    } else {
      return curry.call(this, fn, allArgs)
    }
  }
}

function add2(a, b, c) {
  return a + b + c
}
// let add3 = curry(add2)
// let res = add3(1, 2)(2)
// console.log(res)

function curryFunction(fn, args) {
  let length = fn.length
  args = args || []
  return function () {
    let allArgs = [...args, ...arguments]
    if (allArgs.length >= length) {
      return fn.apply(this, allArgs)
    } else {
      return curryFunction.call(this, fn, allArgs)
    }
  }
}
function addTest(a, b, c) {
  return a + b + c
}
let add4 = curryFunction(addTest)
let res = add4(1)(2)(3)
let res2 = add4(1, 2)(2)

console.log(res, res2)
// function add2() {
//   // 第一次执行时，定义一个数组专门用来储存所有的参数
//   var args = [...arguments]
//   // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
//   var fn = function () {
//     var fn_args = [...arguments]
//     return add.apply(null, args.concat(fn_args))
//   }
//   // 利用隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
//   fn.toString = function () {
//     return args.reduce(function (acc, prev) {
//       return acc + prev
//     })
//   }
//   return fn
// }
// console.log(add2(2, 3, 4).toString())
// add1(2)(3, 4)
// add1(2)(3)(4)
// add1(2, 3)(4)
// const curry1 = (fn, args1 = []) => (...args2) => {
//   const allArgs = [...args1, ...args2]
//   return fn.length === allArgs ? fn(...allArgs) : curry1(fn, allArgs)
// }
let arr=[1,1,2,2]
let res=arr.reduce((cur,prev)=>{

  ​	if(!prev.includes(cur)){
  
  ​		prev.push(cur)
  
  }
  
  return prev
  
  },[])

console.log(res);
