<template>
  <div>
    <h1>關於</h1>
  </div>
</template>

<script>
export default {
  loading: false,
  // middleware: 'auth',
  // async middleware() {
  //   await new Promise((resolve) => setTimeout(() => resolve(), 3000));
  // },
  async fetch({ $axios }) {
    await $axios.post('/api/test', {}, { progress: false });
  },
  async mounted() {
    await this.$nextTick();
    this.$nuxt.$loading.finish();
  },
  beforeRouteLeave(to, from, next) {
    this.$nuxt.$loading.start();
    next();
  },
};
</script>
