<template>
  <div class="navbar">
    <img
      :src="logo"
      alt="logo"
      style="height: 100px;"
    />
    <div style="display: flex; flex: 0.7; justify-content: space-around; align-items: center;">
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
      <img
        class="navbar-img"
        src=""
      />
    </div>
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-avatar 
          color="#fff"
          v-bind="props"
          style="cursor: pointer"
        >
          <img
            :src="imageUrl"
            style="object-fit: cover; width: 100%; height: 100%;"
          />
        </v-avatar>
      </template>
      <v-list>
        <div
          class="custom-menu-item"
          @click="onClickLogout"
        >
          Logout
      </div>
      <div class="custom-menu-item">
        <FileUploader />
      </div>
      </v-list>
    </v-menu>
  </div>
</template>

<script setup>
  import { navBarConstants } from '@/constants/constants';
  import router from '@/router';
  import logo from '@/assets/nutrinova-logo.webp';
  import { onMounted } from 'vue';
  import { getLogo } from '../api/user';
  import { ref } from 'vue';
  import FileUploader from './FileUploader.vue';

  const imageUrl = ref('');

  const onClickLogout = () => {
    localStorage.clear('user');
    localStorage.clear();
    router.push('/login');
  }

  onMounted(async() => {
    const logoUrl = await getLogo();
    imageUrl.value = logoUrl?.imageUrl;
  });

</script>
<style scoped lang="scss">
  .navbar {
    height: 80px;
    display: flex;
    justify-content: space-between;
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
      font-weight: 600;
      font-size: 16px;
      font-family: 'Roboto', sans-serif;
      cursor: pointer;
    }
    .login-btn:hover {
      transform: scale(1.2);
    }
  }
  .custom-menu-item {
    padding: 10px 20px;
    cursor: pointer;
  }
  .custom-menu-item:hover {
    background: linear-gradient(to right, #8560DB, #3A3873);
    color: #fff;
  }

</style>