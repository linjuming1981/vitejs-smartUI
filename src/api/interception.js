import axios from 'axios';
import Mock from 'mockjs';
import mockApis from '@/mock/mockApis.js';

axios.defaults.withCredentials = true;
axios.defaults.timeout = 50000;

axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    if (err.config.url.startsWith('/mock')) {
      const apiPath = err.config.url;
      let data = mockApis[apiPath];
      data = Mock.mock(data);
      console.log(`Mock data for ${apiPath}: `, data);
      return {
        ...err.response,
        status: 200,
        data,
      };
    }
    return Promise.reject(err);
  }
);
