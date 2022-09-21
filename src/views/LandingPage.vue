<template>
    <ion-page>
        <ion-content :fullscreen="true" class="flex justify-center flex-col w-screen">
            <swiper 
            :slides-per-view="1"
            :modules="modules"
            @slideChange="onSlideChange"
            class="pt-44"
            >
              <swiper-slide
                v-for="(slides, index) in slideContent"
                :key="index"
                :virtualIndex="index"
                class=""
              >
              <LandingSlider
                :position="index"
                :img="slides.img"
                :title="slides.title"
                :description="slides.description"
              ></LandingSlider>
            </swiper-slide>
          </swiper>
        </ion-content>
    </ion-page>
</template>
 
<script lang="ts">
import { defineComponent, ref} from 'vue'
import { IonPage, IonContent, } from '@ionic/vue'
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide, } from 'swiper/vue';
import LandingSlider from '@/components/LandingSlider.vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default defineComponent({
    components: {
        IonPage,
        IonContent,
        Swiper,
        SwiperSlide,
        LandingSlider,
    },
    
    setup() {
        const onSlideChange = async () => {
            console.log("changed slider");
        };

        return { 
            onSlideChange,
            modules: [ Navigation ],
            slideContent: [
              {
                img: "/assets/img/ticket.png",
                title: "BUY PASSES",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar  ac neque, enim cursus est fascilisis.",
              },
              {
                img: "/assets/img/ride.png",
                title: "BOOK A RIDE",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar  ac neque, enim cursus est fascilisis.",
              },
              {
                img: "/assets/img/pay.png",
                title: "PAY AT YOUR CONVINENCE",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar  ac neque, enim cursus est fascilisis.",
              },
            ],
        }
    },
})
 </script>