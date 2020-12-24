<template>
  <div>
    <h1>錯誤</h1>
    <pre>{{ error }}</pre>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'errorLayout',
};
</script>
