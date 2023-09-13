<template>
  <div class="chart">ffffffe</div>
</template>
<script>
import * as echarts from 'echarts';
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    console.log(111);
  },
  methods: {
    renderChart() {
      const myChart = echarts.init(this.$el);
      const options = {};
      myChart.setOptions(options);
    },
  },
};
</script>
<style lang="scss" scoped>
.chart {
}
</style>
