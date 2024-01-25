<script setup lang="ts">
</script>

<script lang="ts">
    export default {
        props: ['showStory','showVoid','introductionShown'],
        data: function() {
            return {
                localShowStory: this.showStory,
                localShowVoid: this.showVoid,
                localIntroductionShown: this.introductionShown,
            }
        },
        methods: {
            changeVoid: function() {
                this.localShowVoid = !this.showVoid;
                this.localIntroductionShown = !this.introductionShown;
                this.$emit('update:introductionShown', this.localIntroductionShown)
                this.$emit('update:showVoid', this.localShowVoid)
            },
        }
    }
</script>

<template>
    <div class="main">
        <h1 class="title">Shout To The Void</h1>
        <div class="introduction">
            <h2>Introduction</h2>
            <div>
                <p>
                    "Shout To The Void" is an application that allows you to send an annonymous message into the void
                    that can be displayed
                    to other users who try to communicate with the Void.<br>
                </p>
                <p style="text-align: center; margin-top: 10px">This project is made using <b>Vue, TypeScript,
                    SQLite.</b>
                </p>    
            </div>
            <div class="buttons">
                <button type="button" @click="changeVoid">Go To Void</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.introduction {
    width: 1000px;
    height: 650px;
    text-align: center;
    text-shadow: green 1px 0 15px;
    box-shadow: green 1px 0 30px;
    border: 5px solid rgb(14, 201, 14);
    background-color: rgb(171, 171, 171, 0.2);
}
.introduction h2 {
    font-size: 50px;
    color: rgb(14, 201, 14);
    border-bottom: 5px solid rgb(14, 201, 14);
}
.introduction p {
    color: rgb(14, 201, 14);
    font-size: 35px; 
}
.buttons button {
    padding: 10px;
    font-size: 20px;
    margin-top: 30px; 
    margin-right: 20px;
    margin-left: 20px;
    margin-bottom: 30px;
    border: 5px solid rgb(14, 201, 14);
    color: rgb(14, 201, 14);
    font-family: 'Silkscreen', sans-serif;
    background-color: rgb(171, 171, 171, 0.2);
    cursor: pointer;
}
.buttons button:hover {
    background-color: rgb(14, 201, 14);
    color: white;
}
</style>