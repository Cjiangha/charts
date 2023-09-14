/*
 * @Author: 张飞青
 * @LastEditors: zhangfeiqing
 * @LastEditTime: 2022-10-23 18:13:38
 * Copyright (c) 2022 by ziroom, All Rights Reserved. 
 */
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
