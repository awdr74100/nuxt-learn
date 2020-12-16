<template>
  <div>
    <pre>{{ error }}</pre>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'errorLayout',
};
</script>
