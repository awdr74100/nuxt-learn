<template>
  <div>
    <h1>首頁</h1>
    <button class="btn btn-primary" @click.prevent="activeProgressBar">
      按鈕
    </button>
  </div>
</template>

<script>
export default {
  loading: false,
  async fetch({ $axios }) {
    console.log('Start index', Date.now());
    await $axios.post('/api/test', {}, { progress: false });
    console.log('End index', Date.now());
  },
  methods: {
    async activeProgressBar() {
      this.$nuxt.$loading.start();
      await this.$axios.post('/api/test', {}, { progress: false });
      this.$nuxt.$loading.finish();
    },
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
