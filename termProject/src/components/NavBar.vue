<template>
  <div class="navbar">
    <div
      :class="item.route === $route.path ? 'navbar-item active': 'navbar-item'"
      v-for="(item, index) in navBarConstants"
    >
      <router-link
        :to="item.route"
        custom
        v-slot="{ href, route, navigate, isActive, isExactActive }"
      >
        <NavLink
          :active="isActive"
          :href="href"
          @click="navigate"
        >
          {{ item.label }}
        </NavLink>
      </router-link>
    </div>
    <button
      class="login-btn"
    >
        Login in
    </button>
    <!-- <v-menu>
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
    </v-menu> -->
  </div>
</template>

<script setup>
  import { navBarConstants } from '@/constants/constants';

</script>
<style scoped lang="scss">
  .navbar {
    // background: linear-gradient(to right, #8560DB, #3A3873);
    height: 80px;
    display: flex;
    justify-content: end;
    align-items: center;
    font-family: 'Noto Sans', sans-serif;
    color: #404040;
    font-size: 13px;
    gap: 35px;
    margin-right: 20px;

    .navbar-item {
      cursor: pointer;
      border-bottom: 1.5px solid transparent;
      padding-bottom: 4px;
      font-weight: 600;
    }
    .navbar-item:hover {
      transform: scale(1.1);
      font-weight: bold;
      text-shadow: 0.5px 0.5px 1px #404040;
    }
    .active {
      border-bottom: 1.5px solid #8560DB;
      transition: border-bottom 0.3s ease-in-out;
    }
    .login-btn {
      background: linear-gradient(to right, #8560DB, #3A3873);
      padding: 8px 20px;
      outline: none;
      border: none;
      border-radius: 4px;
      color: #fff;
      font-weight: 600;
      font-size: 16px;
      font-family: 'Roboto', sans-serif;
      cursor: pointer;
    }
    .login-btn:hover {
      transform: scale(1.2);
    }
  }

  .custom-menu-item:hover.v-list-item{
    background: #8560DB !important;
    color: #fff;
    transition: none;
  }
</style>