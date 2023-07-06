<template>
  <div>
    <div class="flex justify-center items-center">
      <div v-if="$device.isDesktop" style="width: 84vw" class="my-5">
        <BookList :roomsWithPrice="roomsWithPrice" />
      </div>
      <div class="mt-5" v-else>
        <BookListMobile :roomsWithPrice="roomsWithPrice" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { User, Phone, Check } from "@element-plus/icons-vue";
const config = useRuntimeConfig();
const { data: rooms } = await useFetch(
  `${config.public.API_URL}/rooms`
);
const sortByPrice = function (a, b) {
  if (a.price > b.price) {
    return 1;
  }
  if (a.price < b.price) {
    return -1;
  }
  return 0;
};
const roomsWithPrice = computed(() =>
  rooms.value ? rooms.value.filter((x) => x.price).sort(sortByPrice) : []
);
</script>
