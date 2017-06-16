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
      redirect: '/hello'
    },
    {
      path: '/hello',
      // name: 'Hello',
      // component: Hello
      component: resolve => require(['../components/Hello.vue'], resolve)
    },
    {
      path: '/login',
      component: resolve => require(['../components/common/Login.vue'], resolve)
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