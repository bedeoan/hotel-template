<template>
  <div class="flex row parent">
    <div class="flex-1">
      <div class="text-4xl text-center">Facilitati Pensiunea Teleptean</div>
      <div class="text-center my-5 px-3">
        Tratamentul balneoclimateric este esențial pentru întreținerea sănătății. Oferim diverse terapii precum sauna umedă, ideală pentru detoxifiere și relaxare. Sauna uscată stimulează circulația, ameliorând durerile musculare. Salina purifică sistemul respirator, iar masajul relaxează musculatura și alină stresul.
      </div>
      <div class="flex flex-center facilitylist">
        <ul class="text-2xl">
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
            Saunna uscata
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
            <BookButton  label="Mai multe informatii"></BookButton>
          </li>
        </ul>
      </div>
    </div>
    <div v-if="!$device.isMobile" class="flex-1">
      <div class="">
        <img
          class="shadow"
          style="width: 35vw; margin-left: 100px; border-radius: 20px"
          src="https://www.teleptean.ro/images/pool/piscinaa.jpg"
        />
      </div>
      <div class="overlay">
        <img
          src="https://www.teleptean.ro/images/pool/piscina.jpg"
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
