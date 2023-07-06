<template>
  <div class="flex row parent">
    <div class="flex-1">
      <div class="text-4xl text-center">Facilitati Pensiunea Teleptean</div>

      <div class="text-center my-5 px-3">
        Tratamentul balneoclimateric este esențial pentru întreținerea
        sănătății. Oferim diverse terapii precum sauna umedă, ideală pentru
        detoxifiere și relaxare. Sauna uscată stimulează circulația, ameliorând
        durerile musculare. Salina purifică sistemul respirator, iar masajul
        relaxează musculatura și alină stresul.
      </div>
      <div ref="target">
      </div>
      <div
        class="flex flex-center text-xl mt-2 facilitylist mr-10"
      >
        <Customfade>
          <div
            v-for="(facility, index) in filteredList"
            :key="index"
            class="mt-2"
          >
            <div v-if="facility.name !== 'Mai multe informatii'">
              <el-icon color="orange"><CircleCheck /></el-icon>
              {{ facility.name }}
            </div>
            <div v-else>
              <nuxt-link to="/contact">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Mai multe informatii</button>
              </nuxt-link>
            </div>
          </div>
        </Customfade>
      </div>
    </div>
    
    <div v-if="!$device.isMobile" class="flex-1">
      <div>
        <img
          class="shadow"
          style="width: 35vw; margin-left: 100px; border-radius: 20px"
          src="https://teleptean.s3.eu-west-3.amazonaws.com/small_big_pensiunea_teleptean_ocna_sugatag_qzd6458vg1am_278e0d6ad4.jpg"
        />
      </div>
      <div class="overlay">
        <img
          src="https://teleptean.s3.eu-west-3.amazonaws.com/small_pasted_image_0_35f5d670f4.png"
          style="width: 20vw; border-radius: 20px"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CircleCheck, InfoFilled } from "@element-plus/icons-vue";
const list = ref([
  {
    name: "Tratament Balneoclimateric",
  },
  { name: "Salina" },
  { name: "Masaj" },
  { name: "Sauna uscata" },
  { name: "Sauna umeda" },
  { name: "Mai multe informatii" },
]);
const { filteredList, target } = useCustomFade(list);

</script>

<style scoped>
.facilitylist {
  display: flex;
  align-items: center;
  justify-content: center;
}
.parent {
  position: relative;
}
.overlay {
  position: absolute;
  top: 25vh;
  right: 0vw;
  width: 900px;
  height: 10px;
  z-index: 5;
  border-radius: 10px; /* Add a pointer on hover */
}
.shadow {
  padding: 10px;
  box-shadow: 5px 10px 8px 8px #cccccc64;
}
</style>
