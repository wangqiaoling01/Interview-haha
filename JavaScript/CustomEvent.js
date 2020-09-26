/**
 * @description 自定义事件（暂时无用，有谁需要用时，一定要联系作者确认！！！）
 * @author
 */
class CustomEvent {
  // 如 'change': [fn1, fn2, fn3]

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
    let i = handler.length
    while (i--) {
      const cb = handle[i]
      if (cb === fn || cb.fn === fn) {
        handle.splice(i, 1)
        break
      }
    }
    // 解绑某个事件：将这个事件从回调数组中过滤掉
    events.set(type, handler)
  }

  /**
   * 触发事件
   * @param type 事件类型
   */
  emit(type, ...args) {
    const events = this.events
    const handler = events.get(type)

    if (handler && handler.length !== 0) {
      handler.forEach((fn) => fn(args))
    } else {
      events.set(type, [])
      return
    }
  }

  /**
   *
   * @param type
   * @param fn
   */
  once(type, fn) {
    const self = this
    function _on(...args) {
      self.off(type, _on) // 解绑
      fn(args) // 执行 fn
    }
    _on.fn = fn // 给 _on 赋静态属性 fn，便于对 once 事件进行手动 off 的情况进行判断
    this.on(type, _on)
  }
}

const ce = new CustomEvent()
const list = []
function A() {
  list.push(1)
}

// ce.on('a', A)
// ce.emit('a')

ce.once('b', A)
ce.off('b')
ce.emit('b')
ce.emit('b')
console.log(list)
