import Vue from 'vue'
import Router from 'vue-router'
// 安装vue-router插件
Vue.use(Router)

export default new Router({
  mode: 'history',
  // 打包之前要取消html5的history模式
  // base: '/system/',
  routes: [
    {
      path: '*',
      component: resolve => require(['../components/common/Notfound.vue'], resolve)
    },
     // 路由地址重定向
    {
      path: '/system/',
      redirect: '/system/login'
    },
    {
      path: '/system/login',
      component: resolve => require(['../components/common/Login.vue'], resolve)
    },
    {
      path: '/system/register',
      component: resolve => require(['../components/common/Register.vue'], resolve)
    },
    {
      path: '/system/add',
      component: resolve => require(['../components/common/Add.vue'], resolve)
    },
    {
      path: '/system/home',
      component: resolve => require(['../components/common/Home.vue'], resolve),
      children: [
        {
          path: '/',
          component: resolve => require(['../components/page/One.vue'], resolve)
        },
        {
          path: '/system/one',
          component: resolve => require(['../components/page/One.vue'], resolve)
        },
        {
          path: '/system/two',
          component: resolve => require(['../components/page/Two.vue'], resolve)
        },
        {
          path: '/system/three',
          component: resolve => require(['../components/page/Three.vue'], resolve)
        },
        {
          path: '/system/four',
          component: resolve => require(['../components/page/Four.vue'], resolve)
        }
      ]
    },
    // 管理员页面路由
    {
      path: '/system/admin/',
      redirect: '/system/admin/login'
    },
    {
      path: '/system/admin/login',
      component: resolve => require(['../components/admin/common/Login.vue'], resolve)
    },
    {
      path: '/system/admin/home',
      component: resolve => require(['../components/admin/common/Home.vue'], resolve),
      children: [
        {
          path: '/',
          component: resolve => require(['../components/admin/page/One.vue'], resolve)
        },
        {
          path: '/system/admin/one',
          component: resolve => require(['../components/admin/page/One.vue'], resolve)
        },
        {
          path: '/system/admin/two',
          component: resolve => require(['../components/admin/page/Two.vue'], resolve)
        },
        {
          path: '/system/admin/three',
          component: resolve => require(['../components/admin/page/Three.vue'], resolve)
        },
        {
          path: '/system/admin/four',
          component: resolve => require(['../components/admin/page/Four.vue'], resolve)
        }
      ]
    }
  ]
})

