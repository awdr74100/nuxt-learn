<template>
  <div>
    <h1>次要關於</h1>
    <Swiper />
  </div>
</template>

<script>
import delay from '@/utils/delay';
import Swiper from '@/components/Swiper';

export default {
  components: {
    Swiper,
  },
  watchQuery(newQuery) {
    console.log(`child page newQuery ${Date.now()} start`);
    console.log(`child page newQuery ${Date.now()} finish`);
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
  // middleware: ['auth'], // Blocking (server、client)
  middleware(context) {
    console.log(`child page middleware ${Date.now()} start`);
    // await delay();
    console.log(`child page middleware ${Date.now()} finish`);
  },
  async validate(context) {
    // Blocking (server、client)
    console.log(`child page validate ${Date.now()} start`);
    // await delay();
    console.log(`child page validate ${Date.now()} finish`);
    return true;
  },
  async asyncData(context) {
    // Blocking (server、client)
    console.log(`child page asyncData ${Date.now()} start`);
    // await delay();
    console.log(`child page asyncData ${Date.now()} finish`);
    return { title: 'title' };
  },
  async fetch() {
    // Blocking (server)、Non-Blocking (client)
    console.log(`child page fetch ${Date.now()} start`);
    await delay();
    console.log(`child page fetch ${Date.now()} finish`);
    this.title = 'title';
  },
  async beforeCreate() {
    // Non-Blocking (server、client)
    const env = process.client ? 'client' : 'server';
    console.log(`child page beforeCreate ${Date.now()} start in ${env}`);
    // await delay();
    console.log(`child page beforeCreate ${Date.now()} finish in ${env}`);
  },
  async created() {
    // Non-Blocking (server、client)
    const env = process.client ? 'client' : 'server';
    console.log(`child page created ${Date.now()} start in ${env}`);
    // await delay();
    console.log(`child page created ${Date.now()} finish in ${env}`);
  },
  async beforeMount() {
    // Non-Blocking (server、client)
    const env = process.client ? 'client' : 'server';
    console.log(`child page beforeMount ${Date.now()} start in ${env}`);
    // await delay();
    console.log(`child page beforeMount ${Date.now()} finish in ${env}`);
  },
  async mounted() {
    // Non-Blocking (server、client)
    const env = process.client ? 'client' : 'server';
    console.log(`child page mounted ${Date.now()} start in ${env}`);
    // await delay();
    console.log(`child page mounted ${Date.now()} finish in ${env}`);
  },
};
</script>
