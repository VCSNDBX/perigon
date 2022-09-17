<template>
    <header-layout page-title="Purchase Summary" page-default-back-link="/passes">
        <div class="p-4">
            <div class="p-4">
                <div class="py-4 text-sm text-center tracking-widest">You’re about to purchase the following pack/s:</div>
                <ion-item-group class="rounded-lg border-2">
                    <ion-item lines="inset">
                        <ion-label class="-mr-32">Pack</ion-label>
                        <ion-label class="ion-text-right font-bold">{{ pack }} Pack ({{ pack }} passes)</ion-label>
                    </ion-item>
                    <ion-item lines="none">
                        <ion-label class="-mr-32">Total</ion-label>
                        <ion-label class="ion-text-right font-bold">{{ total }}</ion-label>
                    </ion-item>
                </ion-item-group>
                <div class="py-4 font-bold text-xl tracking-wider">PAYMENT</div>
                <ion-item-group class="rounded-lg border-2">
                    <div class="text-xs pl-4 pt-2">Payment Method</div>
                    <ion-item lines="none">
                        <ion-select class="text-center" interface="action-sheet" placeholder="Cash or Cheque (Over the counter)">
                            <ion-select-option  value="Cash or Cheque (Over the counter)">Cash or Cheque (Over the counter)</ion-select-option>
                        </ion-select>
                    </ion-item>      
                </ion-item-group>
            </div>
        </div>   
        <div class="bg-white fixed bottom-0 w-full px-7 h-24 pt-5">
            <ion-button fill="clear" expand="block" class="flex justify-center bg-black rounded-lg text-white font-bold " @click="bookClass">PLACE ORDER</ion-button>
        </div>  
        <!-- <ModalView :modalActive="modalActive">
            <div class="bg-white flex-col justify-center px-8 py-4 mx-14 rounded-lg shadow-md border">
                <div class="font-bold pb-4 tracking-thin">PURCHASE SUCCESSFUL!</div>
                <p class="pb-4 text-sm">You have successfully purchased <span class="font-bold">{{pack}} Pack ({{pack}} passes)</span> that will expires on <span class="font-bold">45 days</span>. Would you like to book a class now?</p>
                <ion-button fill="clear" expand="block" class="flex justify-center bg-black rounded-lg text-white font-bold text-sm">BOOK NOW</ion-button>  
                <ion-button fill="clear" expand="block" class="flex justify-center font-bold text-sm" @click="maybeLater">Maybe Later</ion-button> 
            </div>
        </ModalView> -->
    </header-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
//import ModalView from "../components/Modalview.vue";
import { IonItem, IonLabel, IonSelectOption, IonItemGroup, IonButton, IonSelect, useIonRouter, } from "@ionic/vue";
import { arrowBackSharp } from 'ionicons/icons';

export default defineComponent({
    name: "PurchaseSummary",
    components: {
        //ModalView,
        IonButton,
        IonItem,
        IonItemGroup,
        IonSelect,
        IonSelectOption,
        IonLabel,
    },

    props: [
        'pack',
        'total',
    ],

    data() {
            
        return {
            };
        },

    setup() {
        const ionRouter = useIonRouter();
        const modalActive = ref(false);
        const toggleModal = () => {
            modalActive.value = !modalActive.value;
        };

        return {
            ionRouter,
            arrowBackSharp,
            modalActive,
            toggleModal,
        }
    },
    methods: {
        // errors with custom modal. Skipping for now. (try ion-toast)
        bookClass() {
            this.ionRouter.navigate("/class", 'forward', 'replace');
        },

        maybeLater() {
            this.ionRouter.navigate("/dashboard", 'forward', 'replace');
        },
    },
})
</script>