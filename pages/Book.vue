<template>
  <div>
    <NavBar></NavBar>
    <div class="flex justify-center items-center roomsarea">
      <div style="width: 84vw" class="my-5">
        <div v-for="room in roomsWithPrice" :key="room.id" class="flex row m-2 mt-5">
          <div class="flex-1 flex row">
            <div v-if="room.profile_image">
              <img  style="width: 15vw;border-radius: 10px;" :src="room.profile_image.url" />
            </div>
            <div v-else class="flex-1">-</div>
          </div>
          <div class="text-center pt-2 font-bold flex-1">
            {{ room.name }}
          </div>
          <div class="flex-1 pt-2 items-center text-center">
            <el-icon v-for="pers in room.pers" :key="pers"><User /></el-icon>
          </div>
          <div class="flex-1 pt-2 text-center">
            {{ room.price }}
            lei</div>
          <div class="pt-2">
            <BookButton></BookButton>
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

const roomsWithPrice = computed(() => rooms.value ? rooms.value.filter(x => x.price) : [] )
</script>

<style>
.roomsarea {
  height:80vh
}
</style>