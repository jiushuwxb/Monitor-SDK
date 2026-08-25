import React from 'react';
import { tracker } from 'monitor-sdk';

const Index = () => {
  return (
    <div>
      <h2>行为日志采集</h2>

      {/* 手动埋点 */}
      <button
        style={{ marginRight: 20 }}
        data-no="yes"
        onClick={() => {
          tracker('submit', '按钮1被点击了');
        }}
      >按钮1</button>

      {/* 属性埋点 */}
      <button style={{ marginRight: 20 }} data-target="按钮2被点击了">按钮2</button>

      {/* 自动埋点 */}
      <button 
        style={{ marginRight: 20 }}
        onClick={(e) => {
          e.stopPropagation();
          tracker('submit', '按钮1被点击了');
        }}
      >按钮3</button>
    </div>
  );
}

export default Index;