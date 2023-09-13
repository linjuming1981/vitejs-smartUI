<template>
  <div class="wBox">
    <Bar ref="Bar" />
  </div>
</template>
<script>
import Bar from '@/components/Bar/Bar.vue';
export default {
  components: {
    Bar,
  },
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.$refs.Bar.renderChart();
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.wBox {
  width: 300px;
  height: 300px;
}
</style>
