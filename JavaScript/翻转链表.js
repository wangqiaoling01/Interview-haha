/*
 * @Description: Description
 * @Version: 1.0
 * @Autor: WangQiaoLing
 * @Date: 2020-07-19 17:26:44
 * @LastEditors: WangQiaoLing
 * @LastEditTime: 2020-07-19 22:38:13
 */
function ReverseList(head) {
  if (!head) {
    return null
  }
  if (head.next == null) {
    return head
  }
  const new_head = ReverseList(head.next)
  new_head.next.next = head
  new_head.next = null
  return new_head
}
function ReversePrint(head) {
  if (head == null) {
    return
  } else {
    ReversePrint(head.next)
    console.log(head.data)
  }
}
