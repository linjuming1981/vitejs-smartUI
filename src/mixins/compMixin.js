import { createApp, h } from 'vue';
import Request from '@/utils/Request.js';
export default {
  props: {},
  data() {
    return {
      wgType: 'echart', // echart | normal
      config: {},
    };
  },
  methods: {
    setConfig(config) {
      this.config = config;
      return this;
    },
    mount(el) {
      if (typeof el === 'string') {
        el = this.$el.querySelector(el);
      }
      if (this.wgType === 'echart') {
        this.renderChart(el);
      }
    },
    async getApiData() {
      const res = await Request.get({
        url: this.config.dataApiUrl,
      });
      return res.data.data;
    },
  },
};
