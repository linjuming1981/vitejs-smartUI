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
    this.loadChart('Bar');
  },
  methods: {
    loadChart(name) {
      let comp = this.$refs[name];
      comp
        .setConfig({
          dataApiUrl: '/mock/common',
        })
        .mount();
    },
  },
};
</script>
<style lang="scss" scoped>
.wBox {
  width: 300px;
  height: 300px;
}
</style>
