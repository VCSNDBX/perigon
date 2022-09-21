<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <div class="bg-black h-64">
                <div class="flex gap-4 w-full h-full px-6 -mt-15">
                    <img class="object-cover w-16 h-16 my-auto rounded-full" :src="profileDisplay" alt="Profile image" />
                    <div class="my-auto grow">
                        <div class="text-white font-thin tracking-widest">Hello,</div>
                        <div class="-mb-2 uppercase text-white font-bold text-2xl tracking-widest">{{ firstName }}</div>
                        <div class="uppercase text-white font-bold text-2xl tracking-widest">{{ lastName }}</div>
                    </div>
                    <div class="my-auto flex gap-4">
                        <img :src="settings" @click="openSettings" />
                        <img :src="menu" @click="openMenu"/>
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
        </ion-content>
    </ion-page> 
</template>
 
<script lang="ts">
import { defineComponent } from 'vue';
import  ModalView  from '../modals/NoPassModalView.vue';
import { IonPage, IonContent, IonIcon, useIonRouter, modalController } from '@ionic/vue';
import { chevronForwardSharp, } from 'ionicons/icons';

export default defineComponent({
    components: {
        IonIcon,
        IonPage,
        IonContent,
    },

    data() {
        return {
            firstName: "Samatha",
            lastName: "Nicole",
            profileDisplay: "/assets/img/profile.png",
            settings: "/assets/img/settings.svg",
            menu: "/assets/img/menu.svg",
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
        async bookNow() {
                const modal = await modalController.create({
                component: ModalView,
                backdropDismiss: false,
                });
                return modal.present();
            },

        buyPasses() {
            this.ionRouter.navigate("/passes", 'forward', 'replace');
        },

        openSettings() {
            // Passes - 0
            // Account Information
            // Change Password
            // Logout
        },
        openMenu() {
            // ??????? Dark and Light modes?
        },
    },
})
</script>