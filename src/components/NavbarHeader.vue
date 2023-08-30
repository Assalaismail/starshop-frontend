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
            <router-link to="/register">
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
          <img src="@/assets/logo-star.png" alt="Logo" class="logo-img"/>
        </div>
        <ul class="nav-links">
          <!-- <li><a href="/" class="a">Home</a></li> -->

          <li class="has-submenu">
            <a href="/Clothes" class="a">Clothes</a>
            <!-- <ul class="submenu">
              <li><a href="/clothes" class="a">Clothes</a></li>
              <li><a href="/swimwear" class="a">Swimwear</a></li>
              <li><a href="/accessories" class="a">Accessories</a></li>
              <li><a href="/shoes" class="a">Shoes</a></li>
            </ul> -->
          </li>
              <li><a href="/Swimwear" class="a">Swimwear</a></li>
              <li><a href="/Accessories" class="a">Accessories</a></li>
              <li><a href="/shoes" class="a">Shoes</a></li>
        </ul>
          <div class="cart-wish">
          <li class="cart-icon"><a href="#"><i class="fas fa-shopping-cart"></i></a></li>
          <li class="wishlist-icon"><a href="#"><i class="fas fa-heart"></i></a></li>
        </div>
      </div>
    </nav>
  </template>

<script>
import "@fortawesome/fontawesome-free/css/all.css";

export default {
  // Component options
};
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
    font-weight: 700;
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

.nav-links-left,
.nav-links-right {
  list-style: none;
  display: flex;
  gap: 1rem;
}

.nav-links-left a,
.nav-links-right a {
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
  