<template>
  <div class="flex row parent" style="height: 70vh">
    <div class="flex-1 flex flex-row-reverse">
      <div class="mr-5">
        <img
          class="shadow"
          style="width: 35vw; border-radius: 20px"
          src="https://www.ofertesejurromania.ro/wp-content/uploads/2016/06/Statiunea_Ocna_Sugatag-1.jpg"
        >
      </div>
      <div class="overlay2">
        <img
          src="https://teleptean.s3.eu-west-3.amazonaws.com/Group_1_8_400b75a02c.png"
          style="border-radius: 20px"
        >
      </div>
    </div>
    <div class="flex-1">
      <div class="text-4xl text-center">
        {{ config.public.SPA_TITLE }}
      </div>
      <div class="text-center my-5" style="width:40vw">
        {{ config.public.SPA_DESCRIPTION }}
      </div>
    </div>
  </div>
</template>
<script setup>
const config = useRuntimeConfig()
</script>
<style scoped>
.facilitylist {
  display: flex;
  align-items: center;
  justify-content: center;
}
.parent {
  position: relative;
}
.overlay1 {
  position: absolute;
  top: 25vh;
  left: 12vw;
  width: 15vw;
  height: 10px;
  z-index: 5;
  border-radius: 10px; /* Add a pointer on hover */
}
.overlay2 {
  position: absolute;
  top: 35vh;
  left: 20vw;
  width: 15vw;
  height: 10px;
  z-index: 5;
  border-radius: 10px; /* Add a pointer on hover */
}
.shadow {
  padding: 10px;
  box-shadow: 5px 10px 8px 8px #cccccc64;
}
</style>
