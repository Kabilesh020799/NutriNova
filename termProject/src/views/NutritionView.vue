<template>
  <div class="nutrition">
    <h1 class="nutrition-heading">Tell us what you had today</h1>
    <div class="nutrition-details">
      <div
        v-for="meal in meals"
        :key="meal.key"
        class="nutrition-input"
      >
        <label class="nutrition-input-label">{{ meal.label }}</label>
        <input
          class="nutrition-input-field"
          type="text"
          placeholder="Enter meal name"
          :onkeypress="onAddMeals"
        />
    </div>
    </div>
    <div class="nutrition-list">
      <div
        v-for="(addedMeal, i) in addedMeals"
        class="nutrition-list-label"
      >
        {{ addedMeal }}
        <i class="fa-solid fa-xmark nutrition-list-label-icon" @click="onRemoveMeal(i)"></i>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        meals: [
          {
            key: 'lunch',
            label: 'Lunch',
          },
          {
            key: 'breakfast',
            label: 'Breakfast',
          },
          {
            key: 'dinner',
            label: 'Dinner',
          },
        ],
        addedMeals: [],
      }
    },
    methods: {
      onAddMeals(event) {
        console.log(this.addedMeals)
        if(event.key === 'Enter') {
          this.addedMeals.push(event.target.value);
        }
      },
      onRemoveMeal(index) {
        this.addedMeals = this.addedMeals.filter((meal, id) => id !== index);
      },
    }
  }
</script>

<style lang="scss" scoped>
  .nutrition {
    padding: 0 20px;

    &-heading {
      background-image: linear-gradient(to right, #8560DB, #3A3873);
      color: transparent;
      -webkit-background-clip: text;
      background-clip: text;
      font-family: 'Noto Sans', sans-serif;

    }
    &-details {
      display: flex;
      justify-content: center;
      gap: 2rem;
      margin-top: 2rem;

      .nutrition-input {
        display: flex;
        gap: .5rem;
        align-items: center;
        justify-content: center;
        font-family: 'Noto Sans', sans-serif;

        &-field {
          width: 200px;
          height: 40px;
          outline: none;
          font-size: 20px;
          border-radius: 4px;
          padding: 5px 15px;
        }

        &-field:focus {
          border: 2px solid #8560DB;
        }

        &-label {
          font-size: 20px;
          text-transform: capitalize;
          font-weight: 300;
          color: #404040;
          font-family: 'Noto Sans', sans-serif;
        }
      }
    }

    &-list {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: 2rem;

      &-label {
        background: #9c86cf;
        padding: 10px;
        border-radius: 8px;
        text-transform: capitalize;
        color: #fff;
        font-family: 'Noto Sans', sans-serif;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 5px;
        min-width: 50px;

        &-icon {
          cursor: pointer;
        }
      }
    }
  }
</style>