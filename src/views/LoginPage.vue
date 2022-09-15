<template>
    <ion-page>
        <ion-content>
            <div class="h-full w-full flex bg-black text-white login-bg justify-center">
                <div class="flex flex-col m-auto px-6">
                    <div class="text-center text-3xl font-bold mb-16 tracking-wide">
                    PERIGON
                    </div>
                    <div class="text-left text-1xl font-bold tracking-widest py-2 px-3">
                    LOGIN ACCOUNT
                    </div>
                    <ion-item class="rounded-t-md" lines="none">
                        <ion-label position="stacked" color="dark">Email</ion-label>
                        <ion-input type="email" v-model="auth.email"></ion-input>
                    </ion-item>
                    <ion-item class="rounded-b-md" lines="none">
                        <ion-label position="stacked" color="dark">Password</ion-label>
                        <ion-input type="password" v-model="auth.password" class="text-3xl"></ion-input>
                    </ion-item>
                    <div class="text-left text-xs font-thin tracking-wider py-3 px-2">Forgot password?</div>
                    <ion-button fill="clear" expand="block" class="bg-black rounded-lg mt-8 text-white font-bold" @click="login">LOGIN</ion-button>
                    <div class="text-center text-xs font-normal tracking-wider py-10" @click="createAccount"> Don't have an account? <span class="font-bold underline">Create account</span></div>
                </div>
            </div>
        </ion-content>
    </ion-page> 
 </template>
 
 <script lang="ts">
 import { defineComponent } from 'vue';
 import { IonLabel, IonInput, IonContent, IonItem, IonButton, useIonRouter, IonPage } from "@ionic/vue";
 
 export default defineComponent({
    components: { IonLabel, IonContent, IonInput, IonItem, IonButton, IonPage },
    data() {
        return {
        auth: {
            email: "samantha.nicole@email.com",
            password: "123456789",
            },
        };
    },
    setup() {
        const ionRouter = useIonRouter();
        
        return {
            ionRouter,
        };
      },

      methods: {
        login() {
        this.ionRouter.navigate("/dashboard", "forward", "replace");
        },
        
        createAccount() {
        this.ionRouter.navigate("/personalinfo", "forward");
        },
    },
 })
 </script>
 