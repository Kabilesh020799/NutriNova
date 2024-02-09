<template>
  <div class="home">
    <div class="text-container">
      <div class="text-container-content">
        <h1 class="text-container-heading">
          <span>One Step Solution</span>
          <br />
          for all your health needs
        </h1>
      </div>
      <span class="text-container-subcontent">We track your health data and help you with maintaining health. </span>
    </div>
    <img
      :src="HomeDoctor"
      alt="Home Doctor"
      class="home-img"
    />
  </div>
</template>

<script setup>
  import HomeDoctor from '../assets/images/home-doctor.png';

</script>

<style lang="scss" scoped>
  .home {
    display: flex;
    justify-content: space-between;
    padding: 0 40px;
    
    .home-img {
      width: 600px;
      height: 600px;
    }
    .text-container {
      &-heading {
        font-weight: bolder;
        margin-top: 7rem;
        margin-bottom: 1rem;
        color: black;
        font-size: 60px;

        span {
          background-image: linear-gradient(to right, #8560DB, #3A3873);
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
        }
      }
      &-subcontent {
        color: #8A8585;
      }
    }
  }
</style>