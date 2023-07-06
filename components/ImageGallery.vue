<template>
  <div ref="el">
    <client-only>
      <div
        v-if="oneImageUrl === undefined"
        style="width: 80vw"
        class="grid grid-cols-2 md:grid-cols-3 gap-4"
      >
        <div
          v-for="(image, index) in images"
          :key="image.id"
          class="img-hover-zoom"
        >
          <img
            class="h-auto max-w-full rounded-lg"
            :src="image.formats.small ? image.formats.small.url : image.url"
            alt=""
            @click="
              () => {
                previewImage(index);
              }
            "
          >
        </div>
      </div>
      <div v-else class="img-hover-zoom">
        <img
          class="rounded-lg"
          :style="$device.isDesktop ? 'width:50vw' : 'width:98vw'"
          :src="oneImageUrl"
          @click="
            () => {
              dialogVisible = true;
              carousel.setActiveItem(oneImageIndex);
              i = oneImageIndex;
            }
          "
        >
      </div>
      <el-dialog
        v-model="dialogVisible"
        :show-close="false"
        :modal="true"
        fullscreen
      >
        <div class="flex row">
          <div class="flex-1 mb-2">
            <button class="py-2 px-4 border border-blue-700 rounded" @click="dialogVisible = false">
              <el-icon><Back /> </el-icon>
              Inapoi
            </button>
          </div>
          <div class="ml-2 items-center justify-center flex">
            <div class="mr-5 text-xl">
              {{ config.public.HOTEL_NAME }}
            </div>
            <BookButton
              v-if="$device.isDeskop"
              label="Rezervari acum"
            />
          </div>
          <div class="flex-1" />
        </div>
        <div v-if="$device.isDesktop" class="flex flex-row">
          <div class="flex">
            <button
              :disabled="(i == images.length) == 0"
              :icon="ArrowLeft"
              :style="
                $device.isDesktop
                  ? 'height: 80vh; font-size: 10vh'
                  : 'height: 20vh; font-size: 5vh'
              "
              @click="setActiveItemForCarousel(-1)"
            />
          </div>
          <div class="flex-1">
            <el-carousel
              ref="carousel"
              :indicator-position="i"
              height="auto"
              arrow="never"
            >
              <el-carousel-item
                v-for="(image, j) in images"
                :key="image"
                :style="$device.isDesktop ? 'height: 80vh' : ''"
                :name="j"
              >
                <div class="flex justify-center">
                  <img
                    :style="$device.isDesktop ? 'height: 80vh' : 'width:700px'"
                    :src="image.url"
                    alt=""
                  >
                </div>
              </el-carousel-item>
            </el-carousel>
          </div>
          <div class="flex">
            <button
              :disabled="i == images.length - 1"
              link
              :icon="ArrowRight"
              :style="
                $device.isDesktop
                  ? 'height: 80vh; font-size: 10vh'
                  : 'height: 20vh; font-size: 5vh'
              "
              @click="setActiveItemForCarousel(1)"
            />
          </div>
        </div>
        <div v-else>
          <el-carousel
            ref="carousel"
            :autoplay="false"
            indicator-position="outside"
            height="250px"
          >
            <el-carousel-item v-for="(image, j) in images" :key="j">
              <img style="height: auto" :src="image.url" alt="">
            </el-carousel-item>
          </el-carousel>

          <BookButton
            v-if="$device.isMobile"
            label="Rezervari acum"
          />
        </div>
      </el-dialog>
    </client-only>
  </div>
</template>
<script setup>
import { Back, Close, ArrowLeft, ArrowRight } from '@element-plus/icons-vue'
const el = ref(null)
const { isSwiping, direction } = useSwipe(el)

const config = useRuntimeConfig()
const dialogVisible = ref(false)
const props = defineProps({
  images: Array,
  oneImageUrl: String
})
const i = ref(0)
const carousel = ref(null)
const setActiveItemForCarousel = (index) => {
  i.value = i.value + index
  carousel.value.setActiveItem(i.value)
}
const previewImage = (index) => {
  dialogVisible.value = true
  i.value = index
  setTimeout(() => {
    carousel.value.setActiveItem(index)
  }, 100)
}
const lock = ref(false)

watch(isSwiping, async (newQuestion, oldQuestion) => {
  if (!lock.value) {
    lock.value = true
    console.log(i.value)
    if (
      direction.value === 'left' &&
      i.value !== Object.values(props.images).length - 1
    ) {
      setActiveItemForCarousel(1)
    }

    if (direction.value === 'right' && i.value > 0) {
      setActiveItemForCarousel(-1)
    }
  }
  setTimeout(() => {
    lock.value = false
  }, 500)
})
</script>
<style scoped>
.carousel-item {
  color: #475669;
  opacity: 0.75;
  margin: 0;
  text-align: center;
}
</style>
