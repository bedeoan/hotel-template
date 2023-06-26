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
      <div class="flex flex-center facilitylist">
        <ul class="text-xl">
          <li class="mt-2">
            <el-icon color="orange"><CircleCheck /></el-icon>
            Tratament Balneoclimateric
          </li>
          <li class="mt-2">
            <el-icon color="orange"><CircleCheck /></el-icon>
            Sauna umeda
          </li>
          <li class="mt-2">
            <el-icon color="orange"><CircleCheck /></el-icon>
            Sauna uscata
          </li>
          <li class="mt-2">
            <el-icon color="orange"><CircleCheck /></el-icon>
            Salina
          </li>
          <li class="mt-2">
            <el-icon color="orange"><CircleCheck /></el-icon>
            Masaj
          </li>
          <li class="mt-5">
            <!-- <el-button size="large" type="primary">
              <el-icon class="mr-2"><InfoFilled /></el-icon>
            </el-button> -->
            <nuxt-link to="/contact">
              <el-button type="primary">Mai multe informatii</el-button>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
    <div v-if="!$device.isMobile" class="flex-1">
      <div class="">
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

<script setup>
import { CircleCheck, InfoFilled } from "@element-plus/icons-vue";
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
