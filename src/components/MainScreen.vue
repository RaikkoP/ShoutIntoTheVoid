<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue';

interface Shout {
    body: string;
    likes?: number;
    date?: string;
    id?: number;
}

interface newShout {
    body: string;
}


const shoutData = ref([] as Shout[]);
const newShoutData = ref({ body: '' } as newShout);

const uniqueId = () => {
 const dateString = Date.now().toString(36);
 const randomness = Math.random().toString(36);
 return dateString + randomness;
};

const submitShout = () => {
    axios.post('http://localhost:3000/create/newshout', newShoutData.value)
        .then((response) => {
            console.log(response)
            newShoutData.value.body = '';
        })
        .catch((error) => {
            console.error('Error submitting shout:', error);
            if (error.response) {
                console.error('Status:', error.response.status);
                console.error('Data:', error.response.data);
                console.error('Headers:', error.response.headers);
            } else if (error.request) {
                console.error('No response received:', error.request);
            } else {
                console.error('Error', error.message);
            }
            console.error('Config:', error.config);
        });
};

const getShouts = async () => {
    try {
        const response = await axios.get('http://localhost:3000/get/random', { timeout: 10000 });
        if (Array.isArray(response.data)) {
            console.log(response);
            shoutData.value = [];
            shoutData.value = response.data;
        } else {
            console.error('Expected an array but received:', response.data);
            shoutData.value = [];
        }
    } catch (error) {
        console.error('Error getting shouts:', error);
    }
};
</script>

<template>
    <div class="container">
        <div class="left">
            <h1 class="title">Shout To The Void</h1>
            <h3>Disclaimer</h3>
            <p>All shouts into the Void will be saved and displayed to other users..</p>
            <div class="formContainer">
                <div class="history">
                    <div class="history-container">

                    </div>
                    <form @submit.prevent="submitShout" class="voidForm">
                        <div class="terminalTag">
                            <p>>shout:</p>
                            <input name="shout" v-model="newShoutData.body"/>
                        </div>
                        <button type="submit">Shout</button>
                    </form>
                </div>
            </div>
        </div>
        <div class="right">
            <div class="wordcloud">
                <div class="cloud">
                    <div class="void">
                        <img class="image" src="../assets/voidpx.jpg" width="300px" height="220px" />
                        <div class="void-description">
                            <p><span style="text-decoration:underline">Name:</span> "The Void"</p>
                            <p><span style="text-decoration:underline">Age:</span> Unknown</p>
                            <p><span style="text-decoration:underline">Location:</span> Delta 8 N36</p>
                            <p><span style="text-decoration:underline">Research:</span> Voices being repeated back by entity
                            </p>
                        </div>
                    </div>
                    <div class="cloud-button">
                        <button @click.prevent="getShouts">Get Response</button>
                    </div>
                    <div class="response" v-for="shout in shoutData" :key="uniqueId">
                        <p>{{ shout.body }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
button {
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

button:hover {
    background-color: rgb(14, 201, 14);
    color: white;
}

.container {
    font-family: 'Silkscreen', sans-serif;
    display: flex;
}

.left {
    background-color: #1a1a1a;
    width: 50vw;
    padding: 5px;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-right: 10px solid gray;
    border-bottom: 10px solid rgb(80, 80, 80);
}

.left h3 {
    color: rgb(201, 55, 2);
    font-size: 32px;
    text-align: center;
}

.left p {
    color: rgb(14, 201, 14);
    font-size: 20px;
    text-align: center;
}

.title {
    font-size: 50px;
    text-align: center;
}

.formContainer {
    margin-top: 20px;
    width: 100%;
    text-align: center;
}

.formContainer h2 {
    font-size: 32px;
    color: rgb(14, 201, 14);
    background-color: rgb(38, 38, 38);
    border-bottom: 5px solid rgb(14, 201, 14);
}

.formContainer:hover h2 {
    color: rgb(165, 165, 165);
    background-color: rgb(28, 28, 28);
}

.voidForm {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #1a1a1a;
}

.voidForm input {
    font-family: 'Silkscreen', sans-serif;
    resize: none;
    color: rgb(14, 201, 14);
    border: none;
    font-size: 20px;
    width: 100%;
    background-color: #1a1a1a;
    ;
}

.terminalTag {
    display: flex;
    width: 100%;
    border: 3px solid rgb(14, 201, 14);
    border-top: none;
}

.history {
    margin-top: 40px;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

.history-container {
    height: 400px;
    width: 100%;
    border: 3px solid rgb(14, 201, 14);
    border-bottom: none;
    box-shadow: rgb(14, 201, 14) 1px 0 30px;
}

.right {
    background-color: rgb(184, 178, 169);
    width: 50vw;
    padding: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-bottom: 10px solid gray;
}

.wordcloud {
    margin-top: 50px;
    width: 100%;
}

.cloud {
    width: 100%;
    height: 700px;
    background-color: #1a1a1a;
    box-shadow: rgb(14, 201, 14) 1px 0 10px;
    border: 5px solid rgb(14, 201, 14);
}

.void {
    display: flex;
    align-items: center;
    padding: 10px;
}

.image {
    border-radius: 30px;
}

.void-description {
    color: rgb(14, 201, 14);
    margin-left: 20px;
    font-size: 20px;
    padding: 0px;
    display: flex;
    flex-direction: column;
    align-items: start;
}

.cloud-button {
    display: flex;
    justify-content: center;
    align-items: center;
}

.response {
    color: rgb(14, 201, 14);
    font-size: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

@media only screen and (max-device-width: 480px) {
    .voidForm {
        width: 100%;
    }

    .voidForm input {
        width: 100%;
    }

    .introduction {
        width: 100%;
    }
}

@media only screen and (max-device-width: 810px) {
    .voidForm {
        width: 100%;
    }

    .voidForm input {
        width: 100%;
    }

    .introduction {
        width: 100%;
    }
}
</style>