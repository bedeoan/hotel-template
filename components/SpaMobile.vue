<template>
  <div class="flex row parent">
    <div class="flex-1">
      <div class="text-4xl text-center">
        {{ config.public.SPA_TITLE }}
      </div>
      <div class="text-center my-5" >
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
