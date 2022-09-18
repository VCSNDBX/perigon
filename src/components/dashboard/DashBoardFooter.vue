<template>
    <ion-page> 
        <ion-tabs>
        <!-- Having problem with header being unclickable using router-outlet --> 
        <ion-router-outlet ></ion-router-outlet>
            <ion-tab-bar class="bottom h-20">
                <ion-tab-button tab="home" href="/dashboard" id="home-btn">
                <img :src="home" />
                <ion-label class="text-xs" color="secondary">Home</ion-label>
                </ion-tab-button>

                <ion-tab-button tab="passes" href="/passes" id="passes-btn">
                <img :src="passes" />
                <ion-label class="text-xs" >Passes</ion-label>
                </ion-tab-button>

                <ion-tab-button class="bg-black" tab="class" href="/dashboard/biker" id="class-btn">
                <img :src="bike" />
                <ion-label>Class</ion-label>
                </ion-tab-button>

                <ion-tab-button tab="instructor" href="/dashboard/instructor" id="instr-button">
                <img :src="instructor" />
                <ion-label class="text-xs">Instructors</ion-label>
                </ion-tab-button>

                <ion-tab-button tab="notification" href="/dashboard/notification" id="notif-btn">
                <img :src="notification" />
                <ion-label class="text-xs">Notification</ion-label>
                </ion-tab-button>
            </ion-tab-bar>
        </ion-tabs>
    </ion-page> 
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonTabs, IonLabel, IonTabBar, IonTabButton, IonRouterOutlet, useIonRouter, } from '@ionic/vue';

    export default defineComponent({
        components: {
            IonPage,
            IonLabel,
            IonTabs,
            IonTabBar,
            IonTabButton,
            IonRouterOutlet,
        },
    
        data() {
            return {
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