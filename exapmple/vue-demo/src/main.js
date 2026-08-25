import { createApp } from 'vue'
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import App from './App.vue'
import Page1 from './pages/Page1.vue';
import Page2 from './pages/Page2.vue';
import Page3 from './pages/Page3.vue';
import { init } from 'monitor-sdk';

const routes = [
  { path: '/page1', component: Page1 },
  { path: '/page2', component: Page2 },
  { path: '/page3', component: Page3 }, 
]

init({
  appId: 'vue0001', // appId
  userId: 'user0001', // userId
  reportUrl: 'http://localhost:3009/report/actions', // 请求的后端地址
  delay: 0, // 延时上报的时间
  autoTracker: false, // 自动埋点
  hashPage: false, // 是否为hash路由，为fasle的话则默认为history路由
  errorReport: true, // 是否开启错误监控
});

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App);
app.use(router)
app.mount('#app')


