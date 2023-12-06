<script setup lang="ts">
</script>

<template>
    <div class="container">
        <div class="center_form">
            <form>
                <h1>Shout Into The Void</h1>
                <br>
                <textarea  name="message" />
            </form>
        </div>
    </div>
    <div class="center_button">
        <button type="button">Hear the Void</button>
    </div>
</template>

<style scoped>
.container {
    height: 300px;
    margin-top: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.center_form {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}
.center_form h1{
    color: white;
    font-size: 48px;
    text-shadow: 0 0 10px #fff, 0 0 10px #fff, 0 0 10px #0fa, 0 0 10px #0fa,0 0 10px #0fa;
}
.center_form textarea {
    padding-left:4em;
    padding-right: 4em;
    padding-top: 2em;
    font-size: 24px;
    color: white;
    text-align: center;
    margin-top: 10px;
    background-color: rgb(29, 29, 29);
    border: none;
    border-bottom: 1px solid white;
}
.center_button {
    display: flex;
    justify-content: center;
    align-items: center;
}
.center_button button {
    padding: 20px;
    font-size: 24px;
    color: white;
    border-radius: 30px;
    background-color: rgb(63, 63, 63);
}
.center_button button:hover {
    cursor: pointer;
}
</style>