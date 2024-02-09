<template>
  <div class="navbar">
    <div class="navbar-item" v-for="(item, index) in navBarConstants">{{ item.label }}</div>
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-avatar 
          color="#fff"
          v-bind="props"
          style="cursor: pointer;"
        >
          <span>KR</span>
        </v-avatar>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in navBarConstants"
          :key="index"
          :value="index"
          class="custom-menu-item"
        >
          <v-list-item-title>{{ item.label }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
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
  .custom-menu-item:hover.v-list-item{
    background: #8560DB !important;
    color: #fff;
    transition: none;
  }
</style>