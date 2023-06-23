<template>
  <div>
    <NavBar></NavBar>
    <div class="flex justify-center items-center">
      <div style="width: 84vw" class="my-5">
        <div v-for="room in roomsWithPrice" :key="room.id" class="flex row mb-2">
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
            <el-button
              @click="
                () => {
                  dialogVisible = true;
                  markConversion();
                }
              "
              type="primary"
              >
              
              <el-icon class="mr-2"><Check /></el-icon>
              rezerva
              </el-button
            >
          </div>
        </div>
      </div>
    </div>
    <el-dialog width="20%" modal="true" v-model="dialogVisible">
      <div class="flex justify-center">
        <div>
          <div class="text-2xl mb-2">Pentru rezervari</div>
          <div class="ml-2 flex justify-center text-xl">
            <div class="ml-2">
              <div class="my-3">
                <el-button
                  type="text"
                  @click="callClient(config.public.CONTACT_PHONE1)"
                  >
                  <el-icon class="mr-2" size="large"><Phone /></el-icon>
                  {{ config.public.CONTACT_PHONE1 }}</el-button
                >
              </div>
              <div>
                <el-button
                  type="text"
                  @click="callClient(config.public.CONTACT_PHONE2)"
                  >
                  <el-icon class="mr-2" size="large"><Phone /></el-icon>
                  {{ config.public.CONTACT_PHONE2 }}</el-button
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script setup>
import { User, Phone, Check } from "@element-plus/icons-vue";
const config = useRuntimeConfig();
//fethc rooms
const { data: rooms } = await useFetch(
  "https://apisite.teleptean.facturi.erpx.ro/rooms"
);

const roomsWithPrice = computed(() => rooms.value ? rooms.value.filter(x => x.price) : [] )

const dialogVisible = ref(false);
const markConversion = () => {
  // mark as conversion
};
const callClient = (phone) => {
  const nodash = phone.replace(/-/g, "");
  window.location = "tel:+4" + nodash;
};
</script>
