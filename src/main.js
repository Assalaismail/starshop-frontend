// import { createApp } from 'vue'
// import { createRouter, createWebHistory } from 'vue-router'

// import App from './App.vue'
// import HomePageLandingPage from './components/HomePageLandingPage.vue'
// import LoginUser from './components/LoginUser.vue'
// import RegisterUser from './components/RegisterUser.vue'

// const router = createRouter({
//     history: createWebHistory(),
//     routes: [
//         { path: '/', component: HomePageLandingPage },
//         { path: '/login', component: LoginUser },
//         { path: '/register', component: RegisterUser },
//     ]
// });

// const app = createApp(App)

// app.use(router);


// app.mount('#app')




import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import LayoutLayout from './Pages/LayoutLayout.vue';
import HomePageLandingPage from './components/HomePageLandingPage.vue';
import LoginUser from './components/LoginUser.vue';
import RegisterUser from './components/RegisterUser.vue';
import ContactUs from './components/ContactUs.vue'
import WishlistProduct from './components/WishlistProduct.vue'
import ProductsSubCategories from './components/ProductsSubCategories.vue'
import PasswordReset from './components/PasswordReset.vue'
import SingleProductSubCategory from './components/SingleProductSubCategory.vue'
import ViewCart from './components/ViewCart.vue'
import CheckoutPage from './components/CheckoutPage.vue'

// main.js
import 'gitart-vue-dialog/dist/style.css'
import { GDialog } from 'gitart-vue-dialog'




const routes = [
  {
    path: '/',
    component: LayoutLayout, 
    children: [
      { path: '', component: HomePageLandingPage },
      { path: 'login', component: LoginUser },
      { path: 'register', component: RegisterUser },
      { path: 'contact', component: ContactUs },
      { path: 'wishlist', component: WishlistProduct, props:true, },
      { path: '/category/:categoryName', component: HomePageLandingPage },

      { path: '/product-categories/:subcategoryName',  name: 'subcategory', component: ProductsSubCategories,  props: true,},
      { path: '/product-categories/:parentName',  name: 'product', component: SingleProductSubCategory,  props: true,},
      { path: '/cart', component: ViewCart},

      { path: '/password-reset', component: PasswordReset },
    ],
  },

  {path: '/checkout', component: CheckoutPage},

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App)

app.use(router);
app.component('GDialog', GDialog)


app.mount('#app')


export default router;
