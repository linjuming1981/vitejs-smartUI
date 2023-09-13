怎么使用echarts;

/*
src/components/echarts
  /common
    /echart-mixin.js
      getApiData
  /pie
    index.vue 
      options
    

*/

提供数据接口;
使用mock;

components / Bar;

mock / modckData.js;

import Comps from 'xxx';
Comps['bar1']
  .setConfig({
    dataApi: 'https://xxx/yyyy',
  })
  .mount('#hello');

import MyApp = createApp()