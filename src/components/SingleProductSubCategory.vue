<template>
  <div class="single-page">

  <div class="color-size">
    <p class="firstName">{{ products.length > 0 ? products[0].name : 'No products available' }}</p>

    <div v-if="selectedColor && selectedSize">
      <p v-for="product in productsByColorAndSize(selectedColor, selectedSize)" :key="product.id">
        ({{ product.stock_status }})
      </p>
    </div>

    <div v-else>
      <p class="default-instock">(In Stock)</p>
    </div>


    <select v-model="selectedColor" class="select-color">
      <option value="" disabled>Select color</option>
      <option v-for="color in uniqueColors" :key="color" :value="color">{{ color }}</option>
    </select>
    
    <select v-model="selectedSize" class="select-size">
      <option value="">Select size</option> 
      <option v-for="size in sizesByColor(selectedColor)" :key="size">{{ size }}</option>
    </select>

  </div>


    <div v-if="selectedColor">
      <div v-for="product in productsByColor(selectedColor)" :key="product.id">
        <div v-for="(image, index) in JSON.parse(product.images)" :key="index">
          <img :src="image" alt="Product Image" class="single-image">
        </div>
      </div>
    </div>

    <div v-else>
      
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ['parentName'],

  data() {
    return {
      products: [],
      selectedColor: "", // To store the selected color
      selectedSize: "", // To store the selected size
    };
  },

  created() {
    // Fetch data based on the subcategory name
    this.fetchProducts(this.parentName);
  },

  computed: {
    uniqueColors() {
      // Use a Set to get unique colors
      const colorSet = new Set();
      this.products.forEach((product) => {
        colorSet.add(product.color);
      });
      return Array.from(colorSet);
    },
  },

  methods: {
    fetchProducts(parentName) {
      axios
        .get(`http://127.0.0.1:8000/api/childs/${parentName}`)
        .then((response) => {
          console.log("API Response:", response.data);
          // Access the products array within the parentName object
          this.products = response.data.data[parentName];
        })
        .catch((error) => {
          console.error("Error fetching data from API:", error);
        });
    },

    sizesByColor(color) {
      // Filter products by color and get unique sizes
      const sizes = new Set();
      this.products.forEach((product) => {
        if (product.color === color) {
          sizes.add(product.size);
        }
      });
      return Array.from(sizes);
    },

    productsByColor(color) {
      // Filter products by color and size
      return this.products.filter((product) => product.color === color);
    },

    productsByColorAndSize(color, size) {
      // Filter products by color and size
      return this.products.filter((product) => product.color === color && product.size === size);
    },

    
  },
};
</script>


<style scoped>
.single-page {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Two columns: images and text */
  grid-gap: 20px;
  justify-content: center;
}

/* Left side (images) */
.single-image {
 width: 200px;
 height: 200px;
}

/* Right side (text) */
.color-size {
  display: grid;
  grid-template-columns: 1fr; /* One column for text */
  grid-gap: 10px; /* Adjust the gap as needed */
}
.firstName{
  
}
.default-instock {
  font-weight: bold;
  font-size: 20px;
  color: green;
}

.select-color , .select-size {
  width: 120px;
  height: 56px;
  border: 1px solid #737373;
  border-radius: 5px;
  text-align: center;
  font-size: 16px;
}


</style>

