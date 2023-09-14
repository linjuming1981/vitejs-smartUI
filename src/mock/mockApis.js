const commonItem = {
  serie: '@city',
  'value|300-500': 1,
  'date_time|': '@date',
  'int_100|0-100': 1,
  'int_1000|0-1000': 1,
  'int_10000|0-10000': 1,
  'int_100_n|-100-100': 1,
  'int_1000_n|-1000-1000': 1,
  'int_10000_n|-10000-10000': 1,
  'float_100|0-100.1-10': 1,
  'float_1000|0-1000.1-10': 1,
  'float_10000|0-10000.1-10': 1,
  'float_100_n|-100-100.1-10': 1,
  'float_1000_n|-1000-1000.1-10': 1,
  'float_10000_n|-10000-10000.1-10': 1,
  title: '@title(3,5)',
  ctitle: '@ctitle(3,5)',
  cname: '@cname',
  region: '@region', // 华中
  province: '@province', // 广东省
  city: '@city', // 东莞市
  country: '@country', // 寮步镇
  id: '@id',
};

export default {
  '/mock/common': {
    'total|1-100': 1,
    'data|1-20': [commonItem],
  },
};
