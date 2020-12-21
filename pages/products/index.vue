<template>
  <div>
    <h2>商品列表 子層</h2>
  </div>
</template>

<script>
import delay from '@/utils/delay';

export default {
  data() {
    return {
      title: 'ddd',
    };
  },
  async middleware() {
    await delay();
    console.log('middleware active');
  },
};
</script>
