/*
 * @Description: Description
 * @Version: 1.0
 * @Autor: WangQiaoLing
 * @Date: 2020-07-22 15:56:54
 * @LastEditors: WangQiaoLing
 * @LastEditTime: 2020-07-28 13:09:31
 */
// 第一遍
function test(arr) {
  for (var i = 0; i < arr.length; i++) {
    ;(function (i, e) {
      setTimeout(function () {
        console.log(e)
      }, 1000 * (i + 1))
    })(i, arr[i])
  }
}
// test([1, 2, 3])

// 第二遍
function testLogArr(arr) {
  for (var i = 0; i < arr.length; i++) {
    ;(function (i, elem) {
      setTimeout(() => {
        console.log(elem)
      }, 1000 * (i + 1))
    })(i, arr[i])
  }
}
// testLogArr([1, 2, 3])

// 第一遍
function test1() {
  console.log(Array.prototype.slice.call(arguments, 0)[0])
}

function repeatWrapper(fn, count) {
  return function () {
    for (let i = 0; i < count; i++) {
      const args = Array.prototype.slice.call(arguments, 0)[0]
      fn(args)
    }
  }
}
// const fn = repeatWrapper(test1, 2)
// fn('hhhhhhh')

// 第二遍
function test() {
  // console.log(Array.prototype.slice.call(arguments, 0).join(' '))
  console.log(...arguments)
}
function testWrapper(fn, count) {
  return function () {
    for (let i = 0; i < count; i++) {
      // fn.apply(this, Array.prototype.slice.call(arguments))
      // fn(Array.prototype.slice.call(arguments))
      fn(...arguments)
    }
  }
}
var fnWrapper = testWrapper(test, 3)
fnWrapper(1, 2, 3)
