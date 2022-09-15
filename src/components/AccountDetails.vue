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
                <div class="bg-black rounded-full w-12 h-12 flex">
                    <ion-icon color="primary" :icon="shieldCheckmarkSharp" class="m-auto"></ion-icon>
                </div>
                <div class="text-center font-bold">Account Details</div>
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
    <div class="py-4 font-bold text-xl tracking-wider">ACCOUNT DETAILS</div>
    <form>
        <ion-item class="rounded-md border border-solid border-gray-300 mb-5" lines="none">
            <ion-label position="stacked" color="dark">Email</ion-label>
            <ion-input class="text-sm" type="email" v-model="accountDetails.email"></ion-input>
        </ion-item>
        <ion-item class="rounded-md border border-solid border-gray-300 mb-5" lines="none">
            <ion-label position="stacked" color="dark">Password</ion-label>
            <ion-input class="text-sm" type="password" v-model="accountDetails.password"></ion-input>
        </ion-item>
        <ion-item class="rounded-md border border-solid border-gray-300 mb-5" lines="none">
            <ion-label position="stacked" color="dark">Confirm Password</ion-label>
            <ion-input class="text-sm" type="password" v-model="accountDetails.password">
                <!-- <ion-icon
                    v-if="visibility == 'password'"
                    class="cursor-pointer my-auto"
                    :icon="eyeOffSharp"
                    slot="end"
                    @click="showPassword()"
                    ></ion-icon>
                <ion-icon
                    v-if="visibility == 'text'"
                    class="cursor-pointer my-auto"
                    :icon="eyeSharp"
                    slot="end"
                    @click="hidePassword()"
                ></ion-icon> -->
            </ion-input>
        </ion-item>
        <ion-item class="mb-4"><ion-checkbox slot="start"></ion-checkbox>
        <div class="text-xs break-words">I agree to receive emails from news, announcements and promotional offers from <span class="font-bold">PERIGON</span> via email</div>
        </ion-item>
        <ion-button fill="clear" expand="block" class="bg-black rounded-md px-16 text-white font-bold" @click="goToTAC">Next</ion-button>
    </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonInput, IonLabel, IonItem, IonButton, IonCheckbox, IonIcon, useIonRouter } from "@ionic/vue";
import { personSharp, shieldCheckmarkSharp, checkmarkSharp, eyeOffSharp, eyeSharp } from 'ionicons/icons';

export default defineComponent({
    name: "AccountDetails",
    components: {
        IonInput,
        IonLabel,
        IonItem,
        IonButton,
        IonCheckbox,
        IonIcon,
    },
    data() {
        return {
        accountDetails: {
            email: "samantha.nicole@email.com",
            password: "123456789",
            confirmPassword: "123456789",
        },
        // visibility: 'password',
        };
    },
    setup() {
        const ionRouter = useIonRouter();

        return {
            personSharp,
            shieldCheckmarkSharp,
            checkmarkSharp,
            eyeOffSharp,
            eyeSharp,
            ionRouter,
        }
    },
    methods: {
        goToTAC() {
        this.ionRouter.navigate("/termsandcondition", 'forward', 'replace');
        },

        // showPassword() {
        //     this.visibility = 'text';
        // },
        // hidePassword() {
        //     this.visibility = 'password';
        // }
    },
})
</script>
