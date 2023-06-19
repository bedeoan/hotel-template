<template>
  <div>
    <header class="bg-blue-500 text-white shadow-lg navbar">
      <div class="container mx-auto flex justify-between p-5">
        <nuxt-link to="/">
          <div class="flex">
            <div class="mr-5">
              <img style="width: 50px" src="logo.png" />
            </div>
            <a href="#" class="text-2xl font-bold">Pensiunea Teleptean</a>
          </div>
        </nuxt-link>
        <nav class="hidden sm:flex space-x-4">
          <ul class="flex">
            <li class="sm:mr-5 pt-1">
              <nuxt-link class="hover:underline" to="/"> Acasa </nuxt-link>
            </li>
            <li class="sm:mr-5">
              <el-dropdown>
                <el-button class="border-transparent rooms" color="bg-blue-500">
                  Camere
                  <el-icon class="el-icon--right">
                    <arrow-down />
                  </el-icon>
                </el-button>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item>
                      <nuxt-link to="room/15"> Aparamament </nuxt-link>
                    </el-dropdown-item>
                    <el-dropdown-item>
                      <nuxt-link to="room/17"> Camera dubla </nuxt-link>
                    </el-dropdown-item>
                    <el-dropdown-item>
                      <nuxt-link to="room/16"> Camera dubla </nuxt-link>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
              <!-- <a href="#" class="hover:underline">Camere</a> -->
            </li>
            <li class="sm:mr-5 pt-1">
              <nuxt-link class="hover:underline" to="/Gallery">
                Galerie foto
              </nuxt-link>
            </li>
            <li class="sm:mr-5 pt-1">
              <nuxt-link class="hover:underline" to="/contact">
                Contact
              </nuxt-link>
            </li>
            <li class="mx-2">
              <el-button type="primary">Book now</el-button>
            </li>
          </ul>
        </nav>
        <div class="sm:hidden">
          <button @click="isOpen = !isOpen">
            <span>☰</span>
          </button>
        </div>
        <div v-if="isOpen" class="sm:hidden">
          <nav class="mt-3">
            <ul class="space-y-2">
              <li class="sm:mr-5 pt-1">
                <a href="#" class="hover:underline">Acasa</a>
              </li>
              <li class="sm:mr-5 pt-1">
                <a href="#" class="hover:underline">Camere</a>
              </li>
              <li class="sm:mr-5 pt-1">
                <a href="#" class="hover:underline">Galerie Foto</a>
              </li>
              <li class="sm:mr-5 pt-1">
                <a href="#" class="hover:underline">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup>
import { ArrowDown } from "@element-plus/icons-vue";

const isOpen = ref(false);
</script>

<style scoped>
.navbar {
  height: 10vh;
}
.rooms {
  border: none;
}
.rooms:hover {
  background-color: rgb(59 130 246 / 1);
}
</style>
