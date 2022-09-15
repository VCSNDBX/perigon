<template>
    <register-layout pageTitle="Verify Account" pageDefaultBackLink="/tos">
        <div class="flex flex-col p-4">
            <div class="p-8">
                <div class=" mb-10">
                    <p class="text-center tracking-wider">
                        Thank you for registering with us!  We have sent a verification code to your email <span class="font-bold">{{ email }}</span>
                        <br /><br />
                        Kindly check your email to verify your account.</p>
                </div>
                <ion-item class="rounded-lg text-center tracking-widest font-bold border-2" lines="none">
                    <ion-input type="email" v-model="code"></ion-input>
                </ion-item>
                <ion-button fill="clear" expand="block" class="bg-black rounded-lg mt-3 text-white font-bold" @click="goVerify">VERIFY CODE</ion-button>
                <div class="mt-10 text-center tracking-wider">
                    If you cannot locate the verification email in your main inbox, please check your junk or spam mailbox. If you still can’t locate it, <span class="font-bold underline">Resend Code</span>
                </div>
            </div>
        </div>
    </register-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonInput, IonItem, IonButton, useIonRouter, } from "@ionic/vue";
import { arrowBackSharp } from 'ionicons/icons';

export default defineComponent({
    name: "VerifyAccount",
    components: {
        IonButton,
        IonInput,
        IonItem,
    },

    data() {
        return {
            email: "samantha.nicole@gmail.com",
            code: "982882",
            };
        },

    setup() {

        const ionRouter = useIonRouter();

        return {
            ionRouter,
            arrowBackSharp,
        }
    },
    methods: {
        goVerify() {
            this.ionRouter.navigate("/dashboard", 'forward', 'replace');
        },
        backToStart() {
            this.$router.go(-1)
        }
    },
})
</script>
