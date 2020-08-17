/*
 * @Description: 发布\订阅模式的实现
 * @Version: 1.0
 * @Autor: WangQiaoLing
 * @Date: 2020-08-15 12:22:45
 * @LastEditors: WangQiaoLing
 * @LastEditTime: 2020-08-15 12:38:28
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
    this.observers = {}
  }
  on(channel, f) {
    let key = channel
    if (Array.isArray(this.observers[key])) {
      this.observers[key].push(f)
    } else {
      this.observers[key] = [f]
    }
  }
  trigger(channel, ...args) {
    let _observer = this.observers[channel]
    if (!_observer || _observer.length === 0) {
      return
    }
    for (let fn of _observer) {
      fn(...args)
    }
  }
  off(channel) {
    this.observers[channel] = null
  }
}
// 其使用 方式如下
var e = new EventEmitter()
e.on('a', (data) => {
  console.log('a data', data)
})
e.on('b', (data) => {
  console.log('b data', data)
})
e.trigger('a', 'hello')
e.trigger('b', {
  x: 2,
  y: 3,
})
e.off('a')
