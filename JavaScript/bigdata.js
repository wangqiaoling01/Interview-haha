/*
 * @Description: Description
 * @Version: 1.0
 * @Autor: WangQiaoLing
 * @Date: 2020-08-05 16:32:14
 * @LastEditors: WangQiaoLing
 * @LastEditTime: 2020-08-05 16:33:44
 */
function gen_bigdata() {
  list = []
  for (let index = 0; index < 100; index++) {
    list.push({
      id: index,
      content: '数据(data)是事实或观察的结果',
    })
  }
  return list
}
