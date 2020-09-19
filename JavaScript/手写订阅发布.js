/*
 * @Description: 发布\订阅模式的实现
 * @Version: 1.0
 * @Autor: WangQiaoLing
 * @Date: 2020-08-15 12:22:45
 * @LastEditors: WangQiaoLing
 * @LastEditTime: 2020-08-15 12:38:28
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
  once(channel, f) {
    const _this = this
    function on() {
      _this.off()
      f.apply(_this, arguments)
    }
    on.f = f
    _this.$on(channel, on)
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
