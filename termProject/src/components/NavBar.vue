<template>
  <div class="navbar">
    <div class="navbar-item" v-for="(item, index) in navBAr"></div>
  </div>
</template>

<script setup>
import 

</script>
<style scoped lang="scss">
  .navbar {
    background-color: #20295e;
    width: 100vw;
    height: 80px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
</style>