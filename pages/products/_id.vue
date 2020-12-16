<template>
  <div>
    <pre>123</pre>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route);
  },
  async validate({ params, error }) {
    await new Promise((resolve) => setTimeout(() => resolve(), 1000));
    // if (parseInt(params.id, 10) >= 10) return false; // 404
    // if (parseInt(params.id, 10) >= 10) throw new Error('不允許'); // 500
    if (parseInt(params.id, 10) >= 10) return error({ statusCode: 401, message: '權限不足' });
    console.log(123);
    return true;
  },
  created() {
    console.log(process.client);
  },
};
</script>
