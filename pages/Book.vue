<template>
  <div>
    <div class="flex justify-center items-center roomsarea">
      <div v-if="$device.isDesktop" style="width: 84vw" class="my-5">
        <BookList :roomsWithPrice="roomsWithPrice"></BookList>
      </div>
      <div class="mt-5" v-else>
        <BookListMobile :roomsWithPrice="roomsWithPrice"></BookListMobile>
      </div>
    </div>
  </div>
</template>

<script setup>
import { User, Phone, Check } from "@element-plus/icons-vue";
const config = useRuntimeConfig();
/// todo take api from env !!
const { data: rooms } = await useFetch(
  "https://apisite.teleptean.facturi.erpx.ro/rooms"
);
const roomsWithPrice = computed(() =>
  rooms.value ? rooms.value.filter((x) => x.price) : []
);
</script>

<style>

.roomsarea {
}
</style>
