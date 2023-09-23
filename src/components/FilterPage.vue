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

          <div class="by-price">
    <label>BY PRICE:</label>

    <div class="price-range">
      <input
        type="range"
        min="0"
        max="150" 
        step="1"
        v-model="selectedPriceRange"
        class="range"
      />
      <span>{{ selectedPriceRange }}</span>
    </div>

  </div>

        <div class="by-color">
          <label>
            BY COLOR:
          </label>
         <select v-model="selectedColorFilter" class="select-color">
          <option value="">-- Select --</option> 
          <option v-for="color in colors" :key="color.id" :value="color.title">
            {{ color.title }}
          </option>

         </select>
        </div>

        <div class="by-size">
          <label>
            BY SIZE:
          </label>
         <select v-model="selectedSizeFilter" class="select-size">
          <option value="">-- Select --</option> 
          <option v-for="size in sizes" :key="size.id" :value="size.title">
            {{ size.abbreviation }}
          </option>
         </select>
        </div>

        <div >
          <button @click="applyFilters" class="btn-apply-filter">Apply Filters</button>
        </div>

        </div>
      </div>
    </transition>
  </template>
  
  
  <script>
  import "@fortawesome/fontawesome-free/css/all.css";
  import axios from "axios";
  
  export default {
    props: {
      showFilterPage: Boolean,
    },
    data() {
      return {
        selectedPriceFilter: '',
        selectedColorFilter: '',
        selectedSizeFilter: '',
        colors: [],
        sizes: [],


        selectedPriceRange: 0,
      };
    },
  
    mounted() {
      // Use Promise.all to fetch data from both API endpoints concurrently
      Promise.all([
        axios.get("http://127.0.0.1:8000/api/attribute/1"),
        axios.get("http://127.0.0.1:8000/api/attribute/2"),
      ])
        .then(([colorResponse, sizeResponse]) => {
          console.log("API Response - Colors:", colorResponse.data);
          console.log("API Response - Sizes:", sizeResponse.data);
          this.colors = colorResponse.data.data;
          this.sizes = sizeResponse.data.data;
        })
        .catch((error) => {
          console.error("Error fetching data from API:", error);
        });
    },
  
    methods: {
      applyFilters() {
        // Emit an event to inform the parent component (your original component) about the selected filters
        this.$emit('apply-filters', {
          price: this.selectedPriceFilter,
          color: this.selectedColorFilter,
          size: this.selectedSizeFilter,
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

.filter-options{
  display: flex;
  flex-direction: column;
}

.range{
  width: 500px;
}
.price-range {
  display: flex;
  align-items: center;
}

.by-price , .by-color, .by-size{
display: flex;
flex-direction: column;
align-items: start;
gap: 20px;
margin-bottom: 20px;
padding: 10px;
border-bottom: 1px solid #737373;
}

.btn-apply-filter{
  background: none;
  padding: 10px;
  border-radius: 50px;
  background-color: white;
  color: #737373;
  border: 1px solid #737373;
  font-weight: 600;
}

.btn-apply-filter:hover{
  background: none;
  padding: 10px;
  border-radius: 50px;
  background-color: #737373;
  color: white;
  border: 1px solid #737373;
  font-weight: 600;
}

.select-color, .select-size{
  border: 1px solid #737373;
  border-radius: 5px;
  text-align: center;
  font-size: 16px;
 width: 120px;
 height: 56px;
}
  
  </style>
  