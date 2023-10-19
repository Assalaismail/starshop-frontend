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
                        <p class="Shipping-information">Shipping information </p>
                        <p class="add-title">Select available addresses:</p>

                        <select class="add-new-address">
                            <option value="" disabled selected>Add new address:</option>
                        </select>

                        <input type="text" id="name" placeholder="Full Name" class="input-full-name" />

                        <div class="input-container">

                            <input type="text" id="email" placeholder="Email" class="input-email" />
                            <input type="text" id="phone" placeholder="Phone" class="input-phone" />
                        </div>


                        <select class="add-new-address">
                            <option value="" disabled>Choose your country</option>
                            <option value="Lebanon" selected>Lebanon</option>
                        </select>

                        <div class="input-container">
                            <select class="input-email">
                                <option value="" disabled selected>Choose your state</option>

                            </select>
                            <input type="text" id="city" placeholder="city" class="input-phone" />
                        </div>

                        <input type="text" id="address" placeholder="Address" class="input-full-name" />
                    </div>


                    <div class="shipping-address-div">
                        <p class="Shipping-method">Shipping method</p>

                        <div class="payment-checkout-form">
                            <input type="hidden" name="shipping_option" value="1">
                            <ul class="shipping-method-ul">
                                <li class="shipping-method-li">
                                    <input type="radio" name="shipping_method" id="shipping-method-0" value="default"
                                        data-option="0">
                                    <label for="shipping-method-0">
                                        Inside Beirut - $3.00
                                    </label>
                                </li>

                                <li class="shipping-method-li">
                                    <input type="radio" name="shipping_method" id="shipping-method-1" value="default"
                                        data-option="1">
                                    <label for="shipping-method-1">
                                        Same day delivery (Beirut) - $6.00
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>


                    <div class="shipping-address-div">
                        <p class="Shipping-method">Payment method</p>

                        <div class="payment-checkout-form">
                            <input type="hidden" name="shipping_option" value="1">
                            <ul class="shipping-method-ul">
                                <li class="shipping-method-li">
                                    <input type="radio" name="shipping_method" id="shipping-method-0" value="default"
                                        data-option="0">
                                    <label for="shipping-method-0">
                                        Pay online via Stripe
                                    </label>
                                </li>

                                <li class="shipping-method-li">
                                    <input type="radio" name="shipping_method" id="shipping-method-1" value="default"
                                        data-option="1">
                                    <label for="shipping-method-1">
                                        Cash on delivery (COD)
                                    </label>
                                    
                                </li>
                            </ul>
                        </div>
                    </div>


                    <div class="shipping-address-div">
                        <p class="note">Note</p>

                        <textarea type="text" id="note" name="note" class="note-message" placeholder="Note..."/>

                      
                    </div>
                </form>
            </div>

            <div class="second-column"></div>
        </div>
    </div>
</template>

<style scoped>
    .checkout-page {
        margin: 0 auto;
        max-width: 1200px;
    }

    .hr{
        color: #ced4da;
    }

    .two-columns {
        display: flex;
    }

    .first-column {
        border-right: 1px solid #ced4da;
        flex: 1;
        padding: 20px;
        background-color: rgb(255, 255, 255);
    }

    .second-column {
        flex: 1;
        padding: 20px;
        background-color: yellow;
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
        width: 100%
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
        height: calc(2.25rem + 9px);
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

    .shipping-method-li input[type="radio"] {
        height: calc(2.25rem + 9px);
        margin-right: 10px;
        width: 20px;
        border: 1px solid #ced4da;
    }

    .shipping-method-li label {
        font-size: 14px;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
    }

    .shipping-method-li:last-child {
        border-top: 1px solid #ced4da;
    }

    .note{

    }

    .note-message{
        height: calc(4.25rem + 9px);
        padding-left: 15px;
        font-size: 14px;
        border-radius: 5px;
        border: 1px solid #ced4da;
        box-sizing: border-box;
        width: 100%;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;

    }
</style>
