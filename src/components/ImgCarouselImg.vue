
<!--//////////////////////////////////////////////// STATIC CAROUSEL //////////////////////////////////////////////////////// -->

<!-- <template>
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
-->

<!--//////////////////////////////////////////////// DYNAMIC CAROUSEL //////////////////////////////////////////////////////// -->

  <template>
    <div class="image-carousel">
      <transition name="fade" mode="out-in">
        <img :key="currentImage" :src="currentImageUrl" alt="Carousel Image" class="img-carousel" v-if="images.length > 0" />
        <!-- I used v-if for only if there are images in the images array, preventing errors when the array is empty -->
      </transition>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        images: [],
        currentImage: 0,
      };
    },
    computed: {
      currentImageUrl() {
        if (this.images.length === 0) return ''; // Handle empty array
        return this.images[this.currentImage].image;
      },
    },
    async mounted() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/carousel');
        this.images = response.data.data;
        this.startAutoplay();
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    },
    methods: {
      startAutoplay() {
        setInterval(() => {
          this.currentImage = (this.currentImage + 1) % this.images.length;
        }, 3000); // Change image every 3 seconds
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

@media all and (max-width: 768px) {
  .img-carousel {
   height: 40vh;
 }

      }
  </style>
  