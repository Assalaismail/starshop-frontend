<template>
   <nav>
    <div class="navbartop">
      <div class="left-section">
        <ul class="nav-links-left">
          <li>
            <a href="#">
              <i class="fas fa-phone"></i>
              +961 123456
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fas fa-envelope"></i>
              star-shop@gmail.com
            </a>
          </li>
        </ul>
      </div>
      <div class="right-section">
        <ul class="nav-links-right">
          <li>
            <router-link to="/login">
          <i class="fas fa-sign-in-alt"></i>
          Login
        </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

    <nav>
      <div class="navbar">
        <div class="logo">
          <router-link to="/" class="logo-link">
           <img src="@/assets/logo-star.png" alt="Logo" class="logo-img"/>
          </router-link>
        </div>

        <ul class="nav-links">
      <li class="has-submenu" v-for="category in categories" :key="category.id">
        <router-link :to="`/${category.slug}`" class="a">
          {{ category.name }}
        </router-link>
      </li>
    </ul>

    <div class="cart-wish">
      <li class="cart-icon"><a href="#"><i class="fas fa-shopping-cart"></i></a></li>
      <li class="wishlist-icon"><a href="/wishlist"><i class="fas fa-heart"></i></a></li>
    </div>

    </div>
  </nav>
</template>

<script>
import "@fortawesome/fontawesome-free/css/all.css";
import axios from "axios";

export default {
  data() {
    return {
      categories: [],
    };
  },
  
  mounted() {
    axios
      .get("http://127.0.0.1:8000/api/category")
      .then((response) => {
        console.log("API Response:", response.data); // Log the entire API response data
        this.categories = response.data.data; // Extract the "data" array from the response
      })
      .catch((error) => {
        console.error("Error fetching data from API:", error);
      });
  },
}


</script>
  
  <style scoped>
  .navbar {
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0px;
  }
  
  .logo-img{
    width: 200px;
  }
  
  .nav-links {
    list-style: none;
    display: flex;
    position: relative;
  }
  
  .nav-links .a {
    text-decoration: none;
    padding-left: 200px;
    font-weight: 500;
    color: #737373;
  }

  .nav-links .a:hover{
    color: black;
  }

.nav-links .submenu {
  display: none;
  position: absolute;
  background-color: white; 
  padding: 10px;
  z-index: 1;
}

.nav-links .has-submenu:hover .submenu {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.submenu{
  list-style: none;
}

  .navbartop {
    color: grey;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: -35px;
  }

.left-section,
.right-section {
  display: flex;
  align-items: center;
}

.nav-links-left, .nav-links-right {
  list-style: none;
  display: flex;
  gap: 1rem;
}

.nav-links-left a, .nav-links-right a {
  text-decoration: none;
  color: grey;
}

.left-section {
  margin-left: 300px;
}

.right-section {
  margin-right: 300px;
}

.cart-icon{
  margin-left: 200px;
  
}
.wishlist-icon {
  margin-left: 30px;
}

.wishlist-icon .fas {
  color: black;
  
}
.cart-icon .fas{
  color: black;
}
.cart-wish{
  display:flex;
  flex-direction: row;
  padding-left: 0px;
}
.cart-wish li{
  list-style: none;
  
}

  </style>
  