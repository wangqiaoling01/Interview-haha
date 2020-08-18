/**
 * @description: 实现深拷贝：数组和对象类型
 * @param {object} 待深拷贝的对象
 * @return {object} 进行深拷贝之后的对象
 * @author: WangQiaoLing
 * @version: 1.0
 */
function deepClone1(obj = {}) {
  // 判断当前 obj 的类型
  if (typeof obj !== 'object' || obj == null) return obj
  // 对结果进行初始化
  const result = obj instanceof Array ? [] : {}
  // 递归进行深拷贝
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = deepClone(obj[key])
    }
  }
  // 返回结果
  return result
}

function deepClone2(obj = {}) {
  /**
   * 判断 obj 是不是 type 类型的
   * @param {*} obj
   * @param {string} type
   * @return {boolean}
   */
  const isType = (obj, type) => {
    if (typeof isType !== 'object') return false
    const typeString = Object.prototype.toString.call(obj)
    let flag
    switch (type) {
      case 'Array':
        flag = typeString === '[object Array]'
        break
      case 'Date':
        flag = typeString === '[object Date]'
        break
      case 'RegExp':
        flag = typeString === '[object RegExp]'
        break
      default:
        flag = false
    }
    return flag
  }
  // 处理正则
  const getRegExp = (re) => {
    var flags = ''
    if (re.global) flags += 'g'
    if (re.ignoreCase) flags += 'i'
    if (re.multiline) flags += 'm'
    return flags
  }
  // 维护两个储存循环引⽤的数组
  const parents = []
  const children = []

  const _clone = (parent) => {
    if (obj == null) return null
    if (typeof obj !== 'object') return parent
    let child, proto
    if (isType(parent, 'Array')) {
      // 如果是数组
      child = []
    } else if (isType(parent, 'RegExp')) {
      // 如果是正则
      // 对正则对象做特殊处理
      child = new RegExp(parent.source, getRegExp(parent))
      if (parent.lastIndex) child.lastIndex = parent.lastIndex
    } else if (isType(parent, 'Date')) {
      // 对Date对象做特殊处理
      child = new Date(parent.getTime())
    } else {
      // 处理对象原型
      proto = Object.getPrototypeOf(parent)
      // 利⽤ Object.create 切断原型链
      child = Object.create(proto)
    }
    // 处理循环引⽤
    const index = parents.indexOf(parent)
    if (index != -1) {
      // 如果⽗数组存在本对象,说明之前已经被引⽤过,直接返回此对象
      return children[index]
    }
    parents.push(parent)
    children.push(child)
    for (let i in parent) {
      // 递归
      child[i] = _clone(parent[i])
    }
    return child
  }
  return _clone(obj)
}
