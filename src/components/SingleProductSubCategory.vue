<template>
    <h1>hello</h1>

<div>
    <div  v-for="(product) in single" :key="product.id">
        <!-- <img :src="JSON.parse(product.images)[0]" alt="Product Image" class="product-image"> -->
     <p> ${{ product.name }}</p>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default{
    props: ['parentName'],

    data(){
        return{
          single: [],
        };
    },

    created() {
    // Fetch data based on the subcategory name
    this.fetchProducts(this.parentName);
  },

    methods: {
        fetchProducts(parentName) {
      axios
        .get(`http://127.0.0.1:8000/api/childs/${parentName}`)
        .then((response) => {
          console.log("API Response:", response.data);
          this.single = response.data.data;
        })
        .catch((error) => {
          console.error("Error fetching data from API:", error);
        });
    },
    },
};



</script>

<style scoped>
</style>

