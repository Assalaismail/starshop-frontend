<template>
  <div class="cart-div">
    <h1 class="cart">SHOPPING CART</h1>

    <div class="table-div">
      <table class="table-cart">
        <tr class="table-tr">
          <th class="table-th">Image</th>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>SubTotal</th>
          <th></th>
        </tr>

        <tr v-if="cart.length === 0">
          <td colspan="6" class="no-products-message">Your Cart is empty!</td>
        </tr>

        <tr v-for="(item, index) in cart" :key="index" class="table-tr">
          <td>
            <img :src="item.image" alt="Cart Item Image" class="cart-image" />
          </td>
          <td class="cart-name">
            {{ item.name }}
            <p class="cart-size-color">
              (<span>Size:</span> {{ item.size }}, <span>Color:</span>
              {{ item.color }})
            </p>
          </td>
          <td class="cart-price">${{ item.price }}</td>

          <td>
            <div class="quantity-control">
              <button @click="decrementQuantity(index)" class="minus-btn">
                -
              </button>
              <input
                type="text"
                :value="item.quantity"
                @input="updateQuantity(index, $event)"
                class="item-qty"
              />
              <button @click="incrementQuantity(index)" class="plus-btn">
                +
              </button>
            </div>
          </td>

          <td>
            <p>${{ item.quantity * item.price }}</p>
          </td>
          <td class="btn-trash" @click="removeFromCart(index)">
            <i class="fa-solid fa-trash-can"></i>
          </td>
        </tr>

        <tr class="sub-total">
          <td colspan="5">
            <h2>Sub total</h2>
          </td>
          <td>
            <h2>${{ subtotal }}</h2>
          </td>
        </tr>
      </table>

      <div class="checkout-div">
        <button class="btn-checkout" onclick="window.location.href='/checkout'">
          Checkout
        </button>
      </div>
    </div>

    <toast />
  </div>
</template>

<script>
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export default {
  data() {
    return {
      cart: [],
    };
  },

  created() {
    // Retrieve the wishlist data from local storage
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      this.cart = JSON.parse(storedCart);
    }
  },

  computed: {
    subtotal() {
      return this.cart.reduce(
        (total, item) => total + item.quantity * item.price,
        0
      );
    },
  },

  methods: {
    removeFromCart(index) {
      this.cart.splice(index, 1); // Remove the item from the wishlist array
      localStorage.setItem("cart", JSON.stringify(this.cart)); // Update local storage
      toast.success("Item removed from cart"); // Show a success toast
    },

    incrementQuantity(index) {
      const item = this.cart[index];
      if (item.quantity < item.maxQuantity) {
        item.quantity++;
        this.updateLocalStorage();
      } else {
        toast.error(
          "One or all products are not enough quantity so cannot update!"
        );
      }
    },

    decrementQuantity(index) {
      // Decrease the quantity of the item in the cart, but not below 1
      if (this.cart[index].quantity > 1) {
        this.cart[index].quantity--;
        this.updateLocalStorage();
      }
    },

    updateQuantity(index, event) {
      // Update the quantity of the item in the cart when the input field changes, considering the maximum available quantity
      const newQuantity = parseInt(event.target.value);
      const item = this.cart[index];
      if (
        !isNaN(newQuantity) &&
        newQuantity >= 1 &&
        newQuantity <= item.maxQuantity
      ) {
        item.quantity = newQuantity;
        this.updateLocalStorage();
      }
    },
    updateLocalStorage() {
      // Update the local storage with the updated cart data
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },
  },
};
</script>

<style scoped>
.cart-div {
  width: 60%;
  margin: 0 auto;
  padding: 20px;
}

h1.cart {
  font-size: 35px;
  margin-top: 50px;
  margin-bottom: 60px;
  padding-bottom: 20px;
}

.table-cart {
  width: 100%;
  border-collapse: collapse;
}

.table-tr {
  color: black;
}

.table-th {
  padding: 10px;
  text-align: left;
}

.table-cart tr {
  border-bottom: 1px solid lightgray;
}

.table-cart th {
  padding: 10px;
  margin-bottom: 10px;
  text-align: start;
  font-size: 20px;
  font-weight: 500;
}

.table-cart td {
  text-align: start;
  padding: 10px;
}

.cart-image {
  width: 70px;
  height: 90px;
}

.buttons-wishlist {
  text-align: center !important;
}

.cart-price,
.cart-name {
  font-weight: 400;
  font-size: 12px;
}

.btn-add-cart {
  border: none;
  background-color: white;
  border: 1px solid #888;
  color: #737373;
  text-transform: uppercase;
  padding: 10px;
  border-radius: 50px;
  width: 115px;
  cursor: pointer;
}

.btn-add-cart:hover,
.btn-remove-cart:hover {
  background-color: #737373;
  color: white;
}

.btn-remove-cart {
  border: none;
  background-color: white;
  border: 1px solid #888;
  color: #737373;
  text-transform: uppercase;
  padding: 10px;
  border-radius: 50px;
  width: 115px;
  cursor: pointer;
  margin-left: 15px;
}

.no-products-message {
  text-align: center !important;
  font-size: 18px;
  padding: 40px;
}

.cart-size-color {
  font-size: 12px;
}

.quantity-control {
  border: none;
}

.minus-btn {
  border: none;
  background: none;
  font-size: 27px;
  cursor: pointer;
}

.plus-btn {
  border: none;
  background: none;
  font-size: 22px;
  cursor: pointer;
}

.item-qty {
  border: none;
  font-size: 19px;
  text-align: center;
  width: 35px;
}

.btn-trash {
  cursor: pointer;
  color: black;
}

.checkout-div {
  display: flex;
  justify-content: end;
}
.btn-checkout {
  cursor: pointer;
  background-color: white;
  border: 1px solid #888;
  color: #737373;
  text-transform: uppercase;
  padding: 20px;
  border-radius: 50px;
  width: 150px;
  font-size: 16px;
  font-weight: 600;
  margin-top: 20px;
  text-decoration: none;
}

.btn-checkout:hover {
  background-color: #737373;
  color: white;
}

@media screen and (max-width: 768px) {

  h1.cart {
  font-size: 25px;
  margin-top: 50px;
  margin-bottom: 30px;
  padding-bottom: 20px;
}

}

</style>
