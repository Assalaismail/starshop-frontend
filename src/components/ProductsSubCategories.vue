<template>
    <div class="img-background-products">
        <img src="@/assets/background.jpg"  class="back-img">
        <div class="overlay-text">
            Enjoy shopping with us
        </div>
    </div>

    <div class="filter-sort-buttons">
        <button class="filter-products" @click="toggleFilterMenu" >Filter Products</button>

      <div class="search-icon">
        <input type="text" v-model="searchValue" placeholder="Search" id="search-input" @input="filterProducts" class="search"/>
        <i class="fa fa-search"></i>
      </div>

    </div>

   
    <!-- Add the FilterPage component here -->
    <filter-page :show-filter-page="showFilterMenu" @apply-filters="applyFilters" @sort-products="sortProducts"></filter-page>


    <div class="product-container">
      <div v-for="(product) in filteredProducts" :key="product.id" class="product-card" @click="navigateToSubcategory(product.name)">
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
      selectedPriceFilter: { min: 0, max: 150 }, // Initialize with default values
      selectedColorFilter: '',

      // Add a property for the filtered products
      filteredProducts: [],
      //search
      searchValue: '',
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

     // Add a method to handle input in the search bar and filter products
    filterProducts() {
      this.filteredProducts = this.products.filter((product) => {
        // Filter by product name (case-insensitive)
        return product.name.toLowerCase().includes(this.searchValue.toLowerCase());
      });
    },

    sortProducts(sortBy) {
    this.sortBy = sortBy;
    // Apply sorting logic based on the selected option (this assumes you have a products array)
    if (sortBy === 'min-to-max') {
      this.filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'max-to-min') {
      this.filteredProducts.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'a-to-z') {
      this.filteredProducts.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });
    }else if (sortBy === 'z-to-a') {
    this.filteredProducts.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (nameA < nameB) return 1;
      if (nameA > nameB) return -1;
      return 0;
    });
    }else {
      // Default sorting or any other sorting logic you need
    }
    this.showFilterMenu = false; // Close the filter page
  },
  
    fetchProducts(subcategoryName) {
      axios
        .get(`http://127.0.0.1:8000/api/productsname/${subcategoryName}`, {
          params: {
            price_min: this.selectedPriceFilter.min,
            price_max: this.selectedPriceFilter.max,
            color: this.selectedColorFilter,
          },
        })
        .then((response) => {
          console.log("API Response:", response.data);
          this.products = response.data.data;
          // Initially, set the filteredProducts to be the same as products
          this.filteredProducts = this.products;
        })
        .catch((error) => {
          console.error("Error fetching data from API:", error);
        });
    },

    // Add a method to handle filter application
    applyFilters(filters) {
      this.selectedPriceFilter = filters.price;
      this.selectedColorFilter = filters.color;

      // Apply filters to update the filteredProducts array
      this.filteredProducts = this.products.filter((product) => {
        const price = product.price;

        // Check if the product matches the selected price range
        const priceInRange =
          price >= this.selectedPriceFilter.min && price <= this.selectedPriceFilter.max;

        // Check if the product matches the selected color filter
        const colorMatches =
          !this.selectedColorFilter || product.color === this.selectedColorFilter;
        return priceInRange && colorMatches;
      });
      this.showFilterMenu = false; // Close the filter page
    },

    navigateToSubcategory(parentName) {
      this.$router.push({ name: 'product', params: { parentName } });
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
.filter-sort-buttons {
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  margin-left: 30px;
  align-items: center; /* Vertically center-align the items */
  justify-content: space-between;
}

.filter-products{
  align-items: start;
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

.search-icon{
  margin-right: 30px;
}
.search {
  border: none;
  border-bottom: 1px solid #737373;
  padding: 10px;
  height: fit-content;
  outline: none;
  width: 200px;
}

.search:focus {
  border-bottom: 1px solid black;
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
  box-shadow: 0 4px 8px 1px rgba(0,0,0,0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.product-image {
  max-width: 100%;
  height: 250px;
  border-radius: 4px;
  transition: background-color 0.3s ease;
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

@media screen and (max-width: 768px) {
.overlay-text {
  padding: 10px; /* Adjust padding as needed */
  font-size: 14px; 
  font-weight: 600;
}
.filter-sort-buttons{
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  margin-left: 10px;
}
.filter-products{
  width: 120px;
  font-size: 14px;
  font-weight: 400;
  height: 35px;
  padding: 0px;
}

.search {
  width: 100px;
}

.search-icon{
  margin-right: 10px;
}

}


</style>
