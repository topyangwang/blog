import Vue from 'vue/dist/vue.js'
import App from './App.vue'
import router from './router'
import './permission'  //权限管理
import scrollReveal from 'scrollreveal'  //滚动动画
import preview from 'vue-photo-preview'  //照片查看器
import 'vue-photo-preview/dist/skin.css'
Vue.use(preview)

import Axios from 'axios';
import {formatDate} from './common/filter'
import editor from './common/editor' //富文本编辑器
editor();

import 'font-awesome/css/font-awesome.min.css' //图标库
import 'animate.css'

import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';

Vue.prototype.scrollReveal = scrollReveal({reset: true});

Vue.use(ElementUI);

Vue.prototype.$http = Axios

Vue.filter('formatDate',formatDate)
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
