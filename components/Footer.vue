<template>
  <div class="flex text-white bg-gray-600 text-sm p-5">
    <div class="flex-1 ml-5">
      <div class="mb-5">
        <img style="width: 50px" src="/logo.png" />
      </div>
      <div v-if="!$device.isMobile">
        {{ name }}
      </div>
      <div v-if="!$device.isMobile" style="width: 30vw">
        {{ reclama }}
      </div>
      <div v-else>
        {{ reclamaMobile }}
      </div>
      <div class="mt-5">
        <a href="#">
          <!-- <img class="w-5" src="~static/facebook.png" /> -->
        </a>
      </div>
    </div>
    <div v-if="!$device.isMobile" class="flex-1">
      <div>Pentu oferte si promotii</div>
      <div class="w-1/2">
        <el-input placeholder="email" v-model="email"></el-input>
        <el-checkbox
          style="color: white"
          label="sunt de acord sa primesc oferte si promotii"
        ></el-checkbox>
      </div>
      <div class="mt-2">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-sm text-white  py-2 px-4 border border-blue-700 rounded"
        >
          Aboneaza-ma
        </button>
      </div>
    </div>
    <div class="flex-1 justify-center pl-10">
      <div class="flex flex-row">
        <div v-if="!$device.isMobile" class="flex-1">
          <div class="mb-2 link link-hover">
            <nuxt-link class="hover:underline" to="/"> Acasa </nuxt-link>
          </div>
          <div class="mb-2 link link-hover">
            <nuxt-link class="hover:underline" to="/book"> Camere </nuxt-link>
          </div>
          <div class="mb-2 link link-hover">
            <nuxt-link class="hover:underline" to="/contact">
              Contact
            </nuxt-link>
          </div>
        </div>

        <div class="flex-1">
          <div class="mb-2 link link-hover">Contact</div>
          <div>
            {{ city }}
          </div>
          <div class="mt-5">CUI: {{ config.public.CUI }}</div>
          <div class="mt-5">
            <nuxt-link to="https://anpc.ro/">ANPC</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();

const name = "Pensiunea Teleptean";
const address = "Str. Unirii 1C, Ocna Sugatag";
const city = "437205 Ocna Sugag, România";
const phone = "(+40) 262-374177";
const email = "";
const reclama =
  "Daca treci prin Maramures si ai nevoie de o un loc de cazare primitor, Pensiunea Teleptean este alegerea ideala.";
const reclamaMobile =
  "Daca treci prin Maramures, Pensiunea Teleptean este alegerea ideala.";
</script>
