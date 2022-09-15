<template>
    <ion-page>
      <swiper
        ref="slideSwiper"
        class="bg-white h-screen w-screen"
        :options="swiperOptions"
        :slides-per-view="1"
        :modules="modules"
        effect="fade"
        :auto-destroy="true"
        :delete-instance-on-destroy="true"
        :cleanup-styles-on-destroy="true"
      >
        <swiper-slide
          v-for="(item, index) in landingContent"
          :key="index"
          :virtualIndex="index"
          class="bg-white"
        >
          <LandingSlider
            :position="index"
            :icon="item.icon"
            :title="item.title"
            :descriptions="item.description"
          ></LandingSlider>
        </swiper-slide>
      </swiper>
    </ion-page>
  </template>
 
 <script lang="ts">
import { defineComponent } from 'vue';
import { IonPage } from "@ionic/vue";
import LandingSlider from '../components/LandingSlider.vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Virtual, EffectFade } from "swiper";
import 'swiper/css';
 
 export default defineComponent({
    components: { IonPage, LandingSlider, Swiper, SwiperSlide, },

    setup() {
        return {
            landingContent: [
                {
                icon: "ticket.png",
                title: "BUY PASSES",
                description: "Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit. Pulvinar<br/> ac neque, enim cursus est fascilisis.",
                },
                {
                icon: "ride.png",
                title: "BOOK A RIDE",
                description:"Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit. Pulvinar<br/> ac neque, enim cursus est fascilisis.",
                },
                {
                icon: "pay.png",
                title: "PAY AT YOUR CONVINENCE",
                description: "Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit. Pulvinar<br/> ac neque, enim cursus est fascilisis.",
                },
            ],

            modules: [EffectFade, Virtual],

            swiperOptions: {
                spaceBetween: 30,
                centeredSlides: true,
                slidesOffsetBefore: "100px",
                slidesOffsetAfter: "100px",
                slidesPerView: "auto",
                touchRatio: 0.2,
                slideToClickedSlide: false,
                navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
                },
            },
        };
    },
 })
 </script>