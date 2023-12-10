<script setup lang="ts">
import MainScreen from './components/MainScreen.vue';
import Introduction from './components/Introduction.vue';
</script>

<script lang="ts">
export default {
  data: function() {
    return {
      showStory: false,
      showVoid: false,
      introductionShown: false,
    }
  },
  components: {
    'introduction': Introduction,
    'main' : MainScreen
  }
}
</script>

<template>
  <Introduction 
    :showStory="showStory" 
    :showVoid="showVoid"
    :introductionShown="introductionShown"
    @update:introductionShown="introductionShown = $event"
    @update:showVoid="showVoid = $event"
    class="background-image1" 
    v-if="!introductionShown" 
  />
  <MainScreen class="background-image2" v-if="introductionShown && showVoid" />
</template>

<style scoped>
.background-image1 {
  height: 100vh;
  width: 100vw;
  background: linear-gradient(rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.7)), url('./assets/spaceship.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.background-image2{
  height: 100vh;
  width: 100vw;
  background: linear-gradient(rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)), url('./assets/void.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
