<template>
  <div>
    <NavBar></NavBar>
    <div class="flex justify-center items-center roomsarea">
      <div style="width: 84vw" class="my-5">
        <div
          v-for="room in roomsWithPrice"
          :key="room.id"
          class="flex row m-2 mt-5"
        >
          <div class="flex-1 flex row">
            <div v-if="room.profile_image">
              <div v-if="room && room.images" class="flex justify-center mb-5">
                <ImageGallery
                  :oneImageUrl="room.profile_image.url"
                  :images="room.images"
                  :index="index"
                  :disable-scroll="true"
                  @close="index = null"
                />
              </div>
            </div>
            <div v-else class="flex-1">-</div>
          </div>
          <div class="pt-2 flex-1">
            <div class="text-center font-bold mb-5">
              {{ room.name }}
            </div>
            <div
              v-for="option in room.options"
              :key="option.id"
              style="margin-left: 80px"
            >
              <el-icon><Check></Check></el-icon>
              {{ option.name }}
            </div>
          </div>
          <div class="flex-1 pt-2 items-center text-center">
            <el-icon v-for="pers in room.pers" :key="pers"><User /></el-icon>
            <div class="text-neutral-300">x {{ room.pers }} pers</div>
          </div>
          <div class="flex-1 pt-2 text-center">
            {{ room.price }}
            lei / camera
          </div>
          <div class="pt-2">
            <BookButton label="Rezerva Acum"></BookButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { User, Phone, Check } from "@element-plus/icons-vue";
const config = useRuntimeConfig();
const { data: rooms } = await useFetch(
  "https://apisite.teleptean.facturi.erpx.ro/rooms"
);
const roomsWithPrice = computed(() =>
  rooms.value ? rooms.value.filter((x) => x.price) : []
);
</script>

<style>
.roomsarea {
  height: 80vh;
}
</style>
