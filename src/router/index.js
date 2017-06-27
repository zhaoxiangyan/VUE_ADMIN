import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
// 安装vue-router插件
Vue.use(Router)

export default new Router({
  routes: [
     // 路由地址重定向
    {
      path: '/',
      redirect: '/adminlogin'
    },
    {
      path: '/adminlogin',
      component: resolve => require(['../components/adminLogin.vue'], resolve)
    },
    {
      path: '/home',
      component: resolve => require(['../components/admin/common/Home.vue'], resolve),
      children: [
        {
          path: '/',
          component: resolve => require(['../components/admin/views/One.vue'], resolve)
        },
        {
          path: '/one',
          component: resolve => require(['../components/admin/views/One.vue'], resolve)
        },
        {
          path: '/two',
          component: resolve => require(['../components/admin/views/Two.vue'], resolve)
        },
        {
          path: '/three',
          component: resolve => require(['../components/admin/views/Three.vue'], resolve)
        },
        {
          path: '/four',
          component: resolve => require(['../components/admin/views/Four.vue'], resolve)
        },
        {
          path: '/five',
          component: resolve => require(['../components/admin/views/Five.vue'], resolve)
        },
        {
          path: '/six',
          component: resolve => require(['../components/admin/views/Six.vue'], resolve)
        },
        {
          path: '/seven',
          component: resolve => require(['../components/admin/views/Seven.vue'], resolve)
        },
        {
          path: '/eight',
          component: resolve => require(['../components/admin/views/Eight.vue'], resolve)
        },
        {
          path: '/nine',
          component: resolve => require(['../components/admin/views/Nine.vue'], resolve)
        }
      ]
    }
  ]
})
