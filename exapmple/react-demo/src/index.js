import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { init } from 'monitor-sdk';

init({
  appId: 'react0001', // appId
  userId: 'user0008', // userId
  reportUrl: 'http://localhost:3009/report/actions', // 请求的后端地址
  delay: 0, // 延时上报的时间
  autoTracker: true, // 自动埋点
  hashPage: true, // 是否为hash路由，为fasle的话则默认为history路由
  errorReport: true, // 是否开启错误监控
});

window.addEventListener('hashchange', function(e) {
  console.log('hashchange-----')
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
