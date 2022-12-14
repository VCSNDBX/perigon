import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './theme/core.css';
import HeaderLayout from './components/HeaderLayout.vue';
import DashBoardLayout from './components/dashboard/DashBoardLayout.vue';
import HomeBoardTop from './components/dashboard/HomeBoardTop.vue';
const app = createApp(App)
  .use(IonicVue)
  .use(router);

app.component('header-layout', HeaderLayout);
app.component('dash-board-layout', DashBoardLayout);
app.component('home-board-top', HomeBoardTop);

router.isReady().then(() => {
  app.mount('#app');
});