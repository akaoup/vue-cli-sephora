import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Brand from '@/components/brand/Brand'
import Detail from '@/components/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/brand',
      name: 'Brand',
      component: Brand
    },
    {
      path: '/detail/:op',
      name: 'Detail',
      component: Detail
    }
  ],

  scrollBehavior(to,from,savedPosition){
        //return 滚动的位置
    return {x:0, y:0}
  }
})
