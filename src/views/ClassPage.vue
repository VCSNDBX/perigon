<template>
    <header-layout page-title="Book a Class" page-default-back-link="/dashboard">
        <div class="flex justify-center mt-5">
            <ion-item-group class="flex justify-evenly bg-white rounded-md w-full mx-7 shadow-md">
                <ion-button fill="clear" expand="block" class="bg-white rounded-lg text-black font-bold ">SAN JUAN</ion-button>
                <div class="border-solid border-r"></div>
                <ion-button fill="clear" expand="block" class="bg-white rounded-lg text-black">ALABANG</ion-button>
            </ion-item-group>
        </div>
        <div class="my-4 mx-7 text-sm ">
            <div>2/F Santolan Town Plaza - 276 Col. Bonny Serrano Avenue, San Juan, Metro Manila - <span>Direct Map</span></div>
        </div>
        <div class="my-4 flex justify-center">
            <ion-datetime presentation="date" class="bg-white rounded-md shadow-md"></ion-datetime>
        </div>
        <div v-for="(trainierCard, index) in trainingCards" :key="index" :virtualIndex="trainierCard" class="bg-white h-48 bg-white rounded-md m-5 shadow-md">
            <div class="flex justify-between px-6 py-3">
                <img class="object-cover w-12 h-12 my-auto rounded-full" :src="trainierCard.profileDisplay" alt="Profile image" />
                <div class="m-auto">
                    <div class="text-2xl font-extrabold tracking-wider">{{trainierCard.coach}}</div>
                </div>
                <ion-button fill="clear" class="bg-black rounded-md text-white font-bold text-lg w-32 h-8 my-auto" @click="bookClass(trainierCard.bookStatus)">{{trainierCard.bookStatus}}</ion-button>
            </div>
            <div class="px-6 mx-5 border-black border-t-2 "></div>
            <div class="flex justify-between px-6 mt-5">
                    <div class="font-extrabold tracking-wider">PERIGON 45</div>
            </div>
            <div class="px-6 mt-4">
                <div class="pb-4 grid grid-rows-2 grid-flow-col">
                    <div class="text-sm">Session</div>
                    <div class=" font-bold">{{trainierCard.duration}} MINS</div>
                    <div class="text-sm">Time</div>
                    <div class="font-bold">{{trainierCard.time}}</div>
                    <div class="text-sm">Vacancy</div>
                    <div class="font-bold text-gray-400">{{trainierCard.vacancy}}</div>
                </div>
            </div>
        </div>
    </header-layout>
 </template>

<script lang="ts">
import { IonDatetime, IonItemGroup, IonButton, useIonRouter, modalController } from '@ionic/vue';
import { defineComponent } from 'vue';
import  ModalView  from '../components/ModalView.vue';

export default defineComponent({

    components: { 
        IonDatetime, IonItemGroup, IonButton,
    },

    data(){
        return{
            
            pin: "/assets/img/pin.png",

            trainingCards: [
                {
                    profileDisplay: "/assets/img/coach1.png",
                    coach: 'MARK',
                    duration: 45,
                    time: '12:00 PM',
                    vacancy: '3 LEFT',
                    bookStatus: 'BOOK'
                },
                {
                    profileDisplay: "/assets/img/coach1.png",
                    coach: 'FOLD',
                    duration: 60,
                    time: '5:00 PM',
                    vacancy: 'FULL',
                    bookStatus: 'WAITLIST'
                }
            ]
        };
    },
    setup() {
        const ionRouter = useIonRouter();

        return {
            ionRouter,
        };
    },
    methods:{
        async openModal() {
            const modal = await modalController.create({
            component: ModalView,
            });
            return modal.present();
        },
        
        bookClass(bookStatus: string){
            if(bookStatus == 'WAITLIST'){
                this.openModal();
            }else{
                this.ionRouter.navigate("/class/", "forward", "replace");
            }
        },
    }
})
</script>