<template>
    <header-layout page-title="Purchase Passes" page-default-back-link="/dashboard/home2">
        <ion-slides :options="slideOpts" class="-my-10">
            <ion-slide>
                <div class="absolute top-20">
                    <img class="shadow-md" :src="ticketbot">
                    <div class="absolute left-6 top-40">
                        <div class="text-black text-left text-xs tracking-wide pt-4">Price</div>
                        <div class="text-black text-left text-2xl font-bold tracking-wide pb-3">Php 2,850</div>
                        <div class="text-black text-left text-xs tracking-wide">Expiration</div>
                        <div class="text-black text-left text-2xl font-bold tracking-wide pb-3">45 days</div>
                        <div class="text-black text-left text-xs tracking-wide">Pack</div>
                        <div class="text-black text-left text-2xl font-bold tracking-wide pb-3">3-Pack</div>
                        <div class="text-black text-left text-xs tracking-wide">Mode</div>
                        <div class="text-black text-left text-2xl font-bold tracking-wide">Shareable</div>
                    </div>
                </div>
                <div class="absolute inset-x-auto top-20">
                    <img :src="tickettop">
                    <div class="absolute inset-x-7 top-6">
                        <img :src="barbell">
                    </div>
                    <div class="absolute left-7 top-16">
                        <div class="text-white text-2xl font-bold tracking-wide">5 PASSES</div>
                    </div>   
                    <div class="absolute right-7 top-14" @click="addCart(2850)">
                    <ion-icon color="light" class="text-5xl my-auto" :icon="addCircleSharp"></ion-icon>
                    </div>
                </div> 
            </ion-slide>
            <ion-slide>
                <div class="absolute top-20">
                    <img :src="ticketbot">
                    <div class="absolute left-6 top-40">
                        <div class="text-black text-left text-xs tracking-wide pt-4">Price</div>
                        <div class="text-black text-left text-2xl font-bold tracking-wide pb-3">Php 4,750</div>
                        <div class="text-black text-left text-xs tracking-wide">Expiration</div>
                        <div class="text-black text-left text-2xl font-bold tracking-wide pb-3">45 days</div>
                        <div class="text-black text-left text-xs tracking-wide">Pack</div>
                        <div class="text-black text-left text-2xl font-bold tracking-wide pb-3">5-Pack</div>
                        <div class="text-black text-left text-xs tracking-wide">Mode</div>
                        <div class="text-black text-left text-2xl font-bold tracking-wide">Shareable</div>
                    </div>
                </div>
                <div class="absolute inset-x-auto top-20">
                    <img :src="tickettop">
                    <div class="absolute inset-x-7 top-6">
                        <img :src="biker">
                    </div>
                    <div class="absolute left-7 top-16">
                        <div class="text-white text-2xl font-bold tracking-wide">5 PASSES</div>
                    </div>   
                    <div class="absolute right-7 top-14" @click="addCart(4750)">
                    <ion-icon color="light" class="text-5xl my-auto" :icon="addCircleSharp"></ion-icon>
                    </div>
                </div>            
            </ion-slide>
            <ion-slide>
                <div class="absolute top-20">
                    <img :src="ticketbot">
                    <div class="absolute left-6 top-40">
                        <div class="text-black text-left text-xs tracking-wide pt-4">Price</div>
                        <div class="text-black text-left text-2xl font-bold tracking-wide pb-3">Php 1,900</div>
                        <div class="text-black text-left text-xs tracking-wide">Expiration</div>
                        <div class="text-black text-left text-2xl font-bold tracking-wide pb-3">45 days</div>
                        <div class="text-black text-left text-xs tracking-wide">Pack</div>
                        <div class="text-black text-left text-2xl font-bold tracking-wide pb-3">2-Pack</div>
                        <div class="text-black text-left text-xs tracking-wide">Mode</div>
                        <div class="text-black text-left text-2xl font-bold tracking-wide">Shareable</div>
                    </div>
                </div>
                <div class="absolute inset-x-auto top-20">
                    <img :src="tickettop">
                    <div class="absolute inset-x-7 top-6">
                        <img :src="barbell">
                    </div>
                    <div class="absolute left-7 top-16">
                        <div class="text-white text-2xl font-bold tracking-wide">5 PASSES</div>
                    </div>   
                    <div class="absolute right-7 top-14" @click="addCart(1900)">
                    <ion-icon color="light" class="text-5xl my-auto" :icon="addCircleSharp"></ion-icon>
                    </div>
                </div> 
            </ion-slide>
        </ion-slides>
        <div class="text-center tracking-widest w-full">
            Entitles you to 5 PERIGON rides
        </div>
        <div class="bg-white fixed bottom-0 w-full py-5 px-7"> 
            <div class="flex justify-between">
                <div class="flex justify-start">
                    <div class="flex flex-col my-auto">
                        <div class="text-xs text-gray-400">Total</div>
                        <div class="font-bold tracking-widest text-black"> {{ displayedTotal }}</div>
                    </div>
                </div>
                <div class="flex justify-end my-auto">
                    <ion-button size="large" expand="block" :color="total ? 'primary' : 'dark'" class="grow font-bold rounded-lg tracking-widest text-md h-14 border-black border-solid" :disabled="total ? false : true" @click="checkOut">CHECKOUT</ion-button>
                </div>
            </div>
        </div>
    </header-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { IonButton, IonSlides, IonSlide, IonIcon, useIonRouter } from '@ionic/vue'
import { addCircleSharp } from 'ionicons/icons'

export default defineComponent({
    components: {
        IonButton,
        IonSlides,
        IonSlide,
        IonIcon,
    },

    data() {
        return {
            tickettop: "/assets/img/tickettop.png",
            ticketbot: "/assets/img/ticketbot.png",
            biker: "/assets/img/biker.png",
            barbell: "/assets/img/barbell.png",
            addCircleSharp,
            
            displayedTotal: "0",
            total: 0,
            ptotal: 0,
        };
    },

    setup() {
        const ionRouter = useIonRouter();
        const slideOpts = {
            initialSlide: 1,
            speed: 400,
            slidesPerView: 1.4,
            centeredSlides: true,
        };

        return { 
            slideOpts,
            ionRouter,
        }
    },
    methods: {
        addCart(value: any) {
            this.total += value;
            this.displayedTotal = "PHP " + this.total;
            if (value === 2850) {
                this.ptotal += 3;
            }
            if (value === 4750) {
                this.ptotal += 5;
            }
            if (value === 1900) {
                this.ptotal += 2;
            }
        },
        checkOut() {
            this.ionRouter.navigate("/checkout/"+ this.ptotal +'/'+ this.total, 'forward', 'replace');
        },
    },
})
</script>
<style scoped>
ion-slides {
    height: 620px;
}
</style>