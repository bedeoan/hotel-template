<template>
  <div>
    <div v-if="oneImageUrl === undefined" style="width: 80vw" class="grid grid-cols-2 md:grid-cols-3 gap-4">
      <div v-for="(image, index) in images" :key="image.id">
        <img
          @click="
            () => {
              dialogVisible = true;
              carousel.setActiveItem(index);
              i = index
            }
          "
          class="h-auto max-w-full rounded-lg"
          :src="image.formats.small ? image.formats.small.url : image.url"
          alt=""
        />
      </div>
    </div>
    <div v-else>
      <img
          @click="
            () => {
              dialogVisible = true;
              carousel.setActiveItem(oneImageIndex);
              i = oneImageIndex
            }
          "
          class="h-auto max-w-full rounded-lg"
          style="width:200px;"
          :src="oneImageUrl"
        />
    </div>
    <client-only>
      <el-dialog
        :show-close="false"
        :modal="true"
        fullscreen
        v-model="dialogVisible"
      >
        <div class="flex row">
          <div class="flex-1 mb-2">
            <el-button :icon="Back" @click="dialogVisible = false"
              >Inapoi</el-button
            >
          </div>
          <div class="flex-1 items-center justify-center flex row">
            <div class="mr-5 text-xl">
              {{ config.public.HOTEL_NAME }}
            </div>
            <BookButton label="Rezervari acum"></BookButton>
          </div>
          <div class="flex-1 text-right pr-5"></div>
        </div>
        <div class="flex flex-row">
          <div class="flex">
            <el-button
              link
              :disabled="i == images.length == 0"
              :icon="ArrowLeft"
              style="height: 80vh;font-size:10vh"
              @click="setActiveItem(-1)"
            ></el-button>
          </div>
          <div class="flex-1">
            <el-carousel
              ref="carousel"
              :indicator-position="i"
              height="auto"
              arrow="never"
            >
              <el-carousel-item
                style="height: 80vh"
                v-for="(image, j) in images"
                :key="image"
                :name="j"
              >
                <div class="flex justify-center">
                  <img style="height: 90vh" :src="image.url" alt="" />
                </div>
              </el-carousel-item>
            </el-carousel>
          </div>
          <div class="flex">
            <el-button
              :disabled="i == images.length-1"
              link
              :icon="ArrowRight"
              style="height: 80vh;font-size:10vh"
              @click="setActiveItem(1)"
            ></el-button>
          </div>
        </div>
      </el-dialog>
    </client-only>
  </div>
</template>
<script setup>
import { Back, Close, ArrowLeft, ArrowRight } from "@element-plus/icons-vue";
const config = useRuntimeConfig();
const dialogVisible = ref(false);
const props = defineProps({
  images: Array,
  oneImageUrl: String
});
const i = ref(0);
const carousel = ref(null);
const setActiveItem = (index) => {
  i.value = i.value + index;
  carousel.value.setActiveItem(i.value);
};
</script>
<style scoped>
.carousel-item {
  color: #475669;
  opacity: 0.75;
  margin: 0;
  text-align: center;
}
</style>
