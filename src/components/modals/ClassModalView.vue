<template>
  <ion-content :scroll-y="false" class="ion-padding">
      <div :class="`text-center px-4 h-full absolute ${waitList ? true : 'invisible' }`">
      <div class="font-extrabold text-2xl pb-3 tracking-wide">WAITLIST</div>
      <p class="pb-2 text-sm">This class is already full. No worries! We can waitlist you and book you a seat once it will be available for 1 seat only. Are you sure you want to continue?</p>
      <ion-button fill="clear" expand="block" class="flex justify-center bg-black rounded-lg text-white font-bold text-sm" @click="yesWaitList">YES</ion-button>  
      <ion-button fill="clear" expand="block" class="flex justify-center font-bold text-sm" @click="closeModal">CANCEL</ion-button>
      </div>
      <div :class="`text-center px-4 h-full mt-5 absolute ${showSucc ? false : 'invisible' }`">
      <div class="font-extrabold text-2xl pb-4 tracking-wide w-auto">Waitlist Successful!</div>
      <p class="pb-4">You have successfully waitlisted on this class</p>
      <ion-button fill="clear" expand="block" class="flex justify-center bg-black rounded-lg text-white font-bold text-sm" @click="goDashBoard">BACK TO HOME</ion-button>
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
      this.ionRouter.navigate("/spots", "forward", "replace");
    },

    goDashBoard(){
      modalController.dismiss();
      this.ionRouter.navigate("/dashboard", "forward", "replace");
    },
  },
});
</script>