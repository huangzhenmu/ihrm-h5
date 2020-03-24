import Layout from '@/module-dashboard/pages/layout'
const _import = require('@/router/import_' + process.env.NODE_ENV)

export default [
  {
    root: true,
    path: '/departments',
    component: Layout,
    redirect: 'noredirect',
    name: 'departments',
    meta: {
      title: '组织架构管理',
      icon: 'architecture'
    },
    children: [
      // 默认点击了组织架构模块后 跳到第一个子路径
      {
        path: 'index',
        component: _import('departments/pages/index'),
        name: 'organizations-index',
        meta: {title: '组织架构', icon: 'architecture', noCache: true}
      },
      {
        path: 'haha',
        component: _import('departments/pages/haha'),
        name: 'organizations-haha',
        meta: {title: 'haha', icon: 'architecture', noCache: true}
      }
    ]
  }
]
