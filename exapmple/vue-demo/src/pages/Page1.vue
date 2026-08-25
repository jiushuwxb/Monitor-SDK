<script setup  name="page1">
import { tracker } from 'monitor-sdk';

</script>
<template>
  <div>
    <h2>page1</h2>
    <!-- 手动埋点 -->
    <button 
      style="marginRight: 20px"
      @click="tracker('click', '按钮1被点击了')"
    >按钮1</button>

    <!-- 属性埋点 -->
    <button 
      data-target="按钮2被点击了"
      style="marginRight: 20px"
    >按钮2</button>

    <!-- 自动埋点 -->
    <button style="marginRight: 20px">按钮3</button>
  </div>
</template>
