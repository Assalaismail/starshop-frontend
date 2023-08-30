<template>
  <div id="app">
    <NavbarHeader/>
    <CarouselSlide/>
    <RegisterUser/>
    <LoginUser/>
    <RouterView />

  </div>

</template>

<script setup>
import NavbarHeader from './components/NavbarHeader.vue';
import CarouselSlide from './components/CarouselSlide.vue'
import RegisterUser from './components/RegisterUser.vue';
import LoginUser from './components/LoginUser.vue';


// export default {
//   name: 'App',
//   components: {
//     NavbarHeader,
//     CarouselSlide,
    
//   }
// }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
}
</style>





