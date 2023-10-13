<template>

  <transition name="slide-in">
    <div class="filter-page" v-if="showCartPage">
     <div class="filter-x">
      <p class="filter-title">Shopping Cart</p>

      <div class="close-icon">
        <i class="fas fa-times"></i>
      </div>

     </div>

     <div>
            <p  class="no-products-message">Your cart is empty!</p>
     </div>

       
    </div>
  </transition>
</template>

<script>
  
import "@fortawesome/fontawesome-free/css/all.css";


export default {
  props: {
    showCartPage: Boolean,
  },

  methods: {
   
  },
};
</script>


<style scoped>
  .slide-in-enter-active, .slide-in-leave-active {
    transition: transform 0.3s;
  }
  .slide-in-enter, .slide-in-leave-to {
    transform: translateX(100%); /* Slide in from the right */
  }
  .filter-page {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 400px; /* Adjust as needed */
    background-color: white;
    box-shadow: -4px 0 8px rgba(0, 0, 0, 0.2); /* Add shadow for a better visual effect */
    z-index: 1000; /* Ensure the filter page is above other content */
  }

  .filter-x {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #7f9096;
  height: 60px;
}

.filter-title {
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

</style>