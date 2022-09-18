<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <div class="bg-black h-64">
                <div class="flex gap-4 w-full h-full px-6 -mt-13">
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
               <div class="flex my-auto w-full"> 
                    <div class="text-xs pb-2">
                        Next class in:
                        <div class="grid gap-4 grid-flow-col auto-col-3 text-center ">
                            <div class="text-2xl font-bold my-auto">00</div>
                            <div class="text-2xl font-bold my-auto">:</div>
                            <div class="text-2xl font-bold my-auto">01</div>
                            <div class="text-2xl font-bold my-auto">:</div>
                            <div class="text-2xl font-bold my-auto">40</div>
                        </div>
                        <div class="grid gap-11 grid-flow-col auto-col-3 text-center ">
                            <div class="text-sm font-bold my-auto">Days</div>
                            <div class="text-sm font-bold my-auto">Hrs</div>
                            <div class="text-sm font-bold my-auto">Mins</div>
                        </div>
                    </div>
                </div>
                <div class="mr-5">
                    <img class="object-cover w-15 h-15 my-auto rounded-full border-solid border-2 border-white outline outline-offset-2 outline-1" :src="coachDisplay" alt="Profile image" />
                    <div class="text-xs font-bold my-auto pt-2">Instructor</div>
                </div>
            </div>

            <slot />
        </ion-content>
    </ion-page> 
</template>
 
<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonContent, useIonRouter, } from '@ionic/vue';

export default defineComponent({
    components: {
        IonPage,
        IonContent,
    },

    data() {
        return {
            firstName: "Samatha",
            lastName: "Nicole",
            profileDisplay: "/assets/img/profile.png",
            coachDisplay: "/assets/img/coach1.png",
            settings: "/assets/img/settings.svg",
            menu: "/assets/img/menu.svg",
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
            this.ionRouter.navigate("/dashboard/home", 'forward', 'replace');
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