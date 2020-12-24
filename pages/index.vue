<template>
  <div>
    <h1>首頁</h1>
    <h2>Value：{{ value }}</h2>
    <client-only>
      <vue-slider v-model="value" />
    </client-only>
    <date-picker v-model="date" value-type="timestamp" range />
  </div>
</template>

<script>
import qs from 'qs';
import axios from 'axios';

export default {
  data() {
    return {
      date: [Date.now(), Date.now() + 1000 * 60 * 60 * 24 * 7],
      value: 0,
    };
  },
  head: () => ({
    title: '我是首頁',
  }),
  async fetch() {},
  created() {},
  async mounted() {
    try {
      const { data } = await this.$axios.get('/api/products', {
        name: 'roya',
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style lang="scss" scoped>
h1 {
  color: red;
}
</style>
