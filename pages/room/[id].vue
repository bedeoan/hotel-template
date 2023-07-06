<template>
  <div>
    <div v-if="room">
      <img
        v-if="room.profile_image"
        class="coverimg"
        :src="room.profile_image.url"
      >

      <div id="overlaytext" class="text-white text-5xl">
        {{ room.name }}
      </div>
    </div>
    <div
      id="overlay"
      :style="$device.isMobile ? 'height:60vh' : 'height:60vh'"
    />
    <div class="flex justify-center">
      <div style="width: 80vw">
        <div class="my-5">
          {{ generalRoomText }}
        </div>
        <ul class="text-center my-5">
          <li v-for="(item, index) in facilities" :key="index">
            <el-icon>
              <CircleCheck />
            </el-icon>
            {{ item.name }}
          </li>
        </ul>

        <div class="my-5">
          {{ generalRoomText2 }}
        </div>
      </div>
    </div>
    <div class="flex justify-center my-5">
      <BookButton :with-arrow="true" :label="config.public.bookNow" />
    </div>
    <div v-if="room && room.images" class="flex justify-center mb-5">
      <ImageGallery :images="room.images" />
    </div>
  </div>
</template>

<script setup>
import { CircleCheck } from '@element-plus/icons-vue'
const route = useRoute()
const config = useRuntimeConfig()
const { data: room } = await useFetch(
  `${config.public.API_URL}/rooms/${route.params.id}`
)
const facilities = ref([
  { name: 'Parcare privată' },
  { name: 'Spa și centru de wellness' },
  { name: 'Piscina interioara si exterioara' },
  { name: 'Televizor' },
  { name: 'WiFi gratuit inclus' },
  { name: 'Camere pentru nefumători disponibile' },
  { name: 'Mic dejun foarte bun' },
  { name: 'Bar' }
])
const generalRoomText = 'Camere confortabile și spațioase cu paturi king-size și toate facilitățile pe care v-ați aștepta de la ' + config.public.HOTEL_NAME + '! Începeți dimineața preferată cu micul dejun gratuit bogat si variat.'
const generalRoomText2 = 'La ' + config.public.HOTEL_NAME + ', ne străduim să oferim oaspeților noștri o experiență confortabilă și memorabilă. Toate camerele noastre sunt echipate cu cele mai moderne facilități pentru a vă face sejurul cât mai plăcut posibil.'
</script>

<style scoped>
.name {
  background: rgba(0, 0, 0, 0.715);
  height: 40vh;
}
#overlay {
  position: absolute; /* Sit on top of the page content */
  display: none; /* Hidden by default */
  width: 100%; /* Full width (cover the whole page) */
  height: auto; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  display: block;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.785); /* Black background with opacity */
  z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
}
#overlaytext {
  position: absolute; /* Sit on top of the page content */
  width: 100%; /* Full width (cover the whole page) */
  height: 300px; /* Full height (cover the whole page) */
  top: 35vh;
  right: 0;
  display: block;
  bottom: 0;
  z-index: 10;
  cursor: pointer;
  text-align: center;
  color: #ffffff;
  font-family: "Poppins", Sans-serif;
}
.coverimg {
  width: 100vw;
  height: 50vh;
  object-fit: cover;
}
</style>
