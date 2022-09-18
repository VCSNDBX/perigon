import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import SplashPage from '../views/SplashPage.vue';
import LandingPage from '../views/LandingPage.vue';
import LoginPage from '../views/LoginPage.vue';
import PassesPage from '../views/PassesPage.vue';
import ClassPage from '../views/ClassPage.vue';
import SpotsPage from '../views/SpotsPage.vue';
import BookSummary from '../views/BookSummary.vue';
import DashBoardFooter from '../components/dashboard/DashBoardFooter.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/splash'
  },
  {
    path: '/dashboard/',
    component: DashBoardFooter,
    children: [
      {
        path: '',
        redirect: '/dashboard/home'
      },
      {
        path: 'home',
        component: () => import('@/views/HomePage.vue'),
        props: true,
      },
      {
        path: 'home2',
        component: () => import('@/views/DashBoardPage.vue'),
        props: true,
      },
    ]
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
