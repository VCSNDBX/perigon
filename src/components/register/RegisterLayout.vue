<template>
    <ion-page>
        <ion-header>
            <ion-toolbar size="large">
                <ion-buttons slot="start">
                    <ion-back-button class="primary" :icon="arrowBackSharp" :default-href="pageDefaultBackLink">
                    </ion-back-button>
                </ion-buttons>
                <ion-title class="text-xl font-bold tracking-widest">{{ pageTitle }}</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true" class="bg-gray-100 h-screen">
            <slot />
        </ion-content>
    </ion-page> 
 </template>
 
 <script lang="ts">
 import { defineComponent } from 'vue';
 import { IonPage, IonHeader, IonTitle, IonToolbar, IonContent, IonButtons, IonBackButton, } from "@ionic/vue";
 import { arrowBackSharp } from 'ionicons/icons';
 
 export default defineComponent({
    components: { IonPage, IonHeader, IonContent, IonTitle, IonToolbar, IonButtons, IonBackButton, },

    props: [
        'pageTitle',
        'pageDefaultBackLink',
    ],

    setup() {
         return {
            arrowBackSharp,
         };
      },
 })
 </script>
 