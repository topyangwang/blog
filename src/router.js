import Vue from 'vue/dist/vue.js'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/life',
      name: 'life',
      component: () => import('./views/Life.vue')
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import('./views/Detail.vue')
    },
    {
      path: '/album',
      name: 'album',
      component: () => import('./views/Album.vue')
    },
    {
      path: '/photos',
      name: 'photos',
      component: () => import('./views/Photos.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('./views/manage/home.vue')
    },
    {
      path: '/admin/addLife',
      name: 'addLife',
      component: () => import('./views/manage/addLife.vue')
    },
    {
      path: '/admin/addPhotos',
      name: 'addPhotos',
      component: () => import('./views/manage/addPhotos.vue')
    }
  ]
})
