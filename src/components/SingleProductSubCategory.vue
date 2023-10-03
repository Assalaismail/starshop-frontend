<template>
  <div class="single-page">
    <div class="image-carousel">
      <div class="thumbnail-container">
        <div
          v-for="(product, productIndex) in products"
          :key="product.id"
         
          @click="showImage(productIndex)"
        >
          <img
            :src="JSON.parse(product.images)[0]"
            alt="Product Image"
            class="small-image"
          />
        </div>
      </div>
      <div class="big-image-container">
        <img
          :src="selectedImage"
          alt="Product Image"
          class="big-image"
        />
      </div>
    </div>

    <div class="column-2">

    <div class="name-status">
      <p class="firstName">
        {{ products.length > 0 ? products[0].name : 'No products available' }}
      </p>

      <div v-if="selectedColor && selectedSize">
        <p v-for="product in productsByColorAndSize(selectedColor, selectedSize)" :key="product.id" :class="{ 'text-green': product.stock_status === 'In Stock', 'text-red': product.stock_status === 'Out of Stock' }">
           ({{ product.stock_status }})
        </p>
      </div>

      <div v-else>
        <p class="default-instock">(In Stock)</p>
      </div>


    </div>

    <div class="sku-price">
    <p class="sku">
       SKU: {{ products.length > 0 ? products[0].sku : 'No products available' }}
    </p>

    <p class="single-price">
        ${{ products.length > 0 ? products[0].price : 'No products available' }}
    </p>

  </div>

    <p>Color</p>
      <select v-model="selectedColor" class="select-color">
        <option value="" disabled>Select color</option>
        <option v-for="color in uniqueColors" :key="color" :value="color">{{ color }}</option>
      </select>

      <p>Size</p>
      <select v-model="selectedSize" class="select-size">
        <option value="" disabled>Select size</option> 
        <option v-for="size in sizesByColor(selectedColor)" :key="size">{{ size }}</option>
      </select>


     


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
      selectedImage: null,
    };
  },

  created() {
    // Fetch data based on the subcategory name
    this.fetchProducts(this.parentName);
  },

  watch: {
    // Watch for changes in products and set the default selected image
    products: {
      handler(newProducts) {
        if (newProducts.length > 0) {
          const firstProductImages = JSON.parse(newProducts[0].images);
          this.selectedImage = firstProductImages[0];
        } else {
          this.selectedImage = null;
        }
      },
      deep: true,
      immediate: true,
    },
  },

  computed: {
    uniqueColors() {
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
          this.products = response.data.data[parentName];
        })
        .catch((error) => {
          console.error("Error fetching data from API:", error);
        });
    },

    sizesByColor(color) {
      const sizes = new Set();
      this.products.forEach((product) => {
        if (product.color === color) {
          sizes.add(product.size);
        }
      });
      return Array.from(sizes);
    },

    productsByColorAndSize(color, size) {
      return this.products.filter((product) => product.color === color && product.size === size);
    },

    showImage(productIndex) {
      const product = this.products[productIndex];
      const images = JSON.parse(product.images);
      this.selectedImage = images[0];
    },


  },
};
</script>

<style scoped>
.single-page {
  display: flex;
  justify-content: center;
  gap: 100px;
}

.single-image {
  width: 200px;
  height: 200px;
  margin-right: 20px; 
}

.column-2{
  display: flex;
  flex-direction: column;
  align-items: start;
  padding-left: 10px;
}


.firstName {
  font-size: 30px;
  text-transform: uppercase;
  text-align: start;
  width: 400px;
}

.name-status{
  border-bottom: 1px solid #737373;
}

.text-green {
  text-align: start;
  color: green;
}

.text-red {
  color: red;
  text-align: start;
}

.sku-price{
  text-align: start;
}

.single-price{
  font-weight: 900;
}

.default-instock {
  font-size: 16px;
  color: green;
  text-align: start;
}

.select-color,
.select-size {
  width: 120px;
  height: 56px;
  border: 1px solid #737373;
  border-radius: 5px;
  text-align: center;
  font-size: 16px;
  margin-bottom: 10px;
}

.image-carousel {
  display: flex;
  align-items: center;
}

.thumbnail-container {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 20px;
  gap: 10px;
}

.small-image {
  width: 80px;
  height: auto;
  cursor: pointer;
  transition: opacity 0.2s;
  opacity: 0.4;
}

.small-image:hover {
  opacity: 1;
}

.big-image-container {
  flex: 1;
  text-align: center;
}

.big-image {
  width: 400px;
}
</style>
