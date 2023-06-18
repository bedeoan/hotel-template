<template>
  <div>
    <div style="width: 80vw" class="grid grid-cols-2 md:grid-cols-3 gap-4">
      <div v-for="image in images" :key="image.id">
        <img
          @click="dialogVisible = true"
          class="h-auto max-w-full rounded-lg"
          :src="image.formats.small ? image.formats.small.url : image.url"
          alt=""
        />
      </div>
    </div>
    <client-only>
      <el-dialog modal="true" fullscreen v-model="dialogVisible">
        <div>
          <el-button :icon="Back" @click="dialogVisible = false"
            >Inapoi</el-button
          >
        </div>
        <el-carousel height="auto" indicator-position="outside">
          <el-carousel-item
            style="height: 80vh"
            v-for="image in images"
            :key="image"
          >
            <div class="flex justify-center">
              <img style="height: 90vh" :src="image.url" alt="" />
            </div>
          </el-carousel-item>
        </el-carousel>
      </el-dialog>
    </client-only>
  </div>
</template>
<script setup>
import { Back } from "@element-plus/icons-vue";

const dialogVisible = ref(false);
const props = defineProps({
  images: Array,
});
</script>
<style scoped>
.carousel-item {
  color: #475669;
  opacity: 0.75;
  margin: 0;
  text-align: center;
}
</style>
