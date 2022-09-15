<template>
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
                <div class="bg-white border-2 border-black border-solid rounded-full w-12 h-12 flex">
                    <ion-icon color="secondary" :icon="shieldCheckmarkSharp" class="m-auto"></ion-icon>
                </div>
                <div class="text-center">Account Details</div>
            </div>
            <div class="border-t-2 border-dashed w-full my-auto mt-6"></div>
            <div class="grid place-items-center">
                <div class="bg-white border-2 border-black border-solid rounded-full w-12 h-12 flex">
                    <ion-icon color="secondary" :icon="checkmarkSharp" class="m-auto"></ion-icon>
                </div>
                <div class="text-center">Term and Conditions</div>
            </div>
        </div>
    </div>
    <div class="py-4 font-bold text-xl tracking-wider">PERSONAL INFORMATION</div>
    <form>
        <ion-item class="rounded-md border border-solid border-gray-300 mb-5" lines="none">
            <ion-label position="stacked" color="dark">First Name</ion-label>
            <ion-input class="text-sm" type="text" v-model="personalInformation.firstName"></ion-input>
        </ion-item>
        <ion-item class="rounded-md border border-solid border-gray-300 mb-5" lines="none">
            <ion-label position="stacked" color="dark">Last Name</ion-label>
            <ion-input class="text-sm" type="text" v-model="personalInformation.lastName"></ion-input>
        </ion-item>
        <ion-item class="rounded-md border border-solid border-gray-300 mb-5" lines="none">
            <ion-label position="stacked" color="dark">Birtdate</ion-label>
            <ion-input class="text-sm" type="date" v-model="personalInformation.birthdate"></ion-input>
        </ion-item>
        <ion-item class="rounded-md border border-solid border-gray-300 mb-5" lines="none">
            <ion-label position="stacked" color="dark">Mobile Number</ion-label>
            <ion-input class="text-sm" type="tel" v-model="personalInformation.mobileNumber"></ion-input>
        </ion-item>
        <div class="py-4 font-bold text-xl tracking-wider">EMERGENCY CONTACT INFORMATION</div>
        <ion-item class="rounded-md border border-solid border-gray-300 mb-5" lines="none">
            <ion-label position="stacked" color="dark">Full Name</ion-label>
            <ion-input class="text-sm" type="text" v-model="personalInformation.efullName"></ion-input>
        </ion-item>
        <ion-item class="rounded-md border border-solid border-gray-300 mb-5" lines="none">
            <ion-label position="stacked" color="dark">Mobile Number</ion-label>
            <ion-input class="text-sm" type="tel" v-model="personalInformation.emobileNumber"></ion-input>
        </ion-item>
        <ion-button fill="clear" expand="block" class="bg-black rounded-md px-16 text-white font-bold" @click="goToDetails">Next</ion-button>
    </form>
    <div @click="hasAccount" class="text-center text-xs font-bold tracking-wider py-4 underline">Already signed up?</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonInput, IonLabel, IonItem, IonButton, useIonRouter, IonIcon } from "@ionic/vue";
import { personSharp, shieldCheckmarkSharp, checkmarkSharp } from 'ionicons/icons';

export default defineComponent({
    name: "PersonalInformation",
    components: {
        IonInput,
        IonLabel,
        IonItem,
        IonButton,
        IonIcon,
    },

    data() {
        return {
            personalInformation: {
                firstName: "Samantha Nicole",
                lastName: "Chavez",
                birthdate: "11-16-1990",
                email: "samantha.nicole@email.com",
                mobileNumber: "9123456789",
                efullName: "Larry Boy Santos",
                emobileNumber: "9123456789",
                },
            };
        },

    setup() {

        const ionRouter = useIonRouter();

        return {
            ionRouter,
            personSharp,
            shieldCheckmarkSharp,
            checkmarkSharp,
        };
    },
    methods: {
        goToDetails() {
        this.ionRouter.navigate("/accountdetails", 'forward', 'replace');
        },
        hasAccount() {
        this.ionRouter.navigate("/login");
        },
    },
})
</script>
>
