<template>
    <ion-content :scroll-y="false" class="ion-padding">
            <div class="text-center px-4">
                <div class="font-extrabold text-2xl pb-4 tracking-wide">SCROLL DOWN</div>
                <p class="pb-4">Before you can proceed you must scroll to accept the latest Terms and Privacy Policy</p>
                <ion-button fill="clear" expand="block" class="flex justify-center bg-black rounded-lg text-white font-bold text-sm" @click="gotIT">OKAY, GOT IT</ion-button>
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