import Vue from 'vue'
import App from './App.vue'
import router from './router'

import scrollReveal from 'scrollreveal'
import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'
Vue.use(preview)
Vue.prototype.scrollReveal = scrollReveal();
    // Vue.prototype.scrollReveal.reveal('.reveal-top', {
    //   // 动画的时长
    //   duration: 2000,
    //   // 延迟时间
    //   delay: 500,
    //   // 动画开始的位置，'bottom', 'left', 'top', 'right'
    //   origin: 'top',
    //   // 回滚的时候是否再次触发动画
    //   reset: false,
    //   // 在移动端是否使用动画
    //   mobile: true,
    //   // 滚动的距离，单位可以用%，rem等
    //   distance: '200px',
    //   // 其他可用的动画效果
    //   opacity: 0.001,
    //   easing: 'linear',
    //   scale: 0.9,
    // });

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
