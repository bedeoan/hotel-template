<template>
  <div>
    <div v-if="room">
      <img
        v-if="room.profile_image"
        class="coverimg"
        :src="room.profile_image.url"
      />
      <div id="overlay"></div>
      <div class="text-white text-5xl" id="overlaytext">
        {{ room.name }}
      </div>
    </div>
    <div class="flex justify-center">
      <div style="width: 80vw">
        <div class="my-5">
          Camere confortabile și spațioase cu paturi king-size și toate
          facilitățile pe care v-ați aștepta de la Pensiunea Teleptean! Începeți
          dimineața preferată cu micul dejun gratuit, care include fructe
          proaspete, iaurt, produse de patiserie și altele.
        </div>
        <ul class="text-center my-5">
          <li>Control individual al aerului conditionat și căldurii.</li>
          <li>Televizor</li>
          <li>LCD Mini-bar</li>
          <li>Telefon cu apelare directă wireless</li>
          <li>Camere pentru nefumători disponibile</li>
          <li>Televiziune prin cablu</li>
        </ul>

        <div class="my-5">
          La Pensiunea Teleptean, ne străduim să oferim oaspeților noștri o
          experiență confortabilă și memorabilă. Toate camerele noastre sunt
          echipate cu cele mai moderne facilități pentru a vă face sejurul cât
          mai plăcut posibil.
        </div>
      </div>
    </div>
    <div class="flex justify-center my-5">
      <BookButton label="Rezerva acum"></BookButton>
    </div>
    <div v-if="room && room.images" class="flex justify-center mb-5">
      <ImageGallery
        :images="room.images"
        :index="index"
        :disable-scroll="true"
        @close="index = null"
      />
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const link = route.params.id;
const { data: room } = await useFetch(
  "https://apisite.teleptean.facturi.erpx.ro/rooms/" + route.params.id
);
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
  height: 100vh; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  display: block;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.785); /* Black background with opacity */
  z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
  cursor: pointer; /* Add a pointer on hover */
}
#overlaytext {
  position: absolute; /* Sit on top of the page content */
  display: none; /* Hidden by default */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 35vh;
  right: 0;
  display: block;
  bottom: 0;
  z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
  cursor: pointer;
  text-align: center;
  color: #ffffff;
  font-family: "Poppins", Sans-serif;
}
.coverimg {
  width: 100vw;
  height: 700px;
  object-fit: cover;
}
</style>
