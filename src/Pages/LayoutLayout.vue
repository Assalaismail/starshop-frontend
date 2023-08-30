<template>
    <section class="mainer">
      <main class="main">
        <NavbarHeader />
        <router-view /> 
        <FooterFooter />
      </main>
    </section>
  </template>
  
  <script>
  import NavbarHeader from '../components/NavbarHeader.vue';
  import FooterFooter from '../components/FooterFooter.vue';
  import { createRouter, createWebHistory } from 'vue-router';
  
  const router = createRouter({
    history: createWebHistory(),
    routes: [
      // Your routes configuration here
    ]
  });
  
  export default {
    components: {
      NavbarHeader,
      FooterFooter
    },
    router
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  