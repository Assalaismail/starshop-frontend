<template>
    <div class="img-background-products">
        <img src="@/assets/background.jpg" >
        <div class="overlay-text">
            Enjoy shopping with us
        </div>
    </div>
</template>

<style>
.img-background-products {
    position: relative;
    margin-top: 30px;
}

.overlay-text {
    position: absolute;
    text-transform: uppercase;
    top: 50%; /* Adjust the top value to position the text vertically */
    left: 50%; /* Adjust the left value to position the text horizontally */
    transform: translate(-50%, -50%);
    /* background-color: rgba(255, 255, 255, 0.7); Background color with opacity */
    padding: 10px; /* Adjust padding as needed */
    color: white;
    font-size: 53px; 
    font-weight: 600;
}
</style>
