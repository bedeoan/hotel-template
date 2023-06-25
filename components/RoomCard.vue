<template>
  <div>
    <nuxt-link :to="`/room/${link}`">
      <div class="parent">
        <img
          :src="image"
        />
        <div v-if="!hideOverlay" class="overlay">
          <div class="text-white text-2xl px-5 ml-2" style="margin-top:10%">
            {{ title }}
          </div>
          <div class="text-white text-sm px-5 mx-2 mt-2 my-5">
            {{ details }}
          </div>
          <div class="ml-2 px-5 mt-2">
            <el-button type="warning">{{ button }}</el-button>
          </div>
        </div>
        <div v-else  class="overlay2">
          <div class="text-white text-xl ml-2" style="margin-top:85%">
            {{ title }}
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>
<script setup>
const props = defineProps({
  image: String,
  link: String,
  roomName: String,
  booknow: String,
  title: String,
  details: String,
  imageh: String,
  imagew: String,
  button: String,
  hideOverlay: Boolean
});
</script>

<style scoped>
.parent {
  position: relative;
}
.overlay {
  position: absolute; /* Sit on top of the page content */
  display: none; /* Hidden by default */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  left: 0;
  right: 0;
  display: block;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* Black background with opacity */
  z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
  cursor: pointer; /* Add a pointer on hover */
}
.overlay2 {
  position: absolute; /* Sit on top of the page content */
  display: none; /* Hidden by default */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  left: 0;
  right: 0;
  display: block;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0); /* Black background with opacity */
  z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
  cursor: pointer; /* Add a pointer on hover */
}
</style>
