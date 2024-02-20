export default [
  { name:'登录',
    path: '/user', layout: false, routes: [{ path: '/user/login', component: './User/Login' }] },
  {
    path: '/',redirect: '/add_chart'},
  { name:'添加图表页',
    path: '/add_chart',
    icon: 'smile',
    component: './AddChart' },


  // { name:'欢迎页面',
  //   path: '/welcome', icon: 'smile', component: './Welcome' },
  {
    name:'管理员页面',
    path: '/admin',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      { path: '/admin',name:'管理员页面', redirect: '/admin/sub-page' },
      { path: '/admin/sub-page', name:'管理员界面2',component: './Admin' },
    ],
  },

  { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
];
