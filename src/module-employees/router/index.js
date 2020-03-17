/*
 * @Author: itcast 
 * @Description: xxx业务模块 
 * @Date: 2018-04-13 16:13:27 
 * @Last Modified by: hans.taozhiwei
 * @Last Modified time: 2018-09-03 11:12:47
 */

import Layout from '@/module-dashboard/pages/layout'
const _import = require('@/router/import_' + process.env.NODE_ENV)

export default [
  {
    root: true,
    path: '/employees',
    component: Layout,
    redirect: 'noredirect',
    name: 'employees',
    meta: {
      title: '员工管理',
      icon: 'component'
    },
    children: [
      {        
        path: 'details/:id',        
        component: _import('employees/pages/employees-details'),        
        // hidden: true // 是否显示在左侧菜单        
        name: 'details',        
        meta: {          
          title: '详情'        
        }      
      }
    ]
  }
]
