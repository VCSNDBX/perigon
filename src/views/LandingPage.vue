<template>
    <ion-page>
        <ion-content :fullscreen="true" class="flex justify-center flex-col w-screen">
            <ion-slides :pager="true" :options="slideOpts" ref="mySlides" class="mt-20">
              <ion-slide class="flex flex-col">
                  <div class="bg-black rounded-full mx-auto mb-8 p-12">
                      <img :src="ticket">
                  </div>
                  <div class="text-center text-black text-xl font-bold">
                    BUY PASSES
                  </div>
                  <div class="text-center text-gray-500 text-xl font-normal px-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar ac neque, enim cursus est facilisis.
                  </div>
              </ion-slide>
              <ion-slide class="flex flex-col">
                  <div class="bg-black rounded-full mx-auto mb-10 p-12">
                    <img :src="ride">
                  </div>
                  <div class="text-center text-black text-xl font-bold py-2">
                    BOOK A RIDE
                  </div>
                  <div class="text-center text-gray-500 text-xl font-normal py-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar ac neque, enim cursus est facilisis.
                  </div>
              </ion-slide>
              <ion-slide class="flex flex-col">
                  <div class="bg-black rounded-full mx-auto mb-10 p-12">
                    <img :src="pay">
                  </div>
                  <div class="text-center text-black text-xl font-bold py-2">
                    PAY AT YOUR CONVINENCE
                  </div>
                  <div class="text-center text-gray-500 text-xl font-normal py-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar ac neque, enim cursus est facilisis.
                  </div>
              </ion-slide>
          </ion-slides>
          <div class="flex flex-col justify-center">
            <ion-button fill="clear" class="bg-black rounded-md mx-auto px-16 text-white font-bold" @click="nextSlide">NEXT</ion-button>
            <ion-button  fill="clear" color="secondary" class="text-black font-bold px-14 py-3 mx-auto text-sm" @click="skip">SKIP</ion-button>
          </div>
        </ion-content>
    </ion-page>
</template>
 
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { IonSlides, IonSlide, IonPage, IonContent, useIonRouter } from '@ionic/vue'

export default defineComponent({
    components: {
        IonPage,
        IonSlides,
        IonSlide,
        IonContent,
    },

    data() {
        return {
            ticket: "/assets/img/ticket.png",
            ride: "/assets/img/ride.png",
            pay: "/assets/img/pay.png",
        };
    },

    setup() {
        const ionRouter = useIonRouter();

        const mySlides = ref<any>(null);

        const slideOpts = {
            initialSlide: 0,
            speed: 400,
        };

        const nextSlide = async () => {
          const s = await mySlides?.value?.$el.getSwiper();
          await s.slideNext();
        };

        return { 
            slideOpts,
            ionRouter,
            mySlides,
            nextSlide,
        }
    },

    methods: {
        skip() {
            this.ionRouter.navigate("/login/", 'forward', 'replace');
        },
  },
})
 </script>

<style scoped>
.swiper-slide {
  height: 450px;
}
</style>