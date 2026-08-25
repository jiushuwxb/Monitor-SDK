import React, { useEffect, useState } from 'react';
import { errorCaptcher } from 'monitor-sdk';

const Index = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // ----- 异步错误捕获 --------
    // window.onerror = function (msg, url, row, col, error) {
    //   console.log('---- 捕获到js执行错误 ----');
    //   console.log(msg);
    //   console.log(url);
    //   console.log(row);
    //   console.log(col);
    //   console.log(error);
    //   return true;
    // };

    // ------ promise error -----
    // window.addEventListener('unhandledrejection', (error) => {
    //   console.log('---- 捕获到promise error ---')
    // }, true);

    // ------ resource error ----
    // window.addEventListener('error', (error) => {
    //   console.log('---- 捕获到resource error ---')
    // }, true);
  }, []);

  return (
    <div>
      <h2>错误日志采集</h2>

      {/* 语法错误 */}
      <button
        style={{ marginRight: 20 }}
        // onClick={() => {
        //   try {
        //     const name = 'henimaqianduan;
        //     console.log(name);
        //   } catch (error) {
        //     console.log('--- 语法错误 --')
        //   }

        // }}
      >语法错误</button>

      {/* 同步错误 */}
      <button
        style={{ marginRight: 20 }}
        onClick={() => {
          // 同步错误可以被trycatch捕获到
          // try {
          //   const name = 'heimaqianduan';
          //   console.log(nam);   
          // } catch (error) {
          //   errorCaptcher(error, '手动捕获错误')
          //   // console.log('--- 同步错误 ---- ')
          // }
        }}
      >同步错误</button>

      {/* 异步错误 */}
      <button
        style={{ marginRight: 20 }}
        // onClick={() => {
        //   // 异步错误无法被trycatch捕获
        //   try {
        //     setTimeout(() => {
        //       let name = 'heimaqianduan';
        //       name.map();
        //     })
        //   } catch (error) {
        //     console.log('--- 异步错误---- ')
        //   }
        // }}
      >异步错误</button>

      {/* promise错误 */}
      <button
        style={{ marginRight: 20 }}
        onClick={() => {
          // Promise.reject('promise error').catch(err => {
          //   console.log('----- promise error -----');
          // });

          // Promise.reject('promise error');
        }}
      >promise错误</button>

      {/* resource错误 */}
      <button 
        style={{ marginRight: 20 }}
        onClick={() => {
          setShow(true);
        }}
      >resource错误</button>
      {
        show && <img src="localhost:8000/images/test.png" />
      }
    </div>
  );
}

export default Index;