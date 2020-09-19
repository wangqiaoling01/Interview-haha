/*
 * @Description: 手写订阅发布
 * @Version: 1.0
 * @Autor: WangQiaoLing
 * @Date: 2020-08-18 14:09:28
 * @LastEditors: WangQiaoLing
 * @LastEditTime: 2020-08-18 14:32:31
 */
/**
 *  @Description 一个消息中心：observers 用于存储每个订阅的回调函数
 *  @Description 一个订阅函数： on 用于往 消息中心写入对应频道的监听回调函数
 *  @Description 一个发布函数：trigger 发布消息， 触发对应频道的所有回调函数，并将数据作为	回调函数的参数 传给了订阅者
 */
/**
 * @description: 发布 / 订阅模式的实现
 * @param {Object} observers 消息中心 用于存储每个订阅的回调函数
 * @param {Function} on 用于往消息中心写入对应频道的监听回调函数
 * @param {Function} trigger 发布消息，触发对应频道的所有回调函数，并将数据作为回调函数的参数,传给了订阅者
 * @return {type}
 * @author: WangQiaoLing
 */
class EventEmitter {
  constructor() {
    this._events = this._events || new Map()
    this._maxListenersNum = this._maxListenersNum || 10
  }
}
// 给 EventEmitter 的 type 添加事件
EventEmitter.prototype.on = function (type, ...fn) {
  let handler = this._events.get(type)
  if (!handler) {
    this._events.set(type, fn)
  } else if (handler && typeof handler === 'function') {
    this._events.set(type, [handler, fn])
  } else {
    handler.push(args)
  }
}
// 触发 EventEmitter 的 type 事件
EventEmitter.prototype.emit = function (type, ...args) {
  let handler = this._events.get(type)
  if (Array.isArray(handler)) {
    // 一次触发其中的回调函数
    for (let fn of handler) {
      fn(args)
    }
  } else {
    // 单个函数
    fn(args)
  }
}

// 删除
EventEmitter.prototype.removeEvent = function (type, fn) {
  const vm = this
  // 如果没有传参，清空所有订阅
  if (!arguments.length) {
    vm._events = new Map()
    return vm
  }
  const handler = vm._events.get(type)
  if (handler && typeof handler === 'function') {
    // 只有一个
    vm._events.delete(type)
  } else {
    // events为数组时，循环执行
    let position
    for (let i = 0; i < handler.length; i++) {
      position = handler[i] === fn ? i : -1
    }
    if (position !== -1) {
      handler.splice(position, 1)
      if (handler.length === 1) {
        vm._events.set(type, handler[0])
      }
    } else {
      // 没找到
      return vm
    }
  }
}

EventEmitter.prototype.once = function (type, fn) {
  const vm = this
  function on() {
    vm.removeEvent(type, fn)
    fn.apply(vm, arguments)
  }
  on.fn = fn
  vm.on(type, on)
  return vm
}
