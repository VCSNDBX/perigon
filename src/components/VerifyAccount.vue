<template>
    <ion-page>
        <ion-header>
            <ion-toolbar size="large">
                <ion-buttons slot="start" >
                    <ion-back-button class="text-white" :icon="arrowBackSharp" v-if="false">
                    </ion-back-button>
                    <ion-button v-if="true" @click="backToStart">
                        <ion-icon color="primary" slot="icon-only" :icon="arrowBackSharp"></ion-icon>
                    </ion-button>
                </ion-buttons>
                <ion-title class="text-xl font-bold tracking-widest">Verify Account</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true" class="bg-gray-100 h-screen">
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
        </ion-content>
    </ion-page> 
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonTitle, IonItem, IonHeader, IonContent, IonPage, IonToolbar, IonInput, IonBackButton, IonButton, IonButtons, IonIcon, useIonRouter, } from "@ionic/vue";
import { arrowBackSharp } from 'ionicons/icons';

export default defineComponent({
    name: "VerifyAccount",
    components: {
        IonButton,
        IonButtons,
        IonIcon,
        IonTitle,
        IonHeader,
        IonToolbar,
        IonInput,
        IonContent,
        IonPage,
        IonItem,
        IonBackButton,
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
            this.ionRouter.navigate("/login", 'back', 'replace');
        }
    },
})
</script>
