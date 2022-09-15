<template>
    <register-layout pageTitle="Create Account" pageDefaultBackLink="/details">
        <div class="flex flex-col p-4">
            <div class="p-8">
                <p class="text-center font-normal tracking-wider">
                    First base? We want to get to know you better. Sign up for an account and we'll take care of the rest.</p>
            </div>
            <div class="px-4">
        <div class="flex justify-around">
            <div class="grid place-items-center">
                <div class="bg-black rounded-full w-12 h-12 flex">
                    <ion-icon color="primary" :icon="personSharp" class="m-auto"></ion-icon>
                </div>
                <div class="text-center font-bold">Personal Information</div>
            </div>
            <div class="border-t-2 border-dashed w-full my-auto mt-6"></div>
            <div class="grid place-items-center ">
                <div class="bg-black rounded-full w-12 h-12 flex">
                    <ion-icon color="primary" :icon="shieldCheckmarkSharp" class="m-auto"></ion-icon>
                </div>
                <div class="text-center font-bold">Account Details</div>
            </div>
            <div class="border-t-2 border-dashed w-full my-auto mt-6"></div>
            <div class="grid place-items-center">
                <div class="bg-black rounded-full w-12 h-12 flex">
                    <ion-icon color="primary" :icon="checkmarkSharp" class="m-auto"></ion-icon>
                </div>
                <div class="text-center font-bold">Term and Conditions</div>
            </div>
        </div>
        </div>
        <div class="py-4 font-bold text-xl tracking-wider">TERMS AND CONDITIONS</div>
        <div>
            <div class="text-sm leading-6 tracking-wider font-normal justify-self-stretch">
                The following terms and conditions shall be known as the "Agreement" and shall govern the use of PERIGON's website www.perigon.co (the "Website") and the PERIGON Mobile Application (the "App" ), the purchase of PERIGON classes, cancellation of purchase of PERIGON classes, registration for classes, purchase of merchandise, communication, with PERIGON, and use of and attendance at PERIGON's studios.<br /><br />
                These Terms of Service incorporates by reference PERIGON's Privacy Policy.<br /><br />
                The following terms and conditions shall be known as the "Agreement" and shall govern the use of PERIGON's website www.perigon.co (the "Website") and the PERIGON Mobile Application (the "App" ), the purchase of PERIGON classes, cancellation of purchase of PERIGON classes, registration for classes, purchase of merchandise, communication, with PERIGON, and use of and attendance at PERIGON's studios.<br /><br />
                These Terms of Service incorporates by reference PERIGON's Privacy Policy.
            </div>

            <ion-button fill="clear" expand="block" class="bg-black rounded-md px-16 text-white font-bold mt-14 mb-16" @click="iAgree">I ACCEPT
            </ion-button>
        </div>
        </div>
    </register-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonButton, useIonRouter, IonIcon, } from "@ionic/vue";
import { personSharp, shieldCheckmarkSharp, checkmarkSharp } from 'ionicons/icons';

export default defineComponent({
    name: "TermsAndCondition",
    components: {
        IonButton,
        IonIcon,
    },
    setup() {

        const ionRouter = useIonRouter();

        return {
            personSharp,
            shieldCheckmarkSharp,
            checkmarkSharp,
            ionRouter,
        }
    },
    methods: {
        iAgree() {
            this.ionRouter.navigate("/verify");
        },
    },
})
</script>
