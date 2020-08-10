/*
 * @Description: 项目入口文件
 * @Version: 1.0
 * @Autor: WangQiaoLing
 * @Date: 2020-07-30 10:31:35
 * @LastEditors: WangQiaoLing
 * @LastEditTime: 2020-07-31 11:39:58
 */
console.log('123')
import { helloworld } from './helloworld'
console.log(helloworld())
import Vue from 'vue'
import App from './index.vue'
Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount('#root')
