<template>
    <div class="contact-us">
        <h1 class="contact">CONTACT</h1>

        <div class="address-hotline">
            <p class="title">STARSHOP BEIRUT</p>
            <p class="add"><span>Address: </span>STARSHOP S.a.r.l. Lebanon, Beirut Downtown</p>
            <p class="add"><span>Hotline: </span>+961 3123456</p>
        </div>

        <form class="form-contact">
            <div class="input-row">
                <div class="input-container">
                    <label for="name" class="label-contact">Name <span>*</span></label>
                    <input type="text" id="name" name="name" class="input-contact" placeholder="Name"
                        v-model="name" required />
                </div>

                <div class="input-container">
                    <label for="email" class="label-contact">Email <span>*</span></label>
                    <input type="email" id="email" name="email" class="input-contact" placeholder="Email"
                        v-model="email" required />
                </div>
            </div>

            <div class="input-row">
                <div class="input-container">
                    <label for="" class="label-contact">Address</label>
                    <input type="text" id="address" name="address" class="input-contact" placeholder="Address"
                        v-model="address" />
                </div>

                <div class="input-container">
                    <label for="password" class="label-contact">Phone</label>
                    <input type="text" id="phoneNumber" name="phoneNumber" class="input-contact" placeholder="Phone"
                        v-model="phoneNumber" />

                </div>
            </div>
            <label for="" class="label-contact">Subject <span>*</span></label>
            <input type="text" id="subject" name="subject" class="input-contact" placeholder="Subject"
                v-model="subject" required />

            <label for="" class="label-contact">Message <span>*</span></label>
            <textarea type="text" id="subject" name="subject" class="input-message" placeholder="Message"
                v-model="message" required />

            <p class="field-req">The field with (<span>*</span>) is required.</p>

            <div class="send">

                <button type="submit" class="button-send">Send</button>
            </div>
        </form>



    </div>
</template>

<script></script>



<style>
    .contact-us {
        margin-left: 450px;
        margin-right: 450px;
    }

    .contact {
        font-size: 35px;
        margin-top: 50px;
        margin-bottom: 60px;
    }

    .input-row {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-bottom: 10px;
    }

    .input-container {
        flex: 0 0 calc(50% - 10px);
        /* To make each container take 50% width with some spacing */
    }

    .label-contact {
        display: block;
        /* Display labels as block to keep them above inputs */
        text-align: start;
        margin-top: 20px;
    }

    .label-contact span {
        color: red;
    }

    .input-contact {
        width: 100%;
        /* padding: 5px; */
        margin-top: 5px;
        height: 40px;
        border: 1px solid lightgray;
        font-size: 14px;
        padding-left: 10px;
    }

    .input-message {
        width: 100%;
        /* padding: 5px; */
        margin-top: 5px;
        height: 15vh;
        border: 1px solid lightgray;
        font-size: 14px;
        padding-left: 10px;
    }

    .address-hotline {
        margin-top: 20px;
        text-align: initial;
    }

    .title {
        font-weight: 700;
        font-size: 20px;
    }

    .add {
        color: #787d83;
    }

    .add span {
        font-weight: 600;
    }

    .field-req {
        color: #787d83;
        text-align: initial;
        margin-top: 30px;
    }

    .field-req span {
        color: red;
    }

    .send {
        display: flex;
    }

    .button-send {
        background-color: white;
        color: #787d83;
        border: 1px solid #787d83;
        padding: 10px 20px;
        border-radius: 50px;
        cursor: pointer;
        font-size: 20px;
        margin-top: 20px;
        width: 150px
    }

    .button-send:hover {
        background-color: #787d83;
        color: white;
    }
</style>
