import router from './router'
// const userPermission = ['/admin'];
router.beforeEach((to, from, next) => {
    if (localStorage.getItem('userId')){
      if(to.path == '/login'){
        next('/admin');
      }else{
        next()
      }
    }else{
      if(to.path.slice(0,6) == '/admin'){
        next('/');
      }else{
        next();
      }
    }
});
