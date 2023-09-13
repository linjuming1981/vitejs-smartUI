import { createApp, h } from 'vue';
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
    },
    mount(el) {
      if (typeof el === 'string') {
        el = this.$el.querySelector(el);
      }
      if (this.wgType === 'echart') {
        this.renderChart(el);
      }
    },
  },
};
