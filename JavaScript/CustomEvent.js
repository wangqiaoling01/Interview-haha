/**
 * @description 自定义事件（暂时无用，有谁需要用时，一定要联系作者确认！！！）
 * @author wangfupeng
 */

class CustomEvent {
  // 如 'change': [fn1, fn2, fn3]
  // private events: Map<string, Function[]>

  constructor() {
    this.events = new Map()
  }

  /**
   * 绑定自定义事件
   * @param type 事件类型
   * @param fn 函数
   */
  on(type, fn) {
    const events = this.events
    let handler = events.get(type)

    if (handler == null) {
      events.set(type, [fn])
    } else {
      handler.push(fn)
    }
  }

  /**
   * 解绑
   * @param type 事件类型
   * @param fn 函数
   */
  off(type, fn) {
    const events = this.events
    let handler = events.get(type) || [] // 找不到则为空数组

    // 没有传参数：解绑对应的所有的事件
    if (!fn) {
      events.set(type, [])
      return
    }

    // 解绑某个事件：将这个事件从回调数组中过滤掉
    events.set(
      type,
      handler.filter((f) => f !== fn)
    )
  }

  /**
   * 触发事件
   * @param type 事件类型
   */
  emit(type, ...args) {
    const events = this.events
    const handler = events.get(type)
    console.log('handler:', handler)
    if (handler && handler.length !== 0) {
      handler.forEach((fn) => fn(args))
    } else {
      console.log(`没有这个`, handler)
    }
  }

  once(type, fn) {
    const self = this
    function _on(...args) {
      self.off(type, _on) // 解绑
      // fn.apply(self, args) // 绑定this
      fn(args)
    }
    // _on.fn = fn
    this.on(type, _on)
  }
}

const a = []
function A() {
  a.push(1)
}
const test = new CustomEvent()
test.once('a', A)
// test.on('b', A('b被触发'))

test.emit('a')
console.log(a)
test.emit('a')
console.log(a)
// test.emit('a')
// test.emit('a')
// test.emit('b')
// test.emit('b')
