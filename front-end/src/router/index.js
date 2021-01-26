import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Catalog from '@/views/Catalog.vue'
import Product from '@/views/Product.vue'
import NewProduct from "@/views/Edit.vue";
import Admin from "@/views/Admin.vue";
import Register from "@/views/Register.vue";
import Login from "@/views/Login.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: Catalog
  },
  {
    path: '/product/:id',
    name: 'product',
    component: Product
  },
  {
    path: '/newProduct',
    name: 'newProduct',
    component: NewProduct
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/newProduct/:id',
    name: 'newProduct2',
    component: NewProduct
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
