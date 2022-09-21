<template>
    <ion-content :scroll-y="false" class="ion-padding">
        <div class="text-center px-4">
            <div class="font-extrabold text-2xl pb-4 tracking-wide">UH OH...</div>
            <p class="pb-4">Looks like you don't have any passes yet to use. Tap the icon below to purchase.</p>
            <ion-button fill="clear" expand="block" class="flex justify-center bg-black rounded-lg text-white font-bold text-sm" @click="gotIT">OKAY, I UNDERSTAND</ion-button>
        </div>
    </ion-content>  
  </template>
  
  <script lang="ts">
  import { IonContent, IonButton, modalController, useIonRouter, } from "@ionic/vue";
  import { defineComponent } from "vue";
  
  export default defineComponent({
    name: "ModalView",
  
    components: { 
      IonContent, IonButton,
    },
  
    props: {
      content: { type: String },
    },
  
    data() {
          return {
          };
      },
    setup() {
      const IonRouter = useIonRouter();
  
      const closeModal = () => {
        modalController.dismiss();
      };
  
      return { 
        IonRouter,
        closeModal,
      };
    },
  
    methods:{
  
        gotIT(){
            modalController.dismiss();
        },
    },
  });
  </script>