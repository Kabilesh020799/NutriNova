<template>
  <div class="login-container">
    <div class="login-container-left">
      <img :src="LoginGif" alt="Animated Gif" width="300px"/>
    </div>
    <div class="login-container-right">
      <div class="login-container-right-heading">Sign In to get your nutrients</div>
      <div class="login-container-right-input-wrapper">
        <div class="input-container">
          <label for="username" class="label">Username</label>
          <input type="text" class="input" name="username">
        </div>
        <div class="input-container">
          <label for="email" class="label">Email</label>
          <input type="email" class="input" name="email">
        </div>
        <div class="input-container">
          <label for="password" class="label">Password</label>
          <input type="password" class="input" name="password">
        </div>
      </div>
      <div class="login-container-right-submit-container">
        <div class="toc">
          <input type="checkbox" class="checkbox">
          <span class="text">I accept the terms & Condition</span>
        </div>
        <button class="submit-btn" @click="onLogin">
          Login in
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
  import router from '@/router';
  import LoginGif from '../assets/images/login_health.png';

  const {
    type,
  } = defineProps(['type' ]);

  const onLogin = () => {
    const data = {

    }
    fetch()
    router.push('/home');
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

          .checkbox {
            position: relative;
            width: 23px;
            height: 23px;
            cursor: pointer;

            &::before {
              content: '';
              position: absolute;
              top: 0.45px;
              left: 0.125px;
              width: 21.5243px;
              height: 22px;
              border-radius: 2px;
              background-color: #7B76F1;
              opacity: 0.0980392;
              border: 1px solid #7B76F1;
            }
            &::after {
              content: '';
              position: absolute;
              top: 50%;
              left: 50%;
              width: 9px;
              height: 0;
              border-top: 7px solid transparent;
              border-bottom: 7px solid transparent;
              border-left: 14px solid #7B76F1;
              transform: translate(-50%, -50%) scale(0);
              transition: transform 0.3s ease-in-out;
            }
          }
          .text {
            color: #757575;
            font-family: "Zen Kaku Gothic Antique";
            font-size: 10.24px;
            font-style: normal;
            font-weight: 400;
            line-height: 22.53px;
          }
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