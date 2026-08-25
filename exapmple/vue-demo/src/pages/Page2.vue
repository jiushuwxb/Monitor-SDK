<template>
  <div>
    <h2>page2</h2>
    <!-- 语法错误 -->
    <button 
      style="marginRight: 20px"
      @click="handleSyntaxError"
    >语法错误</button>

    <!-- 同步错误 -->
    <button 
      style="marginRight: 20px"
      @click="handleSyncError"
    >同步错误</button>

    <!-- 异步错误 -->
    <button 
      style="marginRight: 20px"
      @click="handleAsyncError"
    >异步错误</button>

    <!-- promise错误 -->
    <button 
      style="marginRight: 20px"
      @click="handlePromiseError"
    >promise错误</button>

    <!-- resource错误 -->
    <button 
      style="marginRight: 20px"
      @click="handleRescourceError"
    >resource错误</button>
    <img v-if="show" src="localhost:8000/images/test.png" alt="">
  </div>
</template>

<script>
import { errorCaptcher } from 'monitor-sdk';

export default {
  data() {
    return {
      show: false
    }
  },
  methods: {
    handleSyntaxError: function() {
      // try {
      //   let name = 'heihei; // 少一个单引号
      //   console.log(name);
      // } catch (error) {
      //   console.log('----捕获到了语法错误-----');
      // }
    },
    handleSyncError: function() {
      // try {
      //   const name = 'heihei';
      //   name.map();
      // } catch (error) {
      //   console.log('---- 捕获到同步错误 ---');
      //   errorCaptcher(error, '同步执行错误')
      // }  
    },
    handleAsyncError: function() {
      // 异步错误无法被trycatch捕获
      // try {
      //   setTimeout(() => {
      //     undefined.map();
      //   }, 0);
      // } catch (error) {
      //   console.log('-----异步错误-----')
      // }
    },
    handlePromiseError: function() {
      // Promise.reject('promise error');
    },
    handleRescourceError: function() {
      // this.show = true;
    }
  }  
}
</script>
