<template>
    <transition name="slide-in">
      <div class="filter-page" v-if="showFilterPage">


    <div class="filter-x">
      <p class="filter-title">Filter Products</p>

      <div class="close-icon" @click="applyFilters" >
        <i class="fas fa-times"></i>
      </div>
    </div>

        <!-- Filter options go here -->
        <div class="filter-options">
          <label>
            Filter by Price:
            <select v-model="selectedPriceFilter">
              <option value="">All</option>
              <option value="low_to_high">Low to High</option>
              <option value="high_to_low">High to Low</option>
            </select>
          </label>
          <label>
            Filter by Color:
            <select v-model="selectedColorFilter">
              <option value="">All</option>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <!-- Add more color options as needed -->
            </select>
          </label>
          <button @click="applyFilters">Apply Filters</button>
        </div>
      </div>
    </transition>
  </template>
  
  
  <script>
import "@fortawesome/fontawesome-free/css/all.css";

  export default {
    props: {
      showFilterPage: Boolean,
    },
    data() {
      return {
        selectedPriceFilter: '',
        selectedColorFilter: '',
      };
    },
    methods: {
      applyFilters() {
        // Emit an event to inform the parent component (your original component) about the selected filters
        this.$emit('apply-filters', {
          price: this.selectedPriceFilter,
          color: this.selectedColorFilter,
        });
      },
    },
  };
  </script>
  
  <style scoped>


  .slide-in-enter-active, .slide-in-leave-active {
    transition: transform 0.3s;
  }
  .slide-in-enter, .slide-in-leave-to {
    transform: translateX(100%); /* Slide in from the right */
  }
  
  .filter-page {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 400px; /* Adjust as needed */
    background-color: white;
   
    box-shadow: -4px 0 8px rgba(0, 0, 0, 0.2); /* Add shadow for a better visual effect */
    z-index: 1000; /* Ensure the filter page is above other content */
  }

  .filter-x {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #7f9096;
  height: 60px;
}

.filter-title {
  margin: 0;
  padding: 10px;
  font-size: 20px;
  color: white;
}
.close-icon {
  cursor: pointer;
  padding: 10px;
  color: white;
  font-size: 18px;
}

  
  /* Rest of your styling for filter options */
  </style>
  