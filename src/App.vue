<template>
  <div>
    <div class="routes">
      <ul>
        <li v-for="(n, i) in routes" :key="i" @click="goToRouter(n.path)">
          {{ n.name }}
        </li>
      </ul>
    </div>
    <router-view />
  </div>
</template>
<script>
import { useRouter } from 'vue-router';
export default {
  data() {
    return {
      routes: [],
    };
  },
  mounted() {
    this.initRouteDatas();
  },
  methods: {
    initRouteDatas() {
      const router = useRouter();
      const routes = router.getRoutes();
      this.routes = routes;
    },
    goToRouter(path) {
      this.$router.push(path);
    },
  },
};
</script>
<style lang="scss" scoped>
.routes {
  color: tan;
  background-color: rgba(0, 0, 0, 0.9);
  ul {
    display: flex;
    padding-left: 10px;
    li {
      list-style: none;
      padding: 3px 10px;
      cursor: pointer;
    }
  }
}
</style>
