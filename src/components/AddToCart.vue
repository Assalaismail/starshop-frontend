<template>
    <transition name="slide-in">
        <div class="filter-page" v-if="showCartPage">
            <div class="filter-x">
                <p class="filter-title">Shopping Cart</p>
                <div class="close-icon" @click="closeCart">
                    <i class="fas fa-times"></i>
                </div>
            </div>

            <div v-if="cart.length === 0">
                <p class="no-products-message">Your Cart is empty!</p>
            </div>

            <div class="panel-content">
                <div v-for="(item, index) in cart" :key="index" class="cart-item">
                    <img :src="item.image" alt="Cart Item Image" class="cart-image" />
                    <div class="name-size-color-qty">
                        <p class="cart-name">{{ item . name }}</p>
                        <p class="cart-size-color">
                            (<span>Size:</span> {{ item . size }}, <span>Color:</span> {{ item . color }})
                        </p>
                        <p class="cart-price">{{ item . quantity }} x ${{ item . price }}</p>
                    </div>

                    <div class="quantity-control">
                        <button @click="decrementQuantity(index)" class="minus-btn">-</button>
                        <input type="text" :value="item.quantity" @input="updateQuantity(index, $event)"
                            class="item-qty" />
                        <button @click="incrementQuantity(index)" class="plus-btn">+</button>
                    </div>
                    <button class="btn-remove-cart" @click="removeFromCart(index)">x</button>
                </div>

                <div class="div-subtotal">
                    <div class="subtotal">
                        <p class="subtotal-title">Sub Total:</p>
                        <p class="subtotal-price">${{ subtotal }}</p>
                    </div>

                    <div class="cart-buttons">
                        <button class="checkout" @click="closeCart">Checkout <i class="fa-solid fa-arrow-right"></i></button>

                        <router-link to="/cart">
                            <button class="view-cart" @click="closeCart">View Cart <i class="fa-solid fa-arrow-right"></i></button>
                        </router-link>
                    </div>

                </div>
              </div>
              <toast />
        </div>
    </transition>
</template>


<script>
    import "@fortawesome/fontawesome-free/css/all.css";
    import {
        toast
    } from 'vue3-toastify';

    export default {
        props: {
            showCartPage: Boolean,
        },

        data() {
            return {
                cart: [],
            };
        },

        computed: {
            subtotal() {
                return this.cart.reduce((total, item) => total + item.quantity * item.price, 0);
            },
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
      this.$emit('close-cart'); // Emit an event to notify the parent component
    },
            removeFromCart(index) {
                this.cart.splice(index, 1); // Remove the item from the cart array
                localStorage.setItem('cart', JSON.stringify(this.cart)); // Update local storage
                toast.success('Item removed from cart'); // Show a success toast
            },


            incrementQuantity(index) {
                const item = this.cart[index];
                if (item.quantity < item.maxQuantity) {
                    item.quantity++;
                } else {
                    toast.error('One or all products are not enough quantity so cannot update!');
                }
            },


            decrementQuantity(index) {
                // Decrease the quantity of the item in the cart, but not below 1
                if (this.cart[index].quantity > 1) {
                    this.cart[index].quantity--;
                }
            },

            updateQuantity(index, event) {
                // Update the quantity of the item in the cart when the input field changes, considering the maximum available quantity
                const newQuantity = parseInt(event.target.value);
                const item = this.cart[index];
                if (!isNaN(newQuantity) && newQuantity >= 1 && newQuantity <= item.maxQuantity) {
                    item.quantity = newQuantity;
                }
            },

        },
    };
</script>


<style scoped>
    .slide-in-enter-active,
    .slide-in-leave-active {
        transition: transform 0.3s;
    }

    .slide-in-enter,
    .slide-in-leave-to {
        transform: translateX(100%);
        /* Slide in from the right */
    }

    .filter-page {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        width: 400px;
        background-color: white;
        box-shadow: -4px 0 8px rgba(0, 0, 0, 0.2);
        /* Add shadow for a better visual effect */
        z-index: 1000;
        /* Ensure the filter page is above other content */
    }

    .filter-x {
        flex: 1 1 auto;
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

    .cart-image {
        width: 100px;
        height: 150px;
    }

    .cart-item {
        display: flex;
        gap: 20px;
    }

    .name-size-color-qty {
        width: 100px;
    }

    .cart-size-color span {
        font-weight: 600;
    }

    .quantity-control {
        border: none;
        display: flex;
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

    .btn-remove-cart {
        border: none;
        background: none;
        font-size: 18px;
        cursor: pointer;
    }

    .btn-remove-cart:hover {
        color: #7f9096
    }

    .div-subtotal {
        width: 90%;
        height: 20vh;
        padding: 20px;
        bottom: 0;
        position: absolute;

    }

    .subtotal {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .subtotal-title {
        font-size: 18px;
    }

    .subtotal-price {
        font-size: 18px;
    }

    .cart-buttons {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .checkout {
        background-color: #7f9096;
        height: 40px;
        border: none;
        color: white;
        font-size: 16px;
        cursor: pointer;
    }

    .view-cart {
        width: 100%;
        background-color: white;
        height: 40px;
        border: 1px solid #7f9096;
        color: #7f9096;
        font-size: 16px;
        cursor: pointer;
    }


    .view-cart:hover {
        background-color: #7f9096;
        color: white;
        cursor: pointer;

    }
</style>
