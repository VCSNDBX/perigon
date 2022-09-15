import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import SplashPage from '../views/SplashPage.vue'
import LandingPage from '../views/LandingPage.vue'
import LoginPage from '../views/LoginPage.vue'
import DashBoardPage from '../views/DashBoardPage.vue'

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
    component: () => import('../components/register/PersonalInformation.vue'),
    props: true,
  },
  {
    path: '/details',
    component: () => import('../components/register/AccountDetails.vue'),
    props: true,
  },
  {
    path: '/tos',
    component: () => import('../components/register/TermsAndConditions.vue'),
    props: true,
  },
  {
    path: '/verify',
    component: () => import('../components/register/VerifyAccount.vue'),
    props: true,
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashBoardPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
