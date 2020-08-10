/*
 * @Description: Description
 * @Version: 1.0
 * @Autor: WangQiaoLing
 * @Date: 2020-07-28 13:02:17
 * @LastEditors: WangQiaoLing
 * @LastEditTime: 2020-08-01 16:47:38
 */
Array.prototype.uniq = function () {
  var res = []
  var flag = true
  this.forEach(function (x) {
    if (res.indexOf(x) == -1) {
      if (x != x) {
        if (flag) {
          res.push(x)
          flag = false
        }
      } else {
        res.push(x)
      }
    }
  })
  return res
}

// console.log([{}, null, {}, NaN, NaN].uniq())

function uniqueArray1(arr) {
  return [...new Set(arr)]
}
function uniqueArray2(arr) {
  return arr.reduce((prev, cur) => {
    if (!prev.includes(cur)) {
      prev.push(cur)
    }
    return prev
  }, [])
}
function uniqueArray3(arr) {
  return arr.filter((item, index, arr) => {
    return arr.indexOf(item, 0) === index
  })
}
function uniqueArray4(arr) {
  arr.map((item1, index1) => {
    arr.map((item2, index2) => {
      if (index1 !== index2) {
        if (item1 === item2) {
          arr.splice(index2, 1)
        }
      }
    })
  })
  return arr
}
// console.log(uniqueArray4([1, 1, 2]))

list = [
  [1, 2, 3],
  [1, 3, 2],
]

function flattern(arr) {
  return arr.reduce((prev, cur) => {
    return prev.concat(Array.isArray(cur) ? flattern(cur) : cur)
  }, [])
}
// console.log(flattern(list))
function test(arr) {
  list = []
  arr.map((itemArr) => {
    str = ''
    itemArr.map((item) => {
      str += String(item)
    })
    list.push(str)
  })
  list = list.map((item) => Number(item))
  return list
}
console.log(test(list))
