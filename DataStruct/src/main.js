/*
 * @Description: 入口文件
 * @Version: 1.0
 * @Autor: WangQiaoLing
 * @Date: 2020-07-08 08:50:20
 * @LastEditors: WangQiaoLing
 * @LastEditTime: 2020-07-08 18:04:54
 */
console.log('数据结构项目')
// import MinHeap from './Heap/MinHeap'
// const arr = [53, 17, 78, 9, 45, 65, 87, 23]
// const minHeap = new MinHeap(10)
// 初始化堆 1
// minHeap.initTotalBinaryTree(arr)
// console.log(minHeap)

// 初始化堆 2
// for (let i = 0; i < arr.length; i++) {
//   minHeap.insert(arr[i])
// }
// console.log(minHeap)

// 最小堆排序
// const arr = [53, 17, 78, 9, 45, 65, 87, 23]
// const min_heap = new MinHeap(10)
// for (let i = 0; i < arr.length; i++) {
//   min_heap.insert(arr[i])
// }
// min_heap.print()
// const res_arr = []
// for (let i = 0; i < arr.length; i++) {
//   res_arr.push(min_heap.remove_min())
// }
// console.log(res_arr)

// Top-K 问题
/**
 * 一个非常大的数据集合有 n 个证书，求集合中最大的 k 个值
 * 初始化一个大小为 k 的最小堆，先放入 k 个数，此时，堆顶元素最小，
 * 集合中剩余的额数一次和堆顶元素进行比较，
 * 如果比对顶元素大，则删除堆顶元素，并放入新的元素，
 * 全部比较完之后，堆中的元素就是最大的 k 个值。
 */
// const arr = [53, 17, 78, 9, 45, 65, 87, 23]
// const min_heap = new MinHeap(3)
// for (let i = 0; i < 3; i++) {
//   min_heap.insert(arr[i])
// }
// for (let i = 3; i < arr.length; i++) {
//   const element = arr[i]
//   if (element > min_heap.get_min()) {
//     min_heap.remove_min()
//     min_heap.insert(element)
//   }
// }
// min_heap.print()

import { test_bubbleSort, test_mergeSort } from './Sort/test'
// let res = test_bubbleSort()
// console.log(res)

// let res = test_mergeSort()
// console.log(res)
