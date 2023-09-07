<template>
  <div>
    <!-- <carousel-slide></carousel-slide> -->
    <img-carousel-img></img-carousel-img>
  </div>


  <div>
    <div class="video-container">
      <!-- Video 1 -->
      <div class="video-wrapper">
        <video class="video" id="video1" controls >
          <source src="../assets/video1.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>

      <!-- Video 2 -->
      <div class="video-wrapper">
        <video class="video" id="video2" controls>
          <source src="../assets/video2.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
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
// import CarouselSlide from './CarouselSlide.vue';
// import video1 from "../assets/video1.mp4"

import ImgCarouselImg from '../components/ImgCarouselImg.vue'

export default {
  components: {
    // CarouselSlide,
    ImgCarouselImg,
  },

  methods: {
    playVideo(videoId) {
      const video = document.getElementById(videoId);
      video.play();
    },
  },
};

</script>

<style>

.video-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.video-wrapper {
  position: relative;
  margin: 2rem;
}

.video {
  width: 100%;
  max-width: 100%;
}

.video-wrapper:hover .play-button {
  opacity: 1;
}




.home-button {
            color: white;
            padding: 10px 20px;
            cursor: pointer;
            font-size: 18px;
            position: relative;
            overflow: hidden;
            background: none;
            border: 1px solid;
            border-radius: 50px;
            width: 200px;
            height: 50px;
            background-color: #e1b01f;
            margin-top: 200px;
            font-weight: 600;
        }

        .home-button::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, #6e6434);
            transform: translateX(-100%);
            animation: none;
            transition: transform 0.3s; /* transition effect for a smoother appearance */
        }

        .home-button:hover::before {
            animation: wave 2s infinite; /* Enable the animation on hover */
        }

        @keyframes wave {
            0% {
                transform: translateX(-100%);
            }
            100% {
                transform: translateX(100%);
            }
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
