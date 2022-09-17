<template>
  <ion-content :scroll-y="false" class="ion-padding">
      <div :class="`absolute ${waitList ? true : 'invisible' }`">
      <div class="font-bold pb-4 tracking-thin">WAITLIST</div>
      <p class="pb-4 text-sm">This class is already full. No worries! We can waitlist you and book you a seat once it will be available for 1 seat only. Are you sure you want to continue?</p>
      <ion-button fill="clear" expand="block" class="flex justify-center bg-black rounded-lg text-white font-bold text-sm" @click="yesWaitList">YES</ion-button>  
      <ion-button fill="clear" expand="block" class="flex justify-center font-bold text-sm" @click="closeModal">CANCEL</ion-button>
      </div>
      <div :class="`absolute ${showSucc ? false : 'invisible' }`">
      <div class="font-bold pb-4 tracking-thin">Waitlist Successful!</div>
      <p class="pb-4 text-sm">You have successfully waitlisted on this class</p>
      <ion-button fill="clear" expand="block" class="flex justify-center bg-black rounded-lg text-white font-bold text-sm" @click="waitListSuccess">BACK TO HOME</ion-button>
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
            waitList: true,
            showSucc: false,
        };
    },
  setup() {
    const ionRouter = useIonRouter();

    const closeModal = () => {
      modalController.dismiss();
    };

    return { 
      ionRouter,
      closeModal,
    };
  },

  methods:{
    yesWaitList(){
      this.showSucc = true;
      this.waitList = false;
    },

    waitListSuccess(){
      modalController.dismiss();
      this.ionRouter.navigate("/dashboard", "forward", "replace");
    },
  },
});
</script>

<style>
  ion-modal {
    --background: rgba(255, 255, 255);
    --width: 80%;
    --height: 30%;
    --border-radius: 16px;
    --box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  }

  ion-modal::part(backdrop) {
    background: rgba(209, 213, 219);
    opacity: 1;
  }
</style>