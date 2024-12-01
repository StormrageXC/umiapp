import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: 'AI电商助手',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    // {
    //   name: '权限演示',
    //   path: '/access',
    //   component: './Access',
    // },
    {
      name: ' AI自动化营销工具',
      path: '/auto',
      routes: [
        {
          name: '发布记录',
          path: 'record',
          component: './Table',
        },
      ],
    },
    { path: '/*', component: './Home' },
  ],
  npmClient: 'npm',
});
