<template>
    <div class="checkout-page">
        <div class="two-columns">
            <div class="first-column">
                <form>
                    <router-link to="/" class="logo-link">
                        <img src="@/assets/logo-star.png" alt="Logo" class="logo-img" />
                    </router-link>

                    <hr class="hr" />
                    <div class="shipping-address-div">
                        <p class="Shipping-information">Shipping information</p>
                        <p class="add-title">Select available addresses:</p>

                        <select class="add-new-address" @change="toggleInputsAddress">
                            <option value="" selected>Select an address:</option>
                            <option value="new">Add new address:</option>
                        </select>

                        <div class="div-inputsAddress" id="new-address-form" v-show="inputsAddressVisible">
                            <input type="text" id="name" placeholder="Full Name" class="input-full-name" />

                            <div class="input-container">
                                <input type="text" id="email" placeholder="Email" class="input-email" />
                                <input type="text" id="phone" placeholder="Phone" class="input-phone" />
                            </div>

                            <select v-model="selectedCountry" @change="fetchStates" class="add-new-address">
                                <option value="" disabled>Choose your country</option>
                                <option v-for="country in countries" :key="country.id" :value="country.id">
                                    {{ country . name }}
                                </option>
                            </select>

                            <div class="input-container">
                                <select v-model="selectedState" class="input-email">
                                    <option value="" disabled selected>Choose your state</option>
                                    <option v-for="state in states" :key="state.id" :value="state.name">
                                        {{ state . name }}
                                    </option>
                                </select>
                                <input type="text" id="city" placeholder="City" class="input-phone" />
                            </div>
                            <input type="text" id="address" placeholder="Address" class="input-full-name" />
                        </div>
                    </div>

                    <div class="shipping-address-div">
                        <p class="Shipping-method">Shipping method</p>
                        <div class="payment-checkout-form">
                            <input type="hidden" name="shipping_option" value="1" />
                            <ul class="shipping-method-ul">
                                <li class="shipping-method-li" v-if="selectedState === 'Beirut Governorate'">
                                    <input type="radio" name="shipping_method" id="shipping-method-1" value="Inside Beirut"
                                        v-model="selectedShippingMethod" @change="updateSubtotal"
                                        :checked="true" />
                                    <label for="shipping-method-1">Inside Beirut - $3.00</label>
                                </li>

                                <li class="shipping-method-li" v-if="selectedState === 'Beirut Governorate'">
                                    <input type="radio" name="shipping_method" id="shipping-method-2" value="Same day delivery"
                                        v-model="selectedShippingMethod" @change="updateSubtotal" />
                                    <label for="shipping-method-2">Same day delivery (Beirut) - $6.00</label>
                                </li>

                                <li class="shipping-method-li-outside" v-else>
                                    <input type="radio" name="shipping_method" id="shipping-method-3" value="Outside Beirut"
                                        v-model="selectedShippingMethod" @change="updateSubtotal"
                                        :checked="true" />
                                    <label for="shipping-method-3">Outside Beirut - $3.00</label>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="shipping-address-div">
                        <p class="Shipping-method">Payment method</p>
                        <div class="payment-checkout-form">
                            <input type="hidden" name="shipping_option" value="1" />
                            <ul class="shipping-method-ul" aria-required="true">
                                <li class="shipping-method-li">
                                    <input type="radio" name="pay_method" id="pay-method-1" value="stripe"
                                        data-option="0" />
                                    <label for="pay-method-1"> Pay online via Stripe </label>
                                </li>

                                <li class="shipping-method-li">
                                    <input type="radio" name="pay_method" id="pay-method-2" value="cod"
                                        data-option="1" />
                                    <label for="pay-method-2"> Cash on delivery (COD) </label>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="shipping-address-div">
                        <p class="note">Note</p>
                        <textarea type="text" id="note" name="note" class="note-message"
                            placeholder="Note..." />
                    </div>

                    <div class="final-checkout">
                        <a href="/cart" class="back-to-cart"><i class="fa-solid fa-arrow-left"></i> Back to
                            cart</a>
                        <button class="btn-finalcheckout">Checkout</button>
                    </div>
                </form>
            </div>

            <div class="second-column">
                <p class="product">Product(s):</p>
                <!-- ----------------------------------------------------------------- -->
                <div class="panel-content">
                    <div v-for="(item, index) in cart" :key="index" class="checkout-item">
                        <div style="position: relative;">
                            <img :src="item.image" alt="Checkout Item Image" class="checkout-image" />
                            <span class="quantity-badge">{{ item . quantity }}</span>
                        </div>

                        <div class="name-size-color-qty">
                            <p class="checkout-name">{{ item . name }}</p>
                            <p class="checkout-size-color">
                                (<span>Size:</span> {{ item . size }}, <span>Color:</span> {{ item . color }})
                            </p>
                        </div>
                        <p class="checkout-price">${{ item . price }}</p>
                    </div>



                    <div class="div-subtotal">
                        <div class="subtotal">
                            <div class="subtotal1">
                                <p class="subtotal-title">Sub Total:</p>
                                <p class="subtotal-price">${{ subtotal }}</p>
                            </div>

                            <div class="subtotal1" v-if="couponcodediv">
                                <p class="subtotal-title">Coupon Code:</p>
                                <p class="subtotal-price">{{ coupon }}</p>
                            </div>

                            <div class="subtotal1" v-if="couponcodediv">
                                <p class="subtotal-title">Coupon code discount amount:</p>
                                <p class="subtotal-price">{{ discountcoupon }}</p>
                            </div>

                            <div class="subtotal1">
                                <p class="subtotal-title">Shipping fee:</p>
                                <p class="subtotal-price">${{ shippingfee }}</p>
                            </div>

                            <div class="subtotal1">
                                <p class="subtotal-title">Total:</p>
                                <h3 class="total-price">${{ updatedTotal }}</h3>
                            </div>
                        </div>
                    </div>

                    <div v-if="divcouponcode" class="cc-div1">
                        <button class="coupon-code" @click="toggleCouponField">
                            You have a coupon code?
                        </button>
                        <div :class="{ hidden: !couponFieldVisible }">
                            <div class="cc-div">
                                <input type="text" ref="couponInput" placeholder="Enter coupon code"
                                    class="input-coupon-code" />
                                <button @click="applyCoupon" id="apply-button" class="button-coupon-code">
                                    <i class="fa-solid fa-gift"></i>
                                    Apply
                                </button>

                            </div>
                            <p v-if="invalidCouponCode" class="invalid">Invalid or expired coupon code !</p>
                        </div>
                    </div>

                    <div v-if="divcouponcodeafterapplying">
                        <div>
                            <div class="cc-div-remove">
                                <p class="display-couponcode">Coupon code: {{ coupon }}</p>
                                <button id="remove-button" class="remove-coupon-code" @click="removeCoupon">
                                    <i class="fa-solid fa-trash"></i>
                                    Remove
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- ----------------------------------------------------------------- -->
            </div>
        </div>
    </div>
</template>

<script>
    import "@fortawesome/fontawesome-free/css/all.css";
    import axios from "axios";

    export default {
        data() {
            return {
                countries: [],
                selectedCountry: "",
                states: [],
                selectedState: "",
                cart: [],
                inputsAddressVisible: false,
                insideOrOutsideVisible: false,

                selectedShippingMethod: "Outside Beirut",

                coupon: "",
                divcouponcode: true,
                divcouponcodeafterapplying: false,
                couponFieldVisible: false,
                invalidCouponCode: false,
                couponcodediv: false,
                totalWithCoupon: 0,
            };
        },

        mounted() {
            axios
                .get("http://127.0.0.1:8000/api/countries")
                .then((response) => {
                    console.log("API Response:", response.data);
                    this.countries = response.data.data;
                })
                .catch((error) => {
                    console.error("Error fetching data from API:", error);
                });
        },

        computed: {
            subtotal() {
                return this.cart.reduce(
                    (total, item) => total + item.quantity * item.price,
                    0
                );
            },

            shippingfee() {
                let shippingCost = 0;
                if (
                    this.selectedShippingMethod === "Inside Beirut" ||
                    this.selectedShippingMethod === "Outside Beirut"
                ) {
                    shippingCost = 3.0;
                } else if (this.selectedShippingMethod === "Same day delivery") {
                    shippingCost = 6.0;
                }
                return this.cart.reduce((total) => total, 0) + shippingCost;
            },

            total() {
                let shippingCost = 0;
                if (
                    this.selectedShippingMethod === "Inside Beirut" ||
                    this.selectedShippingMethod === "Outside Beirut"
                ) {
                    shippingCost = 3.0;
                } else if (this.selectedShippingMethod === "Same day delivery") {
                    shippingCost = 6.0;
                }
                return (
                    this.cart.reduce(
                        (total, item) => total + item.quantity * item.price,
                        0
                    ) + shippingCost
                );
            },

            // Update the total to consider the coupon discount
            updatedTotal() {
                return this.totalWithCoupon > 0 ? this.totalWithCoupon : this.total;
            }
        },

        created() {
            // Retrieve the cart data from local storage
            const storedCart = localStorage.getItem("cart");
            if (storedCart) {
                this.cart = JSON.parse(storedCart);
            }
        },

        methods: {
            fetchStates() {
                if (this.selectedCountry) {
                    axios
                        .get(`http://127.0.0.1:8000/api/states/${this.selectedCountry}`)
                        .then((response) => {
                            this.states = response.data.data;
                        })
                        .catch((error) => {
                            console.error("Error fetching states from API:", error);
                        });
                } else {
                    // If no country is selected, clear the states
                    this.states = [];
                }
            },

            toggleCouponField() {
                this.couponFieldVisible = !this.couponFieldVisible;
            },

            toggleInputsAddress() {
                this.inputsAddressVisible = event.target.value === "new";
            },

            updateSubtotal() {
                // Recalculate the subtotal when the shipping method changes
                this.$forceUpdate(); // Force a re-render
            },

            async applyCoupon() {
                const couponCode = this.$refs.couponInput.value; // Get the coupon code from input

                try {
                    const response = await axios.get(
                        `http://127.0.0.1:8000/api/codes/${couponCode}`
                    );

                    if (response.status === 200) {
                        this.coupon = couponCode;

                        // Check if the API response contains the discount value
                        if (response.data && response.data.data.value) {
                            const discountPercentage = response.data.data.value;

                            // const discount = Math.round(this.subtotal * (discountPercentage / 100));
                            const discount = parseFloat((this.subtotal * (discountPercentage / 100)).toFixed(2));


                            const newTotal = this.total - discount;

                            console.log("Discount applied:", discount);
                            console.log("New total after discount:", newTotal);

                            // Set the applied coupon code to update the display
                            this.coupon = couponCode;
                            this.discountcoupon = discount;
                            this.totalWithCoupon = this.total - discount;
                            this.couponcodediv = true;
                            this.divcouponcode = false;
                            this.divcouponcodeafterapplying = true;

                        } else {
                            this.invalidCouponCode = true;
                        }
                    } else {
                        this.invalidCouponCode = true;

                    }
                } catch (error) {
                    console.error("Error checking coupon:", error);
                    this.invalidCouponCode = true;
                }
            },

            removeCoupon() {
                this.coupon = "";
                this.discountcoupon = 0;
                this.totalWithCoupon = 0;
                this.invalidCouponCode = false;
                this.couponcodediv = false;
                this.divcouponcode = true;
                this.divcouponcodeafterapplying = false;
                this.couponFieldVisible= false;
            }
        },
    };
</script>

<style scoped>
    .checkout-page {
        margin: 0 auto;
        max-width: 1200px;
    }

    .hr {
        color: #ced4da;
    }

    .two-columns {
        display: flex;
    }

    .first-column {
        border-right: 1px solid #ced4da;
        /* flex: 1; */
        width: 55%;
        padding: 20px;
        padding-right: 60px;
        background-color: rgb(255, 255, 255);
    }

    .second-column {
        /* flex: 1; */
        width: 45%;
        padding: 20px;
    }

    .logo-img {
        display: flex;
        align-items: start;
        width: 200px;
    }

    .shipping-address-div {
        display: flex;
        flex-direction: column;
        align-items: start;
        box-sizing: border-box;
        gap: 15px;
        margin-bottom: 30px;
    }

    .Shipping-information,
    .Shipping-method {
        font-size: 1.25rem;
        font-weight: 600;
        margin: 0;
        margin-bottom: 8px;
        font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Helvetica Neue,
            Arial,
            Noto Sans,
            Liberation Sans,
            sans-serif,
            Apple Color Emoji,
            Segoe UI Emoji,
            Segoe UI Symbol,
            Noto Color Emoji;
    }

    .add-title {
        margin: 0;
        font-size: 14px;
        margin-bottom: 8px;
        font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Helvetica Neue,
            Arial,
            Noto Sans,
            Liberation Sans,
            sans-serif,
            Apple Color Emoji,
            Segoe UI Emoji,
            Segoe UI Symbol,
            Noto Color Emoji;
    }

    .add-new-address {
        width: 100%;
        height: calc(2.25rem + 9px);
        padding-left: 15px;
        padding-right: 30px;
        font-size: 14px;
        border-radius: 5px;
        border: 1px solid #ced4da;
        margin-bottom: 15px;
    }

    .input-full-name {
        height: calc(2.25rem + 9px);
        padding-left: 15px;
        font-size: 14px;
        border-radius: 5px;
        border: 1px solid #ced4da;
        box-sizing: border-box;
        width: 100%;
    }

    .input-container {
        display: flex;
        width: 100%;
    }

    .input-email {
        flex: 3;
        height: calc(2.25rem + 9px);
        padding-left: 15px;
        font-size: 14px;
        border-radius: 5px;
        border: 1px solid #ced4da;
        margin-right: 5px;
    }

    .input-phone {
        flex: 1;
        /* height: calc(2.25rem + 9px); */
        padding-left: 15px;
        font-size: 14px;
        border-radius: 5px;
        border: 1px solid #ced4da;
    }

    .payment-checkout-form {
        border: 1px solid #ced4da;
        width: 100%;
        box-sizing: border-box;
        border-radius: 5px;
    }

    .shipping-method-ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .shipping-method-li {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        padding-left: 15px;
    }

    .shipping-method-li-outside {
        display: flex;
        align-items: center;
        padding-left: 15px;
    }

    .shipping-method-li-outside input[type="radio"] {
        height: calc(2.25rem + 9px);
        margin-right: 10px;
        width: 20px;
        border: 1px solid #ced4da;
    }

    .shipping-method-li input[type="radio"] {
        height: calc(2.25rem + 9px);
        margin-right: 10px;
        width: 20px;
        border: 1px solid #ced4da;
    }

    .shipping-method-li label {
        font-size: 14px;
        font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Helvetica Neue,
            Arial,
            Noto Sans,
            Liberation Sans,
            sans-serif,
            Apple Color Emoji,
            Segoe UI Emoji,
            Segoe UI Symbol,
            Noto Color Emoji;
    }

    .shipping-method-li:last-child {
        border-top: 1px solid #ced4da;
    }

    .note {
        font-size: 16px;
        font-weight: 400;
        margin: 0;
    }

    .div-inputsAddress {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .note-message {
        height: calc(4.25rem + 9px);
        padding-left: 15px;
        font-size: 14px;
        border-radius: 5px;
        border: 1px solid #ced4da;
        box-sizing: border-box;
        width: 100%;
        font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Helvetica Neue,
            Arial,
            Noto Sans,
            Liberation Sans,
            sans-serif,
            Apple Color Emoji,
            Segoe UI Emoji,
            Segoe UI Symbol,
            Noto Color Emoji;
    }

    .final-checkout {
        display: flex;
        justify-content: space-between;
    }

    .back-to-cart {
        text-decoration: none;
        color: #17a2b8;
        display: flex;
        align-items: center;
    }

    .btn-finalcheckout {
        background-color: #17a2b8;
        color: white;
        border: none;
        padding: 15px;
        border-radius: 5px;
        font-size: 14px;
        cursor: pointer;
    }

    .product {
        display: flex;
        align-items: start;
        margin-bottom: 1rem;
        margin-top: 0;
    }

    .checkout-image {
        background-color: #fff;
        border: 1px solid #dee2e6;
        border-radius: 0.25rem;
        padding: 0.25rem;
        width: 70px;
        height: 70px;
    }

    .checkout-item {
        display: flex;
        gap: 40px;
        margin-bottom: 10px;
        padding-bottom: 10px;
        border-bottom: 1px solid #ced4da;
    }

    .checkout-name {
        font-size: 14px;
        font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Helvetica Neue,
            Arial,
            Noto Sans,
            Liberation Sans,
            sans-serif,
            Apple Color Emoji,
            Segoe UI Emoji,
            Segoe UI Symbol,
            Noto Color Emoji;
    }

    .quantity-badge {
        position: absolute;
        top: -5px;
        right: -5px;
        background-color: #737373;
        color: white;
        border-radius: 50%;
        width: 20px;
        height: 20px;
        text-align: center;
        line-height: 20px;
        font-size: 14px;
    }


    .checkout-size-color {
        font-size: 11px;
    }

    .div-subtotal {
        padding: 20px;
        bottom: 0;
    }

    .subtotal {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .subtotal1 {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 20px;
    }

    .subtotal-title {
        margin-block-start: 0;
        margin-block-end: 0;
    }

    .subtotal-price {
        margin-block-start: 0;
        margin-bottom: 0;
    }

    .total-price {
        margin-block-start: 0;
        margin-bottom: 0;
    }

    .coupon-code {
        display: flex;
        background-color: white;
        border: none;
        color: #17a2b8;
        cursor: pointer;
        margin-top: 15px;
    }

    .coupon-code:hover {
        text-decoration: underline;
    }

    .hidden {
        display: none;
    }

    .cc-div {
        display: flex;
        margin-top: 10px;
        margin-left: 20px;
    }

    .input-coupon-code {
        border: 1px solid #dcdcdc;
        height: 45px;
        width: 250px;
        padding-left: 7px;
        border-radius: 5px;
        margin-right: 50px;
    }

    .button-coupon-code {
        border-radius: 5px;
        height: 45px;
        background-color: #17a2b8;
        color: white;
        border: none;
        padding: 15px;
        border-radius: 5px;
        font-size: 14px;
        cursor: pointer;
    }

    .invalid {
        color: red;
        display: flex;
        text-align: start;
        padding-left: 20px;
    }

    .cc-div-remove {
        display: flex;
        margin-top: 10px;
        margin-left: 20px;
        align-items: center;
        border-top: 1px solid #ced4da;
    }

    .remove-coupon-code {
        background-color: #ffc107;
        color: black;
        border-radius: 5px;
        height: 45px;
        border: none;
        padding: 15px;
        font-size: 14px;
        cursor: pointer;
    }

    .display-couponcode {
        background-color: #d4edda;
        color: green;
        padding: 15px;
        border-radius: 5px;
        width: 250px;
        padding-left: 7px;
        border-radius: 5px;
        margin-right: 50px;
    }

    .cc-div1{
        border-top: 1px solid #ced4da;
    }
</style>
