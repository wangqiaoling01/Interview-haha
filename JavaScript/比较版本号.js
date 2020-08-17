/*
 * @Description: Description
 * @Version: 1.0
 * @Autor: WangQiaoLing
 * @Date: 2020-08-14 12:52:04
 * @LastEditors: WangQiaoLing
 * @LastEditTime: 2020-08-15 12:41:53
 */
/**
 * @description:
 * @param {String} str1 版本号1
 * @param {String} str2 版本号2
 * @return {Boolean} true str1是先出来的版本号 false str1是后出来的版本号
 * @author: WangQiaoLing
 */
function compareVersion(str1, str2) {
  const arr1 = str1.split('.').map((val) => parseInt(val))
  const arr2 = str2.split('.').map((val) => parseInt(val))
  let i = 0,
    j = 0,
    len1 = arr1.length,
    len2 = arr2.length
  while (i < len1 && j < len2) {
    if (arr1[i] < arr2[i]) {
      return -1
    } else if (arr1[i] === arr2[j]) {
      i++
      j++
    } else {
      return 1
    }
  }

  if (i === len1 && j === len2) return 1
  // arr1 遍历完，arr2剩余
  if (i === len1) {
    const arr2_left = arr2.slice(j)
    return arr2_left.some((val) => val !== 0) ? -1 : 1
  }
  // arr2 遍历完，arr1剩余
  if (i === len1) {
    const arr1_left = arr1.slice(i)
    return arr1_left.some((val) => val !== 0) ? -1 : 1
  }
}

// let res = compareVersion('1.1', '1.2')
// console.log(res)

let res1 = ['1.2', '1.1', '1.3'].sort((a, b) => compareVersion(a, b))
console.log(res1)
// let res = [1, 3, 2].sort((a, b) => a - b)
// console.log(res)

// Window.name = 'qqq'
// function A() {
//   this.name = 'a'
// }
// A.prototype.getA = function () {
//   console.log(this) // 调用时this指向全局作用域 输出 Window 对象
//   return this.name + 1 // 返回 qqq1
// }
// let a = new A() // a 为构造函数A的一个实例
// let funA = a.getA // funA为a的原型上的getA方法
// console.log(funA()) // qqq1

// Window.name = 'qqq'
// class A {
//   constructor() {
//     this.name = 123
//   }
//   getA() {
//     console.log(this)
//     return this.name + 1
//   }
// }
// let a = new A() // a 为类A的一个实例
// let funA = a.getA // funA为a的getA方法
// console.log(funA()) //

function foo() {
  console.log(this)
  console.log(this.a)
}
function doFoo(fn) {
  fn()
}
var obj = {
  a: 2,
  foo: foo,
}
let a = 'oops, global'
// debugger
// doFoo(obj.foo)
