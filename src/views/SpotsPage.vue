<template>
    <header-layout page-title="PERIGON 45" page-default-back-link="/class">
        <!-- Legends -->
        <div class="backdroundthis h-full">
        <div class="flex justify-center py-8">
            <div class="flex">
                <div class="flex mr-8">
                    <div class="rounded-full border-2 border-white mr-2" style="height: 14px; width: 14px;"></div>
                    <ion-label class="align-self-center">Available</ion-label>
                </div>
                <div class="flex">
                    <div class="rounded-full border-2 border-black bg-black mr-2" style="height: 14px; width: 14px;"></div>
                    <ion-label class="align-self-center">Booked</ion-label>
                </div>
            </div>
        </div>
        <!-- Spots -->
        <div class="grid grid-cols-3  mx-14">
            <div class="grid grid-cols-3 gap-6">
                <div class="rounded-full border-2 border-white" style="height: 26px; width: 26px;"></div>
                <div class="rounded-full border-2 border-white" style="height: 26px; width: 26px;"></div>
                <div class="rounded-full border-2 border-white" style="height: 26px; width: 26px;"></div>
                <div class="rounded-full border-2 border-black bg-black" style="height: 26px; width: 26px;"></div>
                <div class="rounded-full border-2 border-white" style="height: 26px; width: 26px;"></div>
                <div class="rounded-full border-2 border-white" style="height: 26px; width: 26px;"></div>
                <div class="rounded-full border-2 border-black bg-black" style="height: 26px; width: 26px;"></div>
                <div class="rounded-full border-2 border-white" style="height: 26px; width: 26px;"></div>
                <div class="rounded-full border-2 border-white" style="height: 26px; width: 26px;"></div>
                <div class="rounded-full border-2 border-black bg-black" style="height: 26px; width: 26px;"></div>
                <div :class="`rounded-full border-2 ${bnone ? bnone : ''}`" style="height: 26px; width: 26px;" @click="markThis"></div>
                <div class="rounded-full border-2 border-white" style="height: 26px; width: 26px;"></div>
                <div class="rounded-full border-2 border-black bg-black" style="height: 26px; width: 26px;"></div>
                <div :class="`rounded-full border-2 ${bnone ? bnone : ''}`" style="height: 26px; width: 26px;" @click="markThis"></div>
                <div style="height: 26px; width: 26px;"></div>
                <div class="rounded-full border-2 border-black bg-black" style="height: 26px; width: 26px;"></div>
                <div :class="`rounded-full border-2 ${bnone ? bnone : ''}`" style="height: 26px; width: 26px;" @click="markThis"></div>
                <div style="height: 26px; width: 26px;"></div>
                <div class="rounded-full border-2 border-white" style="height: 26px; width: 26px;"></div>
                <div class="rounded-full border-2 border-white" style="height: 26px; width: 26px;"></div>
                <div style="height: 26px; width: 26px;"></div>
                <div class="rounded-full border-2 border-white" style="height: 26px; width: 26px;"></div>
                <div class="rounded-full border-2 border-white" style="height: 26px; width: 26px;"></div>
                <div class="rounded-full border-2 border-white" style="height: 26px; width: 26px;"></div>
                <div class="rounded-full border-2 border-white" style="height: 26px; width: 26px;"></div>
                <div class="rounded-full border-2 border-white" style="height: 26px; width: 26px;"></div>
                <div class="rounded-full border-2 border-white" style="height: 26px; width: 26px;"></div>
                <div class="rounded-full border-2 border-white" style="height: 26px; width: 26px;"></div>
                <div style="height: 26px; width: 26px;"></div>
            </div>
            <div>
                <!-- WHITE SPACE -->
            </div>
            <div class="grid grid-cols-1">
                <div class="rounded-full border-2 border-white justify-self-center" style="height: 26px; width: 26px;"></div>
                <div style="height: 1px;"></div>
                <div class="rounded-full border-2 border-white justify-self-center" style="height: 26px; width: 26px;"></div>
                <div style="height: 3px;"></div>
                <div style="height: 3px;"></div>
                <img class="object-cover rounded-full border-2 border-black my-auto justify-self-center" style="height: 62px; width: 62px;" :src="profileDisplay" alt="Profile image" />
                <div style="height: 3px;"></div>
                <div class="rounded-full border-2 border-white self-center justify-self-center" style="height: 26px; width: 26px;"></div>
                <div></div>
            </div>
        </div>
        <!-- FOOTER -->
        <div class="bg-white fixed bottom-0 w-full px-7 h-36 p-4">
            <div class="flex justify-between pb-1">
                <div class="">
                    <div class="text-xs">Passes</div>
                    <div class="font-bold">5 LEFT</div>
                </div>
                <ion-button fill="clear" expand="block" class="flex justify-center bg-black rounded-lg text-sm text-white font-bold h-12" @click="bookSummary">CONFIRM SPOT(S)</ion-button>
            </div>
            <div class="grid grid-rows-2 grid-flow-col">
                <div class="text-xs">Session</div>
                <div class=" font-bold">45 MINS</div>
                <div class="text-xs">Date</div>
                <div class="font-bold">May 15</div>
                <div class="text-xs">Time</div>
                <div class="font-bold">12:00 PM</div>
            </div>
        </div>  
    </div>
    </header-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { IonButton, IonLabel, useIonRouter, } from '@ionic/vue'

export default defineComponent({

    components: {
        IonButton,
        IonLabel,
    },

    data() {
        return {
            profileDisplay: "/assets/img/coach1.png",
            bwhite: true,
            bnone: 'bg-none',
        };
    },

    setup() {
        const ionRouter = useIonRouter();

        return {
            ionRouter,
        };
    },
    methods: {
        markThis() {
            if (this.bnone == 'bg-none') {
                this.bnone = "bg-white border-black";
            } else {
                this.bnone = "bg-none";
            }
        },

        bookSummary() {
            this.ionRouter.navigate("/booksummary", 'forward', 'replace');
        },
    },
})
</script>

<style>
ion-content .backdroundthis {
    background: #595959;
}
</style>