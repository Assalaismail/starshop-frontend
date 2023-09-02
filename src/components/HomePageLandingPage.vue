<template>
  <div>
    <carousel-slide></carousel-slide>
  </div>

  <div>
    <button class="home-button">SHOP ALL</button>
  </div>
  <div class="last-section">
    <div class="r">
      <i class="fa-solid fa-truck" ></i>
       <p class="first-p">SHIPPING</p>
       <p class="second-p">Shipping Around The World</p>
    </div>
    <div class="r">
      <i class="fa-solid fa-life-ring"></i>
       <p class="first-p">SUPPORT 24/7</p>
       <p class="second-p">Contact us 24 hours a day, 7 days a week</p>
    </div>

    <div class="r">
      <i class="fa-solid fa-repeat"></i>
       <p class="first-p">3 DAYS RETURN</p>
       <p class="second-p">Simply return it within 3 days for an exchange</p>
    </div>

    <div class="r">
      <i class="fa-solid fa-shield"></i>
       <p class="first-p">WE ENSURE SECURE PAYMENT</p>
       <p class="second-p">100% PAYMENT SECURE</p>
    </div>
  </div>
</template>

<script>
import "@fortawesome/fontawesome-free/css/all.css";
import CarouselSlide from './CarouselSlide.vue';

export default {
  components: {
    CarouselSlide,
  },
};

</script>


<style>

.home-button{
  background: none;
  border: 1px solid;
  border-radius: 50px;
  width: 200px;
  height: 50px;
  background-color: #e1b01f;
  color: white;
  margin-top: 200px;
  padding: 10px;
  font-size: 18px;
  font-weight: 600;
}

.last-section{
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 8rem;
  margin-top: 60px;
}

.r i{
  font-size: 23px;
}
.first-p{
  font-size: 16px;
  font-weight: 700;
  color: #787d83;
}

.second-p{
  font-size: 12px;
}
</style>
