/*
 * @Description: Description
 * @Version: 1.0
 * @Autor: WangQiaoLing
 * @Date: 2020-07-21 17:24:51
 * @LastEditors: WangQiaoLing
 * @LastEditTime: 2020-07-22 11:59:27
 */
class MaxStack {
  constructor(arr) {
    const mainStack = new Stack()
    const maxStack = new Stack()
  }
  push(value) {
    mainStack.push(value)
    if (maxStack.isEmpty() || value >= maxStack.peek()) {
      maxStack.push(value)
    }
  }
  pop() {
    if (!maxStack.isEmpty()) {
      const main_peek = mainStack.pop()
      if (main_peek === maxStack.peek()) {
        maxStack.pop()
      }
      return main_peek
    }
    return null
  }
}
