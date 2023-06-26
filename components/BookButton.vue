<template>
  <div>
    <el-button
      @click="
        () => {
          dialogVisible = true;
          markConversion();
        }
      "
      class="flex row"
      type="primary"
    >
      <span v-if="label">{{ label }}</span>
      <span v-else>rezerva</span>
    </el-button>
    <el-dialog :width="$device.isDesktop ? '20%' : '80%'" :modal="true" v-model="dialogVisible">
      <div class="flex justify-center">
        <div>
          <div class="text-2xl mb-2">Pentru rezervari</div>
          <div class="ml-2 flex justify-center text-xl">
            <div class="ml-2">
              <div class="my-3">
                <el-button
                  link
                  @click="callClient(config.public.CONTACT_PHONE1)"
                >
                  <el-icon class="mr-2" size="large"><Phone /></el-icon>
                  {{ config.public.CONTACT_PHONE1 }}</el-button
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
const config = useRuntimeConfig();
import { User, Phone, Check } from "@element-plus/icons-vue";
const dialogVisible = ref(false);
const markConversion = () => {
  // mark as conversion
};
const callClient = (phone) => {
  const nodash = phone.replace(/-/g, "");
  window.location = "tel:+4" + nodash;
};
const props = defineProps({
  label: String
})
</script>
