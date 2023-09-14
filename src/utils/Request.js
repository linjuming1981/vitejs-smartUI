// 参考 gitee vite-mock-project
import axios from 'axios';

export default {
  get(option) {
    const headers = {
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    };

    return new Promise((resolve, reject) => {
      axios({
        url: option.url,
        type: 'get',
        headers,
        ...option,
      })
        .then((res) => {
          if (res.status === 200) {
            resolve(res);
          } else {
            reject(res);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  post(option, type) {
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Content-type': 'application/json',
    };
    const { params } = option;
    return new Promise((resolve, reject) => {
      let formData = null;
      if (type) {
        if (type === 1) {
          headers['Content-type'] = 'application/x-www-form-urlencoded';
        } else if (type === 2) {
          headers['Content-type'] = 'multipart/form-data';
        }
        formData = new FormData();
        for (const key in params) {
          formData.append(key, params[key]);
        }
      }
      axios({
        url: option.url,
        type: 'post',
        formData,
        ...option,
      })
        .then((res) => {
          if (res.status === 200) {
            resolve(res);
          } else {
            reject(res);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};
