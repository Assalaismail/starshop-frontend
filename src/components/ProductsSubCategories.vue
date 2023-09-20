<template>
    <div class="img-background-products">
        <img src="@/assets/background.jpg"  class="back-img">
        <div class="overlay-text">
            Enjoy shopping with us
        </div>
    </div>

    <div class="filter-sort-buttons">
        <button class="filter-products" @click="toggleFilterMenu" >Filter Products</button>
    </div>

    <!-- Add the FilterPage component here -->
  <filter-page :show-filter-page="showFilterMenu" @apply-filters="applyFilters"></filter-page>

    <div class="product-container">
      <div v-for="(product) in products" :key="product.id" class="product-card">
        <!-- Decode the JSON string to get an array of image URLs -->
        <img :src="JSON.parse(product.images)[0]" alt="Product Image" class="product-image">
        <p class="product-name">{{ product.name }}</p>
        <p class="product-price">${{ product.price }}</p>
      </div>
  </div>
</template>


<script>
import axios from "axios";
import FilterPage from '../components/FilterPage.vue'

export default {
  components: {
    FilterPage,
  },
  props: ['subcategoryName'],
  data() {
    return {
      products: [],
      showFilterMenu: false,

      // Add data properties for selected filters here
      selectedPriceFilter: '',
      selectedColorFilter: '',

    };
  },
  created() {
    // Fetch data based on the subcategory name
    this.fetchProducts(this.subcategoryName);
  },
  methods: {

    toggleFilterMenu() {
    this.showFilterMenu = !this.showFilterMenu;
  },

  fetchProducts(subcategoryName) {
  axios
    .get(`http://127.0.0.1:8000/api/productsname/${subcategoryName}`, {
      params: {
        price: this.selectedPriceFilter,
        color: this.selectedColorFilter,
      },
    })
    .then((response) => {
      console.log("API Response:", response.data);
      this.products = response.data.data;
    })
    .catch((error) => {
      console.error("Error fetching data from API:", error);
    });
},


     // Add a method to handle filter application
     applyFilters(filters) {
      this.selectedPriceFilter = filters.price;
      this.selectedColorFilter = filters.color;
      this.fetchProducts(this.subcategoryName);
      this.showFilterMenu = false; // Close the filter page
    },

  },
};
</script>

<style scoped>
.img-background-products {
    position: relative;
    margin-top: 30px;
}

.img-background-products img{
    object-fit: cover ;
    max-width: 100%;
}
.overlay-text {
    position: absolute;
    text-transform: uppercase;
    top: 50%; /* Adjust the top value to position the text vertically */
    left: 50%; /* Adjust the left value to position the text horizontally */
    transform: translate(-50%, -50%);
    padding: 10px; /* Adjust padding as needed */
    color: white;
    font-size: 53px; 
    font-weight: 600;
}

.filter-sort-buttons{
    display: flex;
    flex-direction: row;
    margin-top: 30px;
    margin-left: 30px;
}

.filter-products{
    align-items: start;
    border: none;
    background-color: white;
    border: 1px solid #888;
    color: #737373;
    text-transform: uppercase;
    padding: 20px;
    border-radius: 50px;
    width: 250px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
}

.filter-products:hover{
background-color: #737373;
color: white;
}
.product-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px; 
  margin-top: 50px;
  justify-content: center;
}
.product-card {
  flex: 0 1 calc(12.67% - 20px); /* Adjust the width of each card (6 cards per row) */
  padding: 10px;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 1px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.product-card:hover {


}
.product-image {
  max-width: 100%;
  height: 250px;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.product-image:hover{
    opacity: 0.6;
}

.product-name {
  font-size: 16px;
  font-weight: bold;
  width: 264px;
}

.product-price {
  font-size: 16px;
  color: #737373;
}
</style>
