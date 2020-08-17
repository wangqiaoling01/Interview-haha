/*
 * @Description: Description
 * @Version: 1.0
 * @Autor: WangQiaoLing
 * @Date: 2020-08-11 16:24:37
 * @LastEditors: WangQiaoLing
 * @LastEditTime: 2020-08-11 16:56:10
 */
// 定义栈
class Stack {
  constructor() {
    this.items = []
  }
  // 添加一个元素到栈顶，压栈
  push(item) {
    this.items.push(item)
    return this.items.length
  }
  // 弹出栈顶元素
  pop() {
    return this.items.pop()
  }
  // 返回栈顶的元素
  top() {
    return this.items[this.items.length - 1]
  }
  // 判断栈是否为空
  isEmpty() {
    return this.items.length == 0
  }
  // 返回栈里的元素的个数
  size() {
    return this.items.length
  }
  // 清空栈
  clear() {
    this.items = []
  }
  getStackNum() {
    return this.items
  }
}
// let stack = new Stack()
// stack.push(1)
// stack.push(2)
// stack.push(3)
// console.log(stack)
// 定义节点
class BinTreeNode {
  constructor(data) {
    this.data = data
    this.leftChild = null
    this.rightChild = null
    this.parentChild = null
  }
}
// let node1 = new BinTreeNode(1)
// let node2 = new BinTreeNode(2)
// let node3 = new BinTreeNode(3)
// node1.leftChild = node2
// node1.rightChild = node3
// console.log(node1.leftChild)
class BinaryTree {
  constructor(string) {
    this.root = null
    this.init_tree(string)
  }
  // 通过广义表初始化一个二叉树 A(B(D,E(G,)),C(,F))#
  init_tree(string) {
    let stack = new Stack()
    let k = 0 // 识别左右子树
    let new_node = null
    for (let i = 0; i < string.length; i++) {
      let item = string[i]
      if (item === '#') {
        break
      }
      if (item === '(') {
        stack.push(new_node)
        k = 1 // 左子树
      } else if (item === ',') {
        k = 2 // 右子树
      } else if (item === ')') {
        stack.pop()
      } else {
        new_node = new BinTreeNode(item) // 创建节点
        if (this.root == null) {
          this.root = new_node
        } else {
          if (k === 1) {
            // 左子树
            let top = stack.top()
            top.leftChild = new_node
            new_node.parentNode = top
          } else if (k === 2) {
            // 右子树
            let top = stack.top()
            top.rightChild = new_node
            new_node.parentNode = top
          }
        }
      }
    }
  }
  // 获取树的根节点
  get_root() {
    return this.root
  }
  /**递归前序遍历 */
  pre_traverse_res() {
    const res = []
    this.pre_traverse(this.root, res)
    return res
  }
  pre_traverse(node, list) {
    if (node == null) {
      return null
    }
    list.push(node.data)
    this.pre_traverse(node.leftChild, list)
    this.pre_traverse(node.rightChild, list)
  }
  /**递归中序遍历 */
  in_traverse_res() {
    const res = []
    this.pre_traverse(this.root, res)
    return res
  }
  in_traverse(node, list) {
    if (node == null) {
      return null
    }
    this.in_traverse(node.leftChild, list)
    list.push(node.data)
    this.in_traverse(node.rightChild, list)
  }
  /**递归后序遍历 */
  post_traverse_res() {
    const res = []
    this.post_traverse(this.root, res)
    return res
  }
  post_traverse(node, list) {
    if (node == null) {
      return null
    }
    this.post_traverse(node.leftChild, list)
    list.push(node.data)
    this.post_traverse(node.rightChild, list)
  }
}

const tree = new BinaryTree('A(B(D,E(G,)),C(,F))#')
const pre_traverse_res = tree.pre_traverse_res() // 前序遍历
console.log(pre_traverse_res)
const in_traverse_res = tree.in_traverse_res() // 中序遍历
console.log(in_traverse_res)
const post_traverse_res = tree.post_traverse_res() // 后序遍历
console.log(post_traverse_res)
