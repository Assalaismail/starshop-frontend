<template>
  <transition name="slide-in">
    <div class="filter-page" v-if="showCartPage">
     <div class="filter-x">
      <p class="filter-title">Shopping Cart</p>

      <div class="close-icon" @click="closeCart">
        <i class="fas fa-times" ></i>
      </div>

     </div>

          <div v-if="cart.length === 0">
            <p class="no-products-message">Your Cart is empty!</p>
          </div>


          <div v-for="(item, index) in cart" :key="index" class="cart-item">
            <img :src="item.image" alt="Cart Item Image" class="cart-image" />
            <div class="name-size-color-qty">
               <p class="cart-name">{{ item.name }}</p>
               <p class="cart-size-color">(<span>Size:</span> {{ item.size }}, <span>Color:</span> {{ item.color }}) </p>
               <p class="cart-price"> {{item.quantity}} x ${{ item.price }}</p>
            </div>
            <button class="btn-remove-cart" @click="removeFromCart(index)">x</button>
          </div>
    </div>
  </transition>
</template>

<script>
  
import "@fortawesome/fontawesome-free/css/all.css";
import { toast } from 'vue3-toastify';

export default {
  props: {
    showCartPage: Boolean,
  },

  data() {
    return {
      cart: [],
      isCartOpen: true,
    };
  },

  created() {
    // Retrieve the cart data from local storage
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      this.cart = JSON.parse(storedCart);
    }
  },

  methods: {

    closeCart() {
      this.isCartOpen = false; // Set the cart to be closed
    },

    removeFromCart(index) {
      this.cart.splice(index, 1); // Remove the item from the cart array
      localStorage.setItem('cart', JSON.stringify(this.cart)); // Update local storage
      toast.success('Item removed from cart'); // Show a success toast
    },
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
  width: 400px; 
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

.cart-image{
  width: 100px;
  height: 150px;
}

.cart-item{
  display: flex;
  gap: 20px;
}

.name-size-color-qty{
  width: 100px;
}

.cart-size-color span{
  font-weight: 600;
}

.btn-remove-cart{
  border: none;
  background: none;
  font-size: 18px;
  cursor: pointer;
}

.btn-remove-cart:hover{
  color: #7f9096
}

</style>