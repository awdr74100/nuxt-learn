<template>
  <div>
    <h1>首頁</h1>
  </div>
</template>

<script>
export default {
  watchQuery: ['key'],
  layout: 'default',
  middleware: ['auth'],
  head: {},
  transition: { name: 'fade' },
  scrollToTop: true,
  validate(context) {
    console.log('validate active');
    return true;
  },
  asyncData(context) {
    console.log('asyncData active');
    return { title: 'title' };
  },
  fetch() {
    console.log('fetch active');
    this.title = 'title';
  },
  beforeCreate() {
    const env = process.client ? 'client' : 'server';
    console.log(`${env} beforeCreate active`);
  },
  created() {
    const env = process.client ? 'client' : 'server';
    console.log(`${env} created active`);
  },
};
</script>
