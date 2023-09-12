<template>
  <div>
    <div>css调试页面</div>
    <CssEditor v-model="cssCode" />
  </div>
</template>
<script>
import CssEditor from '@/components/CssEditor/CssEditor.vue';
export default {
  components: { CssEditor },
  data() {
    return {
      cssCode: '',
    };
  },
};
</script>
