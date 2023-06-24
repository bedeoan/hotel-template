<template>
  <div>
    <div v-for="room in roomsWithPrice" :key="room.id" class="mb-5">
      <div>
        <div v-if="room.profile_image">
          <div v-if="room && room.images" class="flex justify-center mb-5">
            <ImageGallery
              :oneImageUrl="room.profile_image.url"
              :images="room.images"
              :index="0"
              :disable-scroll="true"
              @close="index = null"
            />
          </div>
        </div>
        <div v-else class="">-</div>
      </div>
      <div class="pt-2">
        <div class="ml-5 text-2xl font-bold mb-5">
          {{ room.name }}
        </div>
        <div
          v-for="option in room.options"
          :key="option.id"
          class="ml-5"
        >
          <el-icon><Check></Check></el-icon>
          {{ option.name }}
        </div>
      </div>
      <div class="pt-2 flex ml-5">
        <div class="mr-2">
          <el-icon v-for="pers in room.pers" :key="pers"><User /></el-icon>
        </div>
        <div class="text-neutral-300"> x {{ room.pers }} pers</div>
      </div>
      <div class="pt-2 ml-5">
        {{ room.price }}
        lei / camera
      </div>
      <div class="pt-2 ml-5">
        <BookButton label="Rezerva Acum"></BookButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { User, Phone, Check } from "@element-plus/icons-vue";
const props = defineProps({
  roomsWithPrice: Array,
});
</script>
