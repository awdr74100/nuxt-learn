<template>
  <div>
    <h1>關於</h1>
  </div>
</template>

<script>
export default {
  loading: false,
  async fetch({ $axios }) {
    console.log('Start about', Date.now());
    await $axios.post('/api/test', {}, { progress: false });
    console.log('End about', Date.now());
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
