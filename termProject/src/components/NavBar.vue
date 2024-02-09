<template>
  <div class="navbar">
    <div class="navbar-item" v-for="(item, index) in navBarConstants">{{ item.label }}</div>
    <v-avatar color="#fff">
      <span>KR</span>
    </v-avatar>
  </div>
</template>

<script setup>
  import { navBarConstants } from '@/constants/constants';

</script>
<style scoped lang="scss">
  .navbar {
    background: linear-gradient(to right, #8560DB, #3A3873);
    width: 100vw;
    height: 80px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-family: 'Noto Sans', sans-serif;
    color: #fff;
    font-weight: bold;
    font-size: 20px;
  }
</style>