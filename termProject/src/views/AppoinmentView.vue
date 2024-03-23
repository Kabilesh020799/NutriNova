<template>
  <div class="appointment">
    <h1 class="heading">Do you want to get reminded of your appointment?</h1>
    <div class="body">
      <span class="body-head">Add it here</span>
      <div style="display: flex; gap: 20px; align-items: center;">
        <input
          class="body-input"
          v-model="appointment"
        />
        <flat-pickr
          v-model="time"
          :config="config"
          placeholder="Select Time"
        />
        <button
          class="body-btn"
          @click="onClickSubmit"
        >
          Add
        </button>
      </div>
    </div>
    <div class="appointment-list">
      <h1>Your Appointment schedule</h1>
      <div class="appointment-heading">
        <span>Appointment</span>
        <span>Time</span>
      </div>
      <div class="appointment-item" v-for="appointmentItem in appointmentList">
        <span>{{ appointmentItem?.appointment }}</span>
        <span>{{ appointmentItem?.time }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import FlatPickr from 'vue-flatpickr-component';
  import 'flatpickr/dist/flatpickr.css';

  const time = ref(null);
  const appointmentList = ref([]);
  const appointment = ref('');

  const config = {
    enableTime: true,
    noCalendar: true,
    altInput: true,
    dateFormat: "H:i",
  };

  const onClickSubmit = () => {
    appointment.value.trim();
    appointmentList.value.push({
      appointment: appointment.value,
      time: time.value,
    });
    appointment.value = "";
  };

</script>

<style lang="scss" scoped>
.appointment {
  padding: 20px;

  .heading {
    text-align: center;
    margin-bottom: 30px;
  }

  .body {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    &-head {
      font-size: 20px;
      color: black;
      font-weight: bold;
    }
    &-input {
      width: 200px;
      height: 50px;
      border-radius: 8px;
      outline: none;
      padding-left: 20px;
      font-size: 16px;
    }
    &-btn {
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
    &-btn:hover {
      transform: scale(1.1);
    }
  }
  &-list {
    margin-top: 50px;
  }
  &-item {
    display: flex;
    width: 80%;
    justify-content: space-between;
    margin: 0 auto;
    margin-top: 20px;
    font-size: 16px;
    font-weight: 600;
    text-transform: capitalize;
  }
  &-heading {
    display: flex;
    width: 80%;
    justify-content: space-between;
    margin: 0 auto;
    font-size: 20px;
    font-weight: bold;
  }
}
</style>