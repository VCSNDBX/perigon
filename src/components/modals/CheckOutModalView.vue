<template>
    <ion-content :scroll-y="false" class="ion-padding">
        <div class="text-center px-1">
            <div class="font-bold text-lg pb-4">PURCHASE SUCCESSFUL!</div>
            <p class="pb-4 text-sm">You have successfully purchased <span class="font-bold">5 Pack (5 passes)</span> that will expires on <span class="font-bold">45 days</span>. Would you like to book a class now?</p>
            <ion-button fill="clear" expand="block" class="flex justify-center bg-black rounded-lg text-white font-bold text-sm" @click="bookNow">BOOK NOW</ion-button>  
            <ion-button fill="clear" expand="block" class="flex justify-center font-bold text-sm" @click="maybeLater">Maybe Later</ion-button> 
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
        items: { }
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
        bookNow(){
            modalController.dismiss();
            this.IonRouter.navigate("/class", "forward", "replace");
        },

        maybeLater(){
            modalController.dismiss();
            this.IonRouter.navigate("/dashboard/home", "forward", "replace");
        },
    },
});
</script>