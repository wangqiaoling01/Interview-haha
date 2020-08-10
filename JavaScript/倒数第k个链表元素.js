/*
 * @Description: Description
 * @Version: 1.0
 * @Autor: WangQiaoLing
 * @Date: 2020-07-21 17:24:41
 * @LastEditors: WangQiaoLing
 * @LastEditTime: 2020-07-26 16:34:40
 */
// 第一遍
function get_k_link_item(head) {
  let p1 = head
  let p2 = head
  for (let i = 0; i < k && p1 != null; i++) {
    p1 = p1.next
  }
  while (p1 != null) {
    p1 = p1.next
    p2 = p2.next
  }
  return p2
}
// 第二遍
function get_k_link_postorder(head) {
  let p1 = head
  let p2 = head
  for (let i = 0; i < k && p1 != null; i++) {
    p1 = p1.next
  }
  while (p1 != null) {
    p1 = p1.next
    p2 = p2.next
  }
  return p2
}
