<template>
  <div>
    <div v-if="withArrow" class="animate-bounce flex justify-center mb-2">
      <el-icon :size="30" color="#409EFC">
        <Bottom />
      </el-icon>
    </div>
    <button
      :style="$device.isMobile ? 'width:50vw' : ''"
      class="bg-blue-400 hover:scale-110 text-white py-2 px-4 rounded"
      @click="
        () => {
          dialogVisible = true;
          markConversion();
        }
      "
    >
      <span v-if="label">{{ label }}</span>
      <span v-else>{{ config.public.bookButton }}</span>
    </button>

    <client-only>
      <el-dialog
        v-model="dialogVisible"
        :width="$device.isDesktop ? '20%' : '80%'"
        :modal="true"
      >
        <div v-if="config" class="flex justify-center">
          <div>
            <div class="text-2xl mb-2">
              {{ config.public.bookButtonforBookings }}
            </div>
            <div class="ml-2 flex justify-center text-xl">
              <div class="ml-2">
                <div class="my-3">
                  <button
                    class="bg-blue-500 hover:bg-blue-700 text-sm text-white py-2 px-4 border border-blue-700 rounded"
                    @click="callClient(config.public.CONTACT_PHONE1)"
                  >
                    <el-icon class="mr-2" size="large">
                      <Phone />
                    </el-icon>
                    {{ config.public.CONTACT_PHONE1 }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-dialog>
    </client-only>
  </div>
</template>

<script setup>
import { Phone, Bottom } from '@element-plus/icons-vue'
const config = useRuntimeConfig()
const dialogVisible = ref(false)
const markConversion = () => {
  // TODO mark as conversion
}
const callClient = (phone) => {
  const nodash = phone.replace(/-/g, '')
  window.location = 'tel:+4' + nodash
}
const props = defineProps({
  label: String,
  withArrow: Boolean
})
</script>
