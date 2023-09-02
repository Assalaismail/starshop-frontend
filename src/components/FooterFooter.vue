<template>
      <main class="footer-main">
        <section class="clmn-1">
          <h4>SOCIAL MEDIA LINKS</h4>
          <div class="media-icons-wrapper">
            <div class="icons-wrapper">
              <div class="icn-wrap">
                <a href="">
                  <font-awesome-icon :icon="faInstagram" />
                </a>
              </div>
              <div class="icn-wrap">
                <a href="/">
                  <font-awesome-icon :icon="faFacebook" />
                </a>
              </div>
              <div class="icn-wrap">
                <a href="/">
                  <font-awesome-icon :icon="faLinkedin" />
                </a>
              </div>
              <div class="icn-wrap">
                <a href="/">
                  <font-awesome-icon :icon="faWhatsapp" />
                </a>
              </div>
            </div>
            <p>Don't Forget To Follow Us!</p>
          </div>
        </section>
  
        <section class="clmn-2">
          <h4>CUSTOMER SERVICES</h4>
          <ul class="services">
            <li><a href="/login">Login</a></li>
            <li><a href="/register">Register</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
          </ul>
        </section>
  
        <section class="clmn-4">
          <h4>ADDRESS & CONTACT</h4>
          <ul class="address-contact">
            <li><span>Beirut:</span> STARSHOP S.a.r.l. Lebanon, Beirut Downtown</li>
            <li><span>Hotline:</span> +961 3123456</li>
            <li><span>Email:</span> info@starshop.com</li>
          </ul>
        </section>
      </main>
      <p class="copyright">
        Copyright © 2023 All rights reserved
      </p>

  </template>
  
  <script>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import {
    faInstagram,
    faFacebook,
    faLinkedin,
    faWhatsapp
  } from '@fortawesome/free-brands-svg-icons';
  
  export default {
    components: {
      FontAwesomeIcon
    },
    data() {
      return {
        faInstagram,
        faFacebook,
        faLinkedin,
        faWhatsapp
      };
    }
  };
  </script>
  
  <style scoped>
  .footer-main {
    width: 90%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 7rem;
    height: 30dvh;
    position: relative;
    display: flex;
    justify-content: center;

  }
  
  .footer-main section {
    height: 50%;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 70px auto;
  }
  
  .footer-main h4 {
    font-size: 19px;
    color: black;
  }
  
  .clmn-1 h4 {
    color: black;
  }
  
  .icons-wrapper {
    display: flex;
    padding-bottom: 25px;
    gap: 10px;
  }
  
  .icn-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 27px;
    height: 27px;
    border-radius: 10px;
    position: relative;
    transition: 0.3s all ease;
    border: 1px solid rgb(255, 255, 255);
  }
  
  .icn-wrap i {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-40%, -50%);
    transition: 0.3s all ease;
  }
  
  .icn-wrap:hover {
    background-color: #e1b01f;
    outline: none;
  }
  
  .icn-wrap:hover i {
    color: black;
  }
  
  .footer-main section ul li {
    font-size: 14px;
    margin-bottom: inherit;
  }
  
  .footer-main section ul li a {
    transition: 0.3s all ease;
  }
  .footer-main section ul li a:hover {
    color:#737373;
    outline: none;
  }
  
  .copyright {
    
    color: rgb(136, 136, 136);
    font-size: small;
    text-align: center;
  }
  ul li {
    list-style: none;
    padding-left: 0%;
  }
  a {
    text-decoration: none;
    color: black;
  }
  .footer-main a {
    text-decoration: none;
  }

  .services{
    text-align: start;
    padding-left: 0px;
  }

  .address-contact{
    width: 200px;
    padding-left: 0px;
    text-align: start;
  }
    
  .address-contact span{
    font-weight: 600;
  }
  
  @media all and (max-width: 476px) {
    .footer-main {
      flex-direction: column;
    }
  
    .footer-main section {
      text-align: center;
    }
    footer {
      height: auto;
      padding: 7vh;
    }
  
    .icons-wrapper {
      justify-content: center;
    }
    .footer-main h1 {
      font-size: clamp(0.75rem, -1.0833rem + 9.1667vw, 1.4375rem);
      color: #737373;
    }
  
    .footer-main section {
      grid-template-rows: 40px auto;
    }
  
    .footer-main section ul {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .footer-main section ul li {
      font-size: clamp(0.5625rem, -0.7708rem + 6.6667vw, 1.0625rem);
    }
  
    footer {
      display: flex;
    }
    .copyright {
      position: absolute;
      bottom: 1%;
      color: rgb(136, 136, 136);
      font-size: x-small;
      text-align: center;
      padding: 5%;
    }

    ul li {
        list-style: none;
      }
    
      .footer-main a {
        text-decoration: none;
      }
  }
  
  </style>
  