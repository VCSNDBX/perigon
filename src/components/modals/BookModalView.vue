<template>
    <ion-content :scroll-y="false" class="ion-padding">
        <div class="px-4">
        <div class="font-bold pb-4 tracking-thin">BOOK SUCCESSFUL!</div>
        <p class="pb-4 text-sm">You have successfully booked 3 seats for this class.</p>
        <ion-button fill="clear" expand="block" class="flex justify-center bg-black rounded-lg text-white font-bold text-sm" @click="goDashBoard">BACK TO ACCOUNT</ion-button>
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
  
      goDashBoard(){
        modalController.dismiss();
        this.IonRouter.navigate("/dashboard", "forward", "replace");
      },
    },
  });
  </script>