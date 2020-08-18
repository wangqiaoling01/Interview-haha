/*
 * @Description: Description
 * @Version: 1.0
 * @Autor: WangQiaoLing
 * @Date: 2020-08-18 14:52:29
 * @LastEditors: WangQiaoLing
 * @LastEditTime: 2020-08-18 14:53:58
 */
/**
 * 创建一个新对象，
 * 使得这个对象的原型指向obj
 * 返回这个对象
 * @param {*} obj
 */
function create(obj) {
  function F() {}
  F.prototype = obj
  return new F()
}
