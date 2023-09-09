<template>
      <div class="card-container">
        <div  v-for="(subcategory) in subcategories" :key="subcategory.id">
          <div class="card">
            <img :src="subcategory.image" class="card-img-top" alt="Category Image">
            <div class="card-body">
              <p class="card-title">{{ subcategory.name }}</p>
            </div>
          </div>
        </div>
      </div>
</template>


<script>
import axios from "axios";

export default {
  data() {
    return {
      subcategories: [],
    };
  },
  
  mounted() {
    axios
      .get("http://127.0.0.1:8000/api/subcategories")
      .then((response) => {
        console.log("API Response:", response.data);
        this.subcategories = response.data.data; 
      })
      .catch((error) => {
        console.error("Error fetching data from API:", error);
      });
  },
}
</script>

<style scoped>
.card-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /* width: 100%; */
  justify-content: center;
  align-items: center;
  padding: 0 20vw;
  margin-top: 35px;
}

/* Individual card */
.card {
  margin-bottom: 20px;
  box-sizing: border-box;
  text-align: center;
  padding: 10px;
  align-items: center;
}

.card img {
  max-width: 100%;
  object-fit: cover;
  width: 350px;
  height: 350px;
  border-radius: 20px ;
}

.card-title {
  margin-top: 10px;
  font-size: 18px;
  text-align: start;
  font-weight: 600;
  color: black;
}
</style>
