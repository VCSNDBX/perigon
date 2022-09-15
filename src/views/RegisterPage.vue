<template>
    <ion-page>
        <ion-header>
            <ion-toolbar size="large">
                <ion-buttons slot="start">
                    <ion-back-button class="text-white" :icon="arrowBackSharp" v-if="false">
                    </ion-back-button>
                    <ion-button v-if="true">
                        <ion-icon color="primary" slot="icon-only" :icon="arrowBackSharp"></ion-icon>
                    </ion-button>
                </ion-buttons>
                <ion-title class="text-xl font-bold tracking-widest">Create Account</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true" class="bg-gray-100 h-screen">
            <div>
                <div class="p-8">
                    <p class="text-center font-normal tracking-wider">
                        First base? We want to get to know you better. Sign up for an account and we'll take care of the rest.</p>
                </div>
                <div class="flex flex-col p-4">
                    <router-view></router-view>
                </div>
            </div>
        </ion-content>
    </ion-page> 
 </template>
 
 <script lang="ts">
 import { defineComponent } from 'vue';
 import { IonPage, IonHeader, IonTitle, IonToolbar, IonContent, IonButtons, IonBackButton, IonButton, IonIcon } from "@ionic/vue";
 import { arrowBackSharp } from 'ionicons/icons';
 
 export default defineComponent({
    components: { IonPage, IonHeader, IonContent, IonTitle, IonToolbar, IonButtons, IonBackButton, IonButton, IonIcon },


    setup() {
         return {
            arrowBackSharp,
         };
      },
 })
 </script>
 