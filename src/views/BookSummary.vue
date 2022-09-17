<template>
    <header-layout page-title="Book Summary" page-default-back-link="/passes">
        <div class="p-4">
            <div class="p-4">
                <div class="py-4 text-sm text-center tracking-widest">You are about to book 3 seat(s) for this class. Kindly enter the full name of your guest/s below.</div>
                <div class="flex justify-center mt-5">
                    <ion-item-group class="justify-evenly bg-white rounded-md w-full shadow-md px-4">
                        <div class="flex justify-between py-4">
                            <ion-label class="text-sm tracking-widest">Sesssion</ion-label>
                            <ion-label class="font-bold tracking-wider">45 MINUTES</ion-label>
                        </div>
                        <div class="border-solid border-b"></div>
                        <div class="flex justify-between py-4">
                            <ion-label class="text-sm tracking-widest">Date</ion-label>
                            <ion-label class="font-bold tracking-wider">MAY 05, 2020</ion-label>
                        </div>
                        <div class="border-solid border-b"></div>
                        <div class="flex justify-between py-4 ">
                            <ion-label class="text-sm tracking-widest">Time</ion-label>
                            <ion-label class="font-bold tracking-wider">12:00 PM</ion-label>
                        </div>
                    </ion-item-group>
                </div>
                <div class="py-4 font-bold text-xl tracking-wider">GUEST NAME</div>
                <div class="flex flex-col m-auto">
                    <ion-item color="light" class="rounded-xl shadow-md w-full mb-4" lines="none">
                        <ion-label position="stacked" class="text-xs">Guest 1</ion-label>
                        <ion-input type="text">Juan Dela Cruz</ion-input>
                    </ion-item>
                    <ion-item color="light" class="rounded-xl shadow-md w-full" lines="none">
                        <ion-label position="stacked" class="text-xs">Guest 2</ion-label>
                        <ion-input type="text">Karl Miranda</ion-input>
                    </ion-item>
                </div>
            </div>
        </div>   
        <div class="bg-white fixed bottom-0 w-full px-7 h-24 pt-5">
            <ion-button fill="clear" expand="block" class="flex justify-center bg-black rounded-lg text-white font-bold " @click="openModal">BOOK NOW</ion-button>
        </div>
    </header-layout>
</template>

<script lang="ts">
import { useIonRouter, modalController, IonButton, IonItem, IonItemGroup, IonLabel, IonInput, } from '@ionic/vue';
import  ModalView  from '../components/modals/BookModalView.vue';
import { defineComponent } from 'vue'

export default defineComponent({
    components: {
        IonButton,
        IonItem,
        IonItemGroup,
        IonLabel,
        IonInput,
    },

    setup() {
        const IonRouter = useIonRouter();

        return {
            IonRouter,
        };
    },

    methods:{
        
        async openModal() {
            const modal = await modalController.create({
            component: ModalView,
            });
            return modal.present();
        },
    },
})
</script>
