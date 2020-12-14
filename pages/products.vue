<template>
  <div>
    <h1>產品</h1>
  </div>
</template>

<script>
export default {
  async fetch({ $axios }) {
    console.log('Start products', Date.now());
    await $axios.post('/api/test', {}, { progress: false });
    console.log('End products', Date.now());
  },
};
</script>
