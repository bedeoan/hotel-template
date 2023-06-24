<template>
  <div>
    <div
      v-if="oneImageUrl === undefined"
      style="width: 80vw"
      class="grid grid-cols-2 md:grid-cols-3 gap-4"
    >
      <div
        class="img-hover-zoom"
        v-for="(image, index) in images"
        :key="image.id"
      >
        <img
          @click="
            () => {
              dialogVisible = true;
              carousel.setActiveItem(index);
              i = index;
            }
          "
          class="h-auto max-w-full rounded-lg"
          :src="image.formats.small ? image.formats.small.url : image.url"
          alt=""
        />
      </div>
    </div>
    <div class="img-hover-zoom" v-else>
      <img
        @click="
          () => {
            dialogVisible = true;
            carousel.setActiveItem(oneImageIndex);
            i = oneImageIndex;
          }
        "
        class="rounded-lg"
        :style="$device.isDesktop ? 'width:50vw' : 'width:98vw'"
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
          <div class="ml-2 items-center justify-center flex">
            <div class="mr-5 text-xl">
              {{ config.public.HOTEL_NAME }}
            </div>
            <BookButton
              v-if="$device.isDeskop"
              label="Rezervari acum"
            ></BookButton>
          </div>
          <div class="flex-1 text-right pr-5"></div>
        </div>
        <div v-if="$device.isDesktop" class="flex flex-row">
          <div class="flex">
            <el-button
              link
              :disabled="(i == images.length) == 0"
              :icon="ArrowLeft"
              :style="
                $device.isDesktop
                  ? 'height: 80vh; font-size: 10vh'
                  : 'height: 20vh; font-size: 5vh'
              "
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
                :style="$device.isDesktop ? 'height: 80vh' : 'width:500px'"
                v-for="(image, j) in images"
                :key="image"
                :name="j"
              >
                <div class="flex justify-center">
                  <img
                    :style="$device.isDesktop ? 'height: 80vh' : 'width:700px'"
                    :src="image.url"
                    alt=""
                  />
                </div>
              </el-carousel-item>
            </el-carousel>
          </div>
          <div class="flex">
            <el-button
              :disabled="i == images.length - 1"
              link
              :icon="ArrowRight"
              :style="
                $device.isDesktop
                  ? 'height: 80vh; font-size: 10vh'
                  : 'height: 20vh; font-size: 5vh'
              "
              @click="setActiveItem(1)"
            ></el-button>
          </div>
        </div>
        <div v-else>
          <el-carousel indicator-position="outside" height="150px">
            <el-carousel-item v-for="(image, j) in images" :key="j">
              <img
                :style="$device.isDesktop ? 'height: 80vh' : 'width:700px'"
                :src="image.url"
                alt=""
              />
            </el-carousel-item>
          </el-carousel>
          <BookButton
            v-if="$device.isMobile"
            label="Rezervari acum"
          ></BookButton>
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
  oneImageUrl: String,
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
