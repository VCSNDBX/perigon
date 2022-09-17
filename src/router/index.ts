import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import SplashPage from '../views/SplashPage.vue';
import LandingPage from '../views/LandingPage.vue';
import LoginPage from '../views/LoginPage.vue';
import DashBoardPage from '../views/DashBoardPage.vue';
import PassesPage from '../views/PassesPage.vue';
import ClassPage from '../views/ClassPage.vue';
import SpotsPage from '../views/SpotsPage.vue';
import BookSummary from '../views/BookSummary.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/splash'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/splash',
    name: 'Splash',
    component: SplashPage
  },
  {
    path: '/landing',
    name: 'Landing',
    component: LandingPage
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/register',
    component: () => import('../views/PersonalInformation.vue'),
    props: true,
  },
  {
    path: '/details',
    component: () => import('../views/AccountDetails.vue'),
    props: true,
  },
  {
    path: '/tos',
    component: () => import('../views/TermsAndConditions.vue'),
    props: true,
  },
  {
    path: '/verify',
    component: () => import('../views/VerifyAccount.vue'),
    props: true,
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashBoardPage
  },
  {
    path: '/passes',
    name: 'passes',
    component: PassesPage
  },
  {
    path: '/checkout/:pack/:total',
    component: () => import('../views/CheckOutPage.vue'),
    props: true,
  },
  {
    path: '/class',
    name: 'class',
    component: ClassPage,
    props: true,
  },
  {
    path: '/spots',
    name: 'spots',
    component: SpotsPage,
    props: true,
  },
  {
    path: '/booksummary',
    name: 'booksummary',
    component: BookSummary,
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
