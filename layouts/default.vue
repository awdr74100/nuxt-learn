<template>
  <div class="container">
    <ul>
      <li><nuxt-link to="/">首頁</nuxt-link></li>
      <li><nuxt-link to="/about">關於</nuxt-link></li>
      <li><nuxt-link to="/products">商品列表</nuxt-link></li>
      <li><nuxt-link to="/products/10">指定商品</nuxt-link></li>
    </ul>
    <Nuxt />
  </div>
</template>

<script>
export default {
  validate() {
    console.log(333);
  },
};
</script>

<style lang="scss">
@import '~@/assets/scss/all.scss';
</style>
