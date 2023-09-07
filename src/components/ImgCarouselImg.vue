<template>
    <div class="image-carousel">
      <transition name="fade" mode="out-in">
        <img :key="currentImage" :src="require(`@/assets/${images[currentImage]}`)" alt="Carousel Image" class="img-carousel"/>
      </transition>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        images: [
          'image1.jpg',
          'image2.jpg',
          'image3.jpg',
        ],
        currentImage: 0,
      };
    },
    mounted() {
      this.startAutoplay();
    },
    methods: {
      startAutoplay() {
        setInterval(() => {
          this.currentImage = (this.currentImage + 1) % this.images.length;
        }, 3000); // Change image every 3 seconds (adjust as needed)
      },
    },
  };
  </script>
  
  <style>
  .image-carousel {
    max-width: 100%;
    height: auto;
  }
  
  /* .fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  } */

  .img-carousel {
        width: 100%;
        height: 90vh;
        object-fit: cover;
      }
  </style>
  