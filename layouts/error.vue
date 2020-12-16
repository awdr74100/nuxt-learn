<template>
  <div>
    {{ error }}
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'errorLayout',
};
</script>
