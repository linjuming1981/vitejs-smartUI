<template>
  <div>
    <div>11111112221</div>
    <router-view />
  </div>
</template>
<script>
import { useRouter } from 'vue-router';
export default {
  data() {
    return {};
  },
  mounted() {
    const router = useRouter();
    const routes = router.getRoutes();
    console.log(11111, routes);
  },
};
</script>
