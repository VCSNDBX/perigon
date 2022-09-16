<template>
    <ion-page>
        <ion-content :fullscreen="true" class="h-screen">
            <div class="bg-black h-64">
                <div class="flex gap-4 w-full h-full px-6 -mt-15">
                    <img class="object-cover w-16 h-16 my-auto rounded-full" :src="profileDisplay" alt="Profile image" />
                    <div class="my-auto grow">
                        <div class="text-white font-thin tracking-widest">Hello,</div>
                        <div class="-mb-2 uppercase text-white font-bold text-2xl tracking-widest">{{ firstName }}</div>
                        <div class="uppercase text-white font-bold text-2xl tracking-widest">{{ lastName }}</div>
                    </div>
                    <div class="my-auto flex gap-4">
                        <img :src="settings" />
                        <img :src="menu" />
                    </div>
                </div>
            </div>
            <div class="flex bg-white rounded-lg border border-gray-300 border-solid h-28 mx-6 -mt-16 p-3" >
                <div class="my-auto w-full">
                    <div class="text-xs pb-3">Next class in:</div>
                    <div class="flex justify-between w-full">
                        <div class="text-sm my-auto">No next class avaialble.</div>
                        <div class="flex text-lg font-bold my-auto" @click="bookNow">BOOK NOW
                        <ion-icon class="my-auto" color="black" :icon="chevronForwardSharp" />
                        </div>
                    </div>
                </div>
            </div>
            <slot />
            <ion-tabs>
                <!-- Having problem with header being unclickable using router-outlet -->
                <ion-router-outlet></ion-router-outlet> 
                <ion-tab-bar slot="bottom">
                    <ion-tab-button tab="home" href="/dashboard" id="home-btn">
                    <img :src="home" />
                    <ion-label class="text-xs" color="secondary">Home</ion-label>
                    </ion-tab-button>

                    <ion-tab-button tab="passes" href="/passes" id="passes-btn">
                    <img :src="passes" />
                    <ion-label class="text-xs" >Passes</ion-label>
                    </ion-tab-button>

                    <ion-tab-button class="bg-black" tab="class" href="/dashboard" id="class-btn">
                    <img :src="bike" />
                    <ion-label>Class</ion-label>
                    </ion-tab-button>

                    <ion-tab-button tab="instructor" href="/instructor" id="instr-button">
                    <img :src="instructor" />
                    <ion-label class="text-xs">Instructors</ion-label>
                    </ion-tab-button>

                    <ion-tab-button tab="notification" href="/notification" id="notif-btn">
                    <img :src="notification" />
                    <ion-label class="text-xs">Notification</ion-label>
                    </ion-tab-button>
                </ion-tab-bar>
            </ion-tabs>
        </ion-content>
    </ion-page> 
 </template>
 
 <script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonContent, IonIcon, IonTabs, IonLabel, IonTabBar, IonTabButton, IonRouterOutlet, useIonRouter, } from '@ionic/vue';
import { chevronForwardSharp, } from 'ionicons/icons';

export default defineComponent({
    components: {
        IonIcon,
        IonPage,
        IonContent,
        IonLabel,
        IonTabs,
        IonTabBar,
        IonTabButton,
        IonRouterOutlet,
    },

    data() {
        return {
            firstName: "Samatha",
            lastName: "Nicole",
            profileDisplay: "/assets/img/profile.png",
            settings: "/assets/img/settings.svg",
            menu: "/assets/img/menu.svg",

            home: "/assets/img/home.svg",
            passes: "/assets/img/passes.svg",
            bike: "/assets/img/bike.svg",
            instructor: "/assets/img/instructor.svg",
            notification: "/assets/img/notification.svg",
        };
    },
    setup() {
        const ionRouter = useIonRouter();

        return {
            chevronForwardSharp,
            ionRouter,
        }
    },
    methods: {
    // create modal box with guidelines? if no schedule found
        bookNow() {
            this.ionRouter.navigate("/passes", 'forward', 'replace');
        },
    },
})
</script>