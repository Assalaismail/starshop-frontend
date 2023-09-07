<template>
    <div class="home">
      <CarouselImage
        :navigation="true"
        :pagination="true"
        :startAutoPlay="false"
        :timeout="5000"
        class="carousel"
        v-slot="{ currentSlide }"
      >
        <SlideImage v-for="(slide, index) in carouselSlides" :key="index">
          <div v-show="currentSlide === index + 1" class="slide-info">
            <img :src="require(`../assets/${slide}.jpg`)" alt="" class="img-carousel" />
          </div>
        </SlideImage>
      </CarouselImage>
    </div>
  </template>
  
  <script>
  import CarouselImage from "./CarouselImage.vue";
  import SlideImage from "./CarouselSlide.vue";
  
  export default {
    name: "App",
    components: { CarouselImage, SlideImage},
    setup() {
      const carouselSlides = ["image3", "image2", "image1"];
  
      return { carouselSlides };
    },
  };
  </script>
  
  <style lang="scss" scoped>
  .carousel {
    position: relative;
    max-height: 100vh;
    height: 90vh;
  
    .slide-info {
      position: absolute;
      width: 100%;

    }
      .img-carousel {
        width: 100%;
        height: 90vh;
        object-fit: cover;
      }
    }
  
  </style>