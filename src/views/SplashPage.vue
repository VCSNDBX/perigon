<template>
   <ion-page class="bg-black text-white">
        <div class="h-full flex">
            <div class="m-auto">
                <div class="text-5xl font-bold tracking-wide text-center">
                    PERIGON
                </div>
                <div class="text-base font-normal tracking-wide text-center">
                    The Undercover Athletes
                </div>
            </div>
        </div>
   </ion-page> 
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { IonPage } from "@ionic/vue";

export default defineComponent({
    components: { IonPage },
    
    mounted() {
    setTimeout(() => {
        this.router.replace("/landing");
        }, 1000);
    },
     
     setup() {
        const router = useRouter();
        return { router };
     },
})
</script>
