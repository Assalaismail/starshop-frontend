<template>
    <div class="carousel">
      <slot :currentSlide="currentSlide" />
  
      <!-- Navigation -->
      <div v-if="navEnabled" class="navigate">
        <div class="toggle-page left">
          <i @click="prevSlide" class="fas fa-chevron-left"></i>
        </div>
        <div class="toggle-page right">
          <i @click="nextSlide" class="fas fa-chevron-right"></i>
        </div>
      </div>
  
      <!-- Pagination -->
      <div v-if="pagintationEnabled" class="pagination">
        <span
          @click="goToSlide(index)"
          v-for="(slide, index) in getSlideCount"
          :key="index"
          :class="{ active: index + 1 === currentSlide }"
        >
        </span>
      </div>
    </div>
  </template>
  
  <script>
import { ref, onMounted, onBeforeUnmount, watch } from "vue";

export default {
  props: ["startAutoPlay", "timeout", "navigation", "pagination"],
  setup(props) {
    const currentSlide = ref(1);
    const getSlideCount = ref(null);
    const autoPlayEnabled = ref(
      props.startAutoPlay === undefined ? true : props.startAutoPlay
    );
    const timeoutDuration = ref(
      props.timeout === undefined ? 5000 : props.timeout
    );
    const paginationEnabled = ref(
      props.pagination === undefined ? true : props.pagination
    );
    const navEnabled = ref(
      props.navigation === undefined ? true : props.navigation
    );

    let autoplayInterval;

    // Next slide
    const nextSlide = () => {
      if (currentSlide.value === getSlideCount.value) {
        currentSlide.value = 1;
      } else {
        currentSlide.value += 1;
      }
    };

    // Previous slide
    const prevSlide = () => {
      if (currentSlide.value === 1) {
        currentSlide.value = getSlideCount.value;
      } else {
        currentSlide.value -= 1;
      }
    };

    // Go to a specific slide
    const goToSlide = (index) => {
      currentSlide.value = index + 1;
    };

    // Start autoplay
    const startAutoplay = () => {
      autoplayInterval = setInterval(() => {
        nextSlide();
      }, timeoutDuration.value);
    };

    // Stop autoplay
    const stopAutoplay = () => {
      clearInterval(autoplayInterval);
    };

    onMounted(() => {
      getSlideCount.value = document.querySelectorAll(".slide").length;

      if (autoPlayEnabled.value) {
        startAutoplay();
      }

      // Pause autoplay when the component is not in view
      window.addEventListener("blur", stopAutoplay);
      window.addEventListener("focus", () => {
        if (autoPlayEnabled.value) {
          startAutoplay();
        }
      });
    });

    // Cleanup listeners when the component is unmounted
    onBeforeUnmount(() => {
      window.removeEventListener("blur", stopAutoplay);
      window.removeEventListener("focus", startAutoplay);
    });

    // Watch currentSlide for changes and trigger next slide after a timeout
    watch(currentSlide, () => {
      if (autoPlayEnabled.value) {
        setTimeout(() => {
          nextSlide();
        }, timeoutDuration.value);
      }
    });

    return {
      currentSlide,
      nextSlide,
      prevSlide,
      getSlideCount,
      goToSlide,
      paginationEnabled,
      navEnabled,
    };
  },
};
</script>

  
  
  
  <style lang="scss">
  .navigate {
    // padding: 0 16px;
    height: 90vh;
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
  
    .toggle-page {
      display: flex;
      flex: 1;
    }
  
    .right {
      justify-content: flex-end;
    }
  
    i {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      color: #fff;
    }
  }
  
  .pagination {
    position: absolute;
    bottom: 24px;
    width: 100%;
    display: flex;
    gap: 16px;
    justify-content: center;
    align-items: center;
  
    span {
      cursor: pointer;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: #fff;
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    }
  
    .active {
      // background-color: #6347c7;
      border: none;
    }
  }
  </style>