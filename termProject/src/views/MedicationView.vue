<template>
  <div class="medication">
    <h1 class="heading">Do you want to get reminded of your medication?</h1>
    <div class="body">
      <span class="body-head">Add it here</span>
      <div style="display: flex; gap: 20px; align-items: center;">
        <input
          class="body-input"
          v-model="medication"
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
    <div class="medication-list">
      <h1>Your Medication schedule</h1>
      <div class="medication-heading">
        <span>Medication</span>
        <span>Time</span>
      </div>
      <div class="medication-item" v-for="medicationItem in medicationList">
        <span>{{ medicationItem?.medication }}</span>
        <span>
          {{ medicationItem?.time }}
          <button
            class="btn-reminder"
            @click="onClickRemind(medicationItem?.medication)"
          >Remind</button>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import FlatPickr from 'vue-flatpickr-component';
  import 'flatpickr/dist/flatpickr.css';
  import { getAllMedication, saveMedication } from '@/api/medication';
  import { sendReminder } from '@/api/user';

  const time = ref(null);
  const medicationList = ref([]);
  const medication = ref('');

  const config = {
    enableTime: true,
    noCalendar: true,
    altInput: true,
    dateFormat: "H:i",
  };

  const onClickSubmit = () => {
    medication.value.trim();
    if(saveMedication({
      medication: medication.value,
      time: time.value,
    })) {
      medicationList.value.push({
        medication: medication.value,
        time: time.value,
      });
      medication.value = "";
    } else {
      alert("There was some issue in adding! Please try again.")
    }
  };
  const onClickRemind = (message) => {
    sendReminder("It's time for " + message);
  }
  const onLoad = async() => {
    const res = await getAllMedication();
    medicationList.value.push(...res);
  }
  onLoad();
</script>

<style lang="scss" scoped>
.medication {
  padding: 20px;
  .btn-reminder {
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