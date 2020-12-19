<template>
  <div>
    <h1>首頁</h1>
    <button class="btn btn-primary" @click.prevent="fetch">按鈕 A</button>
    <button class="btn btn-secondary" @click.prevent="refresh">按鈕 B</button>
  </div>
</template>

<script>
export default {
  fetchDelay: 0,
  middleware(context) {
    // console.log('middleware active');
  },
  validate(context) {
    // console.log('validate active');
    return true;
  },
  fetch() {
    console.log(this.$store);
    console.log(this.$router);
    // console.log('fetch active');
  },
  asyncData(context) {
    // console.log('asyncData active');
  },
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
