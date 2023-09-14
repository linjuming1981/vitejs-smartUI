<template>
  <div class="chart">ffffffe</div>
</template>
<script>
import * as echarts from 'echarts';
import compMixin from '@/mixins/compMixin.js';
import option from './option.js';
import Util from '@/utils/Util.js';
export default {
  mixins: [compMixin],
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    async renderChart(el) {
      el = el || this.$el;
      const myChart = echarts.init(el);
      const apiData = await this.getApiData();
      const _option = Util.clone(option);
      _option.dataset.source = apiData;
      myChart.setOption(_option);
    },
  },
};
</script>
<style lang="scss" scoped>
.chart {
  width: 100%;
  height: 100%;
  background: tan;
}
</style>
