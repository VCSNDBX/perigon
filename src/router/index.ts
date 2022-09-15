import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import SplashPage from '../views/SplashPage.vue'
import LandingPage from '../views/LandingPage.vue'
import LoginPage from '../views/LoginPage.vue'
import RegisterPage from '../views/RegisterPage.vue'
import PersonalInfo from '../components/PersonalInformation.vue'
import AccountDetails from '../components/AccountDetails.vue'
import TermsAndConditions from '../components/TermsAndConditions.vue'
import VerifyAccount from '../components/VerifyAccount.vue'
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
    name: 'Register',
    component: RegisterPage,
    children: [
        {
          path: '/personalinfo',
          component: PersonalInfo
        },
        {
          path: '/accountdetails',
          component: AccountDetails
        },
        {
          path: '/termsandcondition',
          component: TermsAndConditions
        },
    ]
  },
  {
    path: '/verify',
    name: 'verify',
    component: VerifyAccount
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
