<template>
    <div class="img-background-products">
        <img src="@/assets/background.jpg"  class="back-img">
        <div class="overlay-text">
            Enjoy shopping with us
        </div>
    </div>

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

export default {
  props: ['subcategoryName'],
  data() {
    return {
      products: [],
    };
  },
  created() {
    // Fetch data based on the subcategory name
    this.fetchProducts(this.subcategoryName);
  },
  methods: {
    fetchProducts(subcategoryName) {
      axios
        .get(`http://127.0.0.1:8000/api/productsname/${subcategoryName}`)
        .then((response) => {
          console.log("API Response:", response.data);
          this.products = response.data.data;
        })
        .catch((error) => {
          console.error("Error fetching data from API:", error);
        });
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
.product-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px; 
  margin-top: 50px;
  justify-content: center;
}
.product-card {
  flex: 0 1 calc(12.67% - 20px); /* Adjust the width of each card (3 cards per row) */
  padding: 10px;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 1px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
 align-items: center;
}
.product-image {
  max-width: 100%;
  /* height: auto; */
  height: 250px;
  border-radius: 4px;
}
.product-name {
  font-size: 16px;
  font-weight: bold;
  width: 264px;
}
.product-price {
  font-size: 16px;
  color: #888;
}
</style>
