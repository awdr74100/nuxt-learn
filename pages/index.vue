<template>
  <div>
    <h1>首頁</h1>
  </div>
</template>

<script>
export default {
  head: () => ({
    title: '我是首頁',
  }),
  asyncData({ $config }) {
    console.log($config);
  },
  fetch() {},
  created() {},
};
</script>

<style lang="scss" scoped>
h1 {
  color: red;
}
</style>
