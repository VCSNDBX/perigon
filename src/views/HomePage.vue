<template>
    <home-board-top>
        <!-- container -->
        <div class="flex justify-between items-center mx-auto w-screen px-7 py-5">
            <div class="text-1xl font-extrabold ">
                UPCOMING CLASSES
            </div>
            <div class="text-sm font-extrabold" style="color: #828282">
                View All
            </div>
        </div>
        <div v-for="(trainierCard, index) in trainingCards" :key="index" :virtualIndex="trainierCard" class="bg-white h-48 bg-white rounded-lg m-5 mt-0 shadow-md">
            <div class="flex ">
                <img class="object-cover w-42 h-48 rounded-tl-lg rounded-bl-lg rounded-rb-none my-auto" :src="trainierCard.profileDisplay" alt="Profile image" />
                <div class="absolute ml-2 pt-32 ">
                    <div class="text-2xl text-white font-extrabold tracking-wider">{{trainierCard.coach}}</div>
                    <div class="text-lg text-white font-extrabold tracking-wider">{{trainierCard.min}} MINUTES</div>
                </div>
                <div class="grid pl-4 w-full py-6">
                    <div class="text-sm">Date</div>
                    <div class="text-sm font-extrabold">{{trainierCard.date}}</div>
                    <div class="text-sm">Time</div>
                    <div class="text-sm font-extrabold">{{trainierCard.time}}</div>
                    <div class="text-sm">Location</div>
                    <div class="text-sm font-extrabold">{{trainierCard.loc}}</div>
                </div>
            </div>
        </div>
        <div class="flex p-5 gap-2">
            <ion-icon class="w-14 h-14 rounded-full border-black border-2" :icon="addSharp"></ion-icon>
            <img class="object-cover w-16 h-16 my-auto rounded-full" :src="coach2" alt="Profile image" />
            <img class="object-cover w-16 h-16 my-auto rounded-full" :src="coach3" alt="Profile image" />
            <img class="object-cover w-16 h-16 my-auto rounded-full" :src="coach1" alt="Profile image" />
        </div>
    </home-board-top>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { addSharp } from 'ionicons/icons';

export default defineComponent({

    components: {
    },

    data(){
        return{

            coach1: "/assets/img/coach1.png",
            coach2: "/assets/img/coach2.png",
            coach3: "/assets/img/coach3.png",

            trainingCards: [
                {
                    profileDisplay: "/assets/img/coach2.png",
                    coach: 'YTLE',
                    min: 45,
                    date: 'SUNDAY, AUG 25',
                    time: '12:00 PM',
                    loc: 'SAN JUAN',
                },
                {
                    profileDisplay: "/assets/img/coach3.png",
                    coach: 'RIO',
                    min: 45,
                    date: 'SUNDAY, AUG 25',
                    time: '12:00 PM',
                    loc: 'SAN JUAN',
                },
            ]
        };
    },
    
    setup() {
        return {
            addSharp,
        };
    },
})
</script>
