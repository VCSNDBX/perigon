<template>
  <div class="flex justify-center flex-col h-screen w-screen">
      <div class="flex flex-col">
          <div class="bg-black rounded-full mx-auto mb-10 p-12">
          <img class="" :src="`assets/img/${icon}`" />
          </div>
          <div class="text-center text-black text-xl font-bold py-2">
          <h3>{{ title }}</h3>
          </div>
          <div class="text-center text-gray-500 text-xl font-normal py-2" v-html="descriptions">
          </div>
    </div>
    <div class="flex flex-col">
      <div class="flex my-12 mx-auto gap-2">
          <div class="bg-black p-1 rounded-full" :class="0 === position ? 'bg-black' : 'bg-[#C4C4C4]'">
          </div>
          <div class="bg-black p-1 rounded-full" :class="1 === position ? 'bg-black' : 'bg-[#C4C4C4]'">
          </div>
        <div class="bg-black p-1 rounded-full" :class="2 === position ? 'bg-black' : 'bg-[#C4C4C4]'">
          </div>
      </div>
    </div>
    <ion-button fill="clear" class="bg-black rounded-md mx-auto px-16 text-white font-bold" @click="next">NEXT</ion-button>
    <ion-button fill="clear" color="secondary" class="text-black font-bold px-14 py-3 mx-auto text-sm"  @click="skip">SKIP</ion-button>
  </div>
</template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  import { useSwiper } from "swiper/vue";
  import { IonButton, useIonRouter } from "@ionic/vue";

  export default defineComponent({
    components: {
      IonButton,
    },

    props: {
      position: Number,
      icon: String,
      title: String,
      descriptions: String,
    },
    setup() {
      const swiper = useSwiper();
      const ionRouter = useIonRouter();

      return {
        swiper,
        ionRouter,
      };
    },
    methods: {
        next() {
          this.swiper.slideNext();
          console.log(this.swiper.realIndex);
          /*if ( this.swiper.activeIndex ) {
          this.ionRouter.navigate("/login", "forward");
          }*/
        },
        skip() {
        this.ionRouter.navigate("/login", "forward");
        },
    },
  })
  </script>