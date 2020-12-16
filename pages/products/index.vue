<template>
  <div>
    <p>default</p>
  </div>
</template>

<script>
export default {
  async fetch({ $axios }) {
    console.log('active');
    await $axios.post('/api/test', {}, { progress: false });
  },
  created() {
    console.log(process.client);
    console.log(process.server);
  },
};
</script>
