import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
// 安装vue-router插件
Vue.use(Router)

export default new Router({
  mode: 'history',
  // 打包之前要取消html5的history模式
  routes: [
    {
      path: '*',
      component: resolve => require(['../components/common/Notfound.vue'], resolve)
    },
     // 路由地址重定向
    {
      path: '/',
      redirect: '/login'
    },
    // {
    //   path: '/hello',
    //   component: resolve => require(['../components/Hello.vue'], resolve)
    // },
    {
      path: '/login',
      component: resolve => require(['../components/common/Login.vue'], resolve)
    },
    {
      path: '/register',
      component: resolve => require(['../components/common/Register.vue'], resolve)
    },
    {
      path: '/home',
      component: resolve => require(['../components/common/Home.vue'], resolve),
      children: [
        {
          path: '/',
          component: resolve => require(['../components/page/One.vue'], resolve)
        },
        {
          path: '/one',
          component: resolve => require(['../components/page/One.vue'], resolve)
        },
        {
          path: '/two',
          component: resolve => require(['../components/page/Two.vue'], resolve)
        },
        {
          path: '/three',
          component: resolve => require(['../components/page/Three.vue'], resolve)
        },
        {
          path: '/four',
          component: resolve => require(['../components/page/Four.vue'], resolve)
        },
        {
          path: '/five',
          component: resolve => require(['../components/page/Five.vue'], resolve)
        },
        {
          path: '/six',
          component: resolve => require(['../components/page/Six.vue'], resolve)
        },
        {
          path: '/seven',
          component: resolve => require(['../components/page/Seven.vue'], resolve)
        },
        {
          path: '/eight',
          component: resolve => require(['../components/page/Eight.vue'], resolve)
        },
        {
          path: '/nine',
          component: resolve => require(['../components/page/Nine.vue'], resolve)
        }
      ]
    }
  ]
})

