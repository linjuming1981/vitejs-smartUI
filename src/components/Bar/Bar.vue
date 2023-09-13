<template>
  <div class="chart">ffffffe</div>
</template>
<script>
import * as echarts from 'echarts';
import compMixin from '@/mixins/compMixin.js';
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
    setConfig(config) {
      this.config = config;
    },
    mount() {},
    renderChart(el) {
      el = el || this.$el;
      const myChart = echarts.init(el);
      const options = {
        legend: {},
        tooltip: {},
        dataset: {
          // 提供一份数据。
          source: [
            ['product', '2015', '2016', '2017'],
            ['Matcha Latte', 43.3, 85.8, 93.7],
            ['Milk Tea', 83.1, 73.4, 55.1],
            ['Cheese Cocoa', 86.4, 65.2, 82.5],
            ['Walnut Brownie', 72.4, 53.9, 39.1],
          ],
        },
        // 声明一个 X 轴，类目轴（category）。默认情况下，类目轴对应到 dataset 第一列。
        xAxis: { type: 'category' },
        // 声明一个 Y 轴，数值轴。
        yAxis: {},
        // 声明多个 bar 系列，默认情况下，每个系列会自动对应到 dataset 的每一列。
        series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }],
      };
      myChart.setOption(options);
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
