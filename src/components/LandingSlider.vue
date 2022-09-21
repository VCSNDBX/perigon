<template>
    <div class="flex flex-col">
        <div class="bg-black rounded-full mx-auto mb-8 p-12">
            <img :src="img">
        </div>
        <div class="text-center text-black text-xl font-bold">
        {{ title }}
        </div>
        <div class="text-center text-gray-500 text-xl font-normal px-8">
        {{ description }}
        </div>
        <div class="flex flex-col justify-center pt-20">
            <ion-button class="bg-black rounded-md mx-auto px-16 text-white font-bold" @click="next">NEXT</ion-button>
            <ion-button  fill="clear" color="secondary" class="text-black font-bold px-14 py-3 mx-auto text-sm" @click="skip">SKIP</ion-button>
        </div>
    </div>
</template>

<script lang="ts">
import { useIonRouter } from '@ionic/vue';
import { useSwiper } from 'swiper/vue';
import { defineComponent } from 'vue'

export default defineComponent({
    name: "LandingSlider",
    
    props: {
        position: Number,
        img: String,
        title: String,
        description: String,
    },
    
    setup() {
        const ionRouter = useIonRouter();
        const swiper = useSwiper();
        
        return {
            swiper,
            ionRouter,
        };
    },

    methods: {
         next(){
            if(this.swiper.isEnd == true){
              return this.ionRouter.navigate("/login/", 'forward', 'replace');
            }
            else{
              this.swiper.slideNext()
           }
        },

        skip() {
            this.ionRouter.navigate("/login/", 'forward', 'replace');
        },
  },
})
</script>
