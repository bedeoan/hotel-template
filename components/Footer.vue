<template>
  <div id="footer" class="flex text-white bg-gray-600 text-sm flex-row h-60 p-10">
    <div class="flex-1 pa-5">
      <div class="mb-5">
        <img style="width: 50px" src="/logo.png" />
      </div>
      <div>
        {{ name }}
      </div>
      <div style="width:30vw">
        {{ reclama }}
      </div>
      <div class="mt-5">
        <a href="#">
          <!-- <img class="w-5" src="~static/facebook.png" /> -->
        </a>
      </div>
    </div>
    <div class="flex-1 pa-5">
      <div class="mb-2">Oferte</div>
      <div class="w-50">
        <el-input v-model="email"></el-input>
        <!-- <t-input placeholder="email"></t-input> -->
      </div>
      <div class="mt-2">
        <el-button type="primary">Aboneaza-ma</el-button>
      </div>
    </div>
    <div class="flex-1 flex justify-center pl-10">
      <div class="flex flex-row">
        <div class="flex-1 mr-10">
          <div class="mb-2 link link-hover">Acasa</div>
          <div class="mb-2 link link-hover">Camere</div>
          <div class="mb-2 link link-hover">Contact</div>
        </div>

        <div class="flex-1">
          <div class="mb-2 link link-hover">Contact</div>
          <div>
            {{ city }}
          </div>
          <div class="mt-5">
            <nuxt-link to="https://anpc.ro/">ANPC</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const name = "Pensiunea Teleptean";
const address = "Str. Unirii 1C, Ocna Sugatag";
const city = "437205 Ocna Sugag, România";
const phone = "(+40) 262-374177";
const email = "";
const reclama= 'Daca treci prin Maramures si ai nevoie de o un loc de cazare primitor, Pensiunea Teleptean este alegerea ideala.'
</script>
