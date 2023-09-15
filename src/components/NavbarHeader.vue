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

  <nav class="mobile-nav" v-if="isMobileView">
    <div class="logo-menu">
      <div class="logo">
        <router-link to="/" class="logo-link">
          <img src="@/assets/logo-star.png" alt="Logo" class="logo-img" />
        </router-link>
      </div>
      
      <div class="cart-wish">
        <li class="cart-icon"><a href="#"><i class="fas fa-shopping-cart"></i></a></li>
        <li class="wishlist-icon"><a href="/wishlist"><i class="fas fa-heart"></i></a></li>
      </div>

      <div class="burger-menu" @click="toggleMobileMenu">
        <i class="fa-solid fa-bars"></i>
      </div>

    </div>


  <ul class="nav-links mobile-menu" :class="{ 'mobile-menu-show': showMobileMenu }">

    <div class="title-x">
      <p class="menu-title">Menu</p>

      <div class="close-icon" @click="toggleMobileMenu" v-show="showMobileMenu">
         <i class="fas fa-times"></i>
      </div>

    </div>

    <div class="has-submenu-mobile">
        <li class="has-submenu" v-for="category in categories" :key="category.id">
          <div class="r-i">
             <a :to="`/${category.slug}`" class="a" @click="fetchSubcategories(category.name)">
                {{ category.name }} 
             </a>

             <i class="fa-solid fa-chevron-down"></i>
          </div>
        </li>  
    </div>


     <div>
      <p class="account">
        Account
      </p>
      <div class="two-buttons">
        <router-link to="/login" class="btn-log">LOGIN</router-link>
        <router-link to="/register" class="btn-reg">REGISTER</router-link>
      </div>
     </div>

     <div>
      <p class="account">
        Navigate our stores
      </p>
      <div class="countries">
        <p>Lebanon</p>
        <img src="../assets/lb-svg.png" class="lb-flag">
      </div>

      <div>
        <p>You are currently shopping in Lebanon, <br> and your order will be billed in USD.</p>
      </div>
     </div>

  </ul>

  </nav>
<!-- ------------------------------------------------------------------------------------------------------- -->
<nav class="desktop-nav" v-else>
    <div class="navbar">

      <div class="logo">
        <router-link to="/" class="logo-link">
          <img src="@/assets/logo-star.png" alt="Logo" class="logo-img" />
        </router-link>
      </div>

      
      <ul class="nav-links">
        <li class="has-submenu" v-for="category in categories" :key="category.id">
          <a @click="fetchSubcategories(category.name)" class="a">
              {{ category.name }}
          </a>
        </li>
      </ul>

      <div class="cart-wish">
        <li class="cart-icon"><a href="#"><i class="fas fa-shopping-cart"></i></a></li>
        <li class="wishlist-icon"><a href="/wishlist"><i class="fas fa-heart"></i></a></li>
      </div>

    </div>
  </nav>

  <!-- Display subcategories as a card -->
    <div class="subcategories-card" v-if="subcategories.length > 0">
      <div class="card">
        <ul class="card-ul">
          <a v-for="subcategory in subcategories" :key="subcategory.id" class="card-li">
            {{ subcategory.name }}
          </a>
        </ul>
      </div>
    </div>
<!------------------------------------------------------------------------------------------------->
</template>

<script>
import "@fortawesome/fontawesome-free/css/all.css";
import axios from "axios";

export default {
  data() {
    return {
      categories: [],
      subcategories: [],
      showMobileMenu: false,
    };
  },
  
  mounted() {
    axios
      .get("http://127.0.0.1:8000/api/category")
      .then((response) => {
        console.log("API Response:", response.data);
        this.categories = response.data.data;
      })
      .catch((error) => {
        console.error("Error fetching data from API:", error);
      });
  },

  methods: {
  toggleMobileMenu() {
    this.showMobileMenu = !this.showMobileMenu;
  },

  fetchSubcategories(categoryName) {
      axios
        .get(`http://127.0.0.1:8000/api/subcategoryname/${categoryName}`)
        .then((response) => {
          console.log("Subcategories:", response.data);
          this.subcategories = response.data.data;
        })
        .catch((error) => {
          console.error("Error fetching subcategories from API:", error);
        });
    },
},

  computed: {
    // Detect if the viewport is in mobile size (adjust the breakpoint as needed)
    isMobileView() {
      return window.innerWidth <= 768;
    },
  },
};
</script>
  
  <style scoped>
  .navbar {
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0px;
    cursor: pointer;
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

.left-section, .right-section {
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

/* Mobile menu styles */
.mobile-nav {
  display: none;
}

.mobile-nav .burger-menu {
  cursor: pointer;
  margin-right: 10px;
}

.mobile-menu-slide {
  transition: transform 0.3s ease-in-out;
  transform: translateX(-100%);
}

.mobile-menu-show {
  transform: translateX(0);
}

.mobile-menu {
  list-style: none;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: -100%; /* Hide the menu off-screen initially */
  width: 100%;
  height: 100%;
  background-color: white;
  transition: right 0.3s ease-in-out;
  z-index: 1000; /* Ensure the menu is above other content */
}

.mobile-menu-show {
  right: 0; /* Slide the menu into view when active */
}

.title-x {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #7f9096;
  height: 60px;
}

.menu-title {
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

.has-submenu-mobile{
  margin-top: 20px;
}

.r-i{
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  text-align: start;
  padding: 15px;
  color: black;

}
.account{
  text-align: start ;
  padding-left: 13px;
  font-weight: 700;
  margin-top: 25px;
}

.two-buttons{
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
}

.btn-log{
  background: none;
  padding: 10px;
  margin-left: 20px;
  background-color: #7f9096;
  border: none;
  color: white;
  width: 200px;
  border-radius: 3px;
  font-size: 13px;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,.8);
  text-decoration: none;
}

.btn-reg{
  background: none;
  padding: 10px;
  margin-right: 20px;
  background-color: white;
  border: none;
  color: black;
  width: 200px;
  border-radius: 3px;
  font-size: 13px;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,.8);
  text-decoration: none;
}

.countries{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 25px;
}

.lb-flag{
  width:20px;
  height: 20px;
  margin-right: 25px;
}

/* Center the subcategories using Flexbox */
.subcategories-card {
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  flex-wrap: wrap; /* Allow subcategories to wrap onto multiple rows */
  margin-top: 20px; /* Adjust as needed */
}

.card {
  background-color: white;
  padding: 10px;
  border-radius: 5px;
  position: absolute;
}

.card-ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
}

.card-li {
  margin: 5px; /* Adjust spacing between subcategories */
  padding: 5px 10px;
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  border-radius: 5px;
}


@media all and (max-width: 768px) {
  .navbartop{
    display: none;
  }
  .desktop-nav {
    display: none;
  }
  .mobile-nav {
    display: block;
  }
  .logo-menu{
    display: flex;
    flex-direction: row;
  }
  .nav-links{
   padding: 0px;
   margin-top: 0;
   margin-bottom: 0;
  }
  .burger-menu{
    margin-top: 30px;
    align-items: center;
    font-size: 18px;
    margin-left: 30px;
  }
  .cart-icon{
  margin-left: 50px;
  }
  .wishlist-icon {
  margin-left: 30px;
  }

  .cart-wish{
  margin-top: 30px;
  }
  
  .nav-links .a {
    text-decoration: none;
    padding-left: 0px;
    font-weight: 500;
    color: #737373;
    align-items: end;
  }

}
</style>
  