<template>
  <div class="login-container">
    <div class="login-container-left">
      <img :src="LoginGif" alt="Animated Gif" width="300px"/>
    </div>
    <div class="login-container-right">
      <div class="login-container-right-heading">Sign In to get your nutrients</div>
      <div class="login-container-right-input-wrapper">
        <div class="input-container" v-if="type === 'signup'">
          <label for="username" class="label">Username</label>
          <input type="text" class="input" name="username" v-model="name">
        </div>
        <div class="input-container">
          <label for="email" class="label">Email</label>
          <input type="email" class="input" name="email" v-model="email">
        </div>
        <div class="input-container">
          <label for="password" class="label">Password</label>
          <input type="password" class="input" name="password" v-model="password">
        </div>
      </div>
      <div class="login-container-right-submit-container">
        <div class="toc">
          <span class="text">Already have an account?</span>
          <span @click="onClickSignin">
            {{ route?.name !== 'Login' ? 'Login in' : 'Sign up' }}
          </span>
        </div>
        <button class="submit-btn" @click="onLogin">
          {{ route?.name === 'Login' ? 'Login in' : 'Sign up' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
  import router from '@/router';
  import LoginGif from '../assets/images/login_health.png';
  import { signup, login } from '@/api/user';
  import { ref } from 'vue';

  const {
    type,
  } = defineProps(['type' ]);

  const name = ref('');
  const email = ref('');
  const password = ref('');
  const route = router.currentRoute.value;

  const onClickSignin = () => {
    if(route?.name === 'Login') {
      router.push('/signup');
    } else {
      router.push('/login');
    }
  };

  const onLogin = async() => {
    if(route?.name === 'Login') {
      const res = await login({
        email: email.value,
        password: password.value, 
      });
      if(res) {
        if(res?.message === 'Login successful') {
          localStorage.setItem("user", email);
          router.push('/home');
        } else {
          alert("User and password doesn't match");
        }
      }
    } else {
      if(signup({
        name: name.value,
        email: email.value,
        password: password.value,
      })) {
        alert("Signed up successfully")
      }
    }
  };

</script>

<style lang="scss" scoped>
  .login-container {
    display: flex;

    &-left {
      background-image: url('../assets/images/bg-left.png');
      background-repeat: no-repeat;
      height: 100vh;
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &-right {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 12rem;
      margin-bottom: 10px;

      &-heading {
        color: #242424;
        text-align: center;
        font-family: "Zen Kaku Gothic Antique";
        font-size: 31.25px;
        font-style: normal;
        font-weight: 700;
        line-height: 37.5px;
        letter-spacing: -0.5px;
        width: 380px;
      }
      &-input-wrapper {
        display: flex;
        flex-direction: column;

        .input-container {
          display: flex;
          flex-direction: column;
          margin-top: 25px;

          .input {
            color: #212121;
            font-family: "Zen Kaku Gothic Antique";
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 28.16px;
            width: 380px;
            flex-shrink: 0;
            border: none;
            border-bottom: 1px solid #BDBDBD;
            outline: none;

            &:active, &:focus {
              border: none;
              outline: none;
              border-bottom: 1px solid #918EF4;
            }
          }
          .label {
            color: #757575;
            font-family: "Zen Kaku Gothic Antique";
            font-size: 12.8px;
            font-style: normal;
            font-weight: 400;
            line-height: 22.53px;
          }
        }
      }

      &-submit-container {
        display: flex;
        justify-content: space-between;
        margin-top: 25px;
        .toc {
          display: flex;
          align-items: center;
          .text {
            color: #757575;
            font-family: "Zen Kaku Gothic Antique";
            font-size: 10.24px;
            font-style: normal;
            font-weight: 400;
            line-height: 22.53px;
          }
        }
        .toc > span:nth-child(2) {
          color: #7B76F1;
          font-family: "Zen Kaku Gothic Antique";
          font-size: 10.24px;
          font-style: normal;
          font-weight: bolder;
          line-height: 22.53px;
          margin-left: 2px;
          text-decoration: underline;
          cursor: pointer;
        }
        .submit-btn {
          border-radius: 56px;
          background: #7B76F1;
          box-shadow: 0px 34px 40px -8px rgba(123, 118, 241, 0.24);
          width: 153px;
          height: 56px;
          outline: none;
          border: none;
          flex-shrink: 0;
          cursor: pointer;
          transition: transform 0.3s ease-in-out;
          margin-left: 62px;
          color: #fff;
          text-transform: uppercase;

          &:active {
            transform: scale(0.95);
          }
        }
      }
    }
  }
</style>