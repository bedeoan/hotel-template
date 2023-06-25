<template>
  <div class="mb-5">
    <div>
      <el-tabs v-model="tab" type="border-card">
        <el-tab-pane
          v-if="config.public.GALERY_0_NAME"
          :label="config.public.GALERY_0_NAME"
        ></el-tab-pane>
        <el-tab-pane
          v-if="config.public.GALERY_1_NAME"
          :label="config.public.GALERY_1_NAME"
        ></el-tab-pane>
        <el-tab-pane
          v-if="config.public.GALERY_2_NAME"
          :label="config.public.GALERY_2_NAME"
        ></el-tab-pane>
        <el-tab-pane
          v-if="config.public.GALERY_3_NAME"
          :label="config.public.GALERY_3_NAME"
        ></el-tab-pane>
      </el-tabs>
    </div>
    <div v-if="tab == '0'" class="flex justify-center">
      <ImageGallery :images="GALERY_0.images" />
    </div>
    <div v-if="tab == '1'" class="flex justify-center">
      <ImageGallery :images="GALERY_1.images" />
    </div>
    <div v-if="tab == '2'" class="flex justify-center">
      <ImageGallery :images="GALERY_2.images" />
    </div>
    <div v-if="tab == '3'" class="flex justify-center">
      <ImageGallery :images="GALERY_3.images" />
    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
const tab = ref("0");
const { data: GALERY_0 } = await useFetch(config.public.GALERY_0_LINK);
const { data: GALERY_1 } = await useFetch(config.public.GALERY_1_LINK);
const { data: GALERY_2 } = await useFetch(config.public.GALERY_2_LINK);
const { data: GALERY_3 } = await useFetch(config.public.GALERY_3_LINK);
</script>
