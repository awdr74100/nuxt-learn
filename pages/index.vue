<template>
  <div>
    <h1>首頁</h1>
    <button class="btn btn-primary" @click.prevent="fetch">按鈕 A</button>
    <button class="btn btn-secondary" @click.prevent="refresh">按鈕 B</button>
  </div>
</template>

<script>
export default {
  methods: {
    fetch() {
      this.$fetch();
    },
    refresh() {
      this.$nuxt.refresh();
    },
  },
};
</script>
