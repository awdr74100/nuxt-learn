<template>
  <div>
    <h1>Swiper</h1>
  </div>
</template>

<script>
import delay from '@/utils/delay';

export default {
  watchQuery(newQuery) {
    console.log(`newQuery ${Date.now()} start`);
    console.log(`newQuery ${Date.now()} finish`);
    return newQuery.key;
  },
  // watchQuery: ['key'], // Non-Blocking (client)
  layout: 'default',
  loading: true,
  head: { title: '首頁' },
  transition: { name: 'fade' },
  scrollToTop: true,
  fetchOnServer: true,
  fetchDelay: 200,
  middleware: ['auth'], // Blocking (server、client)
  async validate(context) {
    // Blocking (server、client)
    console.log(`component validate ${Date.now()} start`);
    // await delay();
    console.log(`component validate ${Date.now()} finish`);
    return true;
  },
  async asyncData(context) {
    // Blocking (server、client)
    console.log(`component asyncData ${Date.now()} start`);
    // await delay();
    console.log(`component asyncData ${Date.now()} finish`);
    return { title: 'title' };
  },
  async fetch() {
    // Blocking (server)、Non-Blocking (client)
    console.log(`component fetch ${Date.now()} start`);
    await delay();
    console.log(`component fetch ${Date.now()} finish`);
    this.title = 'title';
  },
  async beforeCreate() {
    // Non-Blocking (server、client)
    const env = process.client ? 'client' : 'server';
    console.log(`component beforeCreate ${Date.now()} start in ${env}`);
    // await delay();
    console.log(`component beforeCreate ${Date.now()} finish in ${env}`);
  },
  async created() {
    // Non-Blocking (server、client)
    const env = process.client ? 'client' : 'server';
    console.log(`component created ${Date.now()} start in ${env}`);
    // await delay();
    console.log(`component created ${Date.now()} finish in ${env}`);
  },
  async beforeMount() {
    // Non-Blocking (server、client)
    const env = process.client ? 'client' : 'server';
    console.log(`component beforeMount ${Date.now()} start in ${env}`);
    // await delay();
    console.log(`component beforeMount ${Date.now()} finish in ${env}`);
  },
  async mounted() {
    // Non-Blocking (server、client)
    const env = process.client ? 'client' : 'server';
    console.log(`component mounted ${Date.now()} start in ${env}`);
    // await delay();
    console.log(`component mounted ${Date.now()} finish in ${env}`);
  },
};
</script>
