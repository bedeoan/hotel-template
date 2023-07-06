<template>
  <div>
    <div class="flex images" :style="$device.isMobile ? 'height:60vh' : 'height:90vh'">
      <img
        :style="$device.isMobile ? 'height:50vh' : 'height:90vh'"
        :src="config.public.COVER1"
        alt="Hotel Image"
      >
      <div v-if="!$device.isMobile">
        <img
          class="w-full"
          :src="config.public.COVER2"
          alt=""
        >

        <div class="flex pa-2">
          <img
            class="w-1/3"
            :src="config.public.COVER3"
            alt=""
          >
          <img
            class="w-1/3"
            :src="config.public.COVER4"
            alt=""
          >

          <img
            class="w-1/3"
            :src="config.public.COVER5"
            alt=""
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const config = useRuntimeConfig()
</script>
