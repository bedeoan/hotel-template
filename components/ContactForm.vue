<template>
  <div class="flex row" style="margin-top:50px;margin-bottom:50px;">
    <div class="flex-1 flex	justify-center mt-5">
      <div style="width: 30vw" >
        <div>
          <div class="text-2xl mb-5">Contacteaza-ne</div>
        </div>
        <div>
          <div class="text-2xl mb-5">
            <el-icon size="large"><Location /></el-icon>
            Address
          </div>
          
          <div>
            {{ address }}
          </div>

          <div class="text-2xl mt-5">
            <el-icon size="large"><Phone /></el-icon>
            Phone Number
          </div>
          <div>
            (+40) 262-374177, (+40) 745-614981
          </div>

          <div class="text-2xl mt-5">
            <el-icon size="large"><Message /></el-icon>
            Email Address
          </div>
          <div>
            office@teleptean.ro
          </div>
          <div>
            <el-button size="large" class="mt-5" type="primary">
              <el-icon class="mr-2" size="large"><Phone /></el-icon>
              Contact</el-button>
          </div>
        </div>
      </div>
    </div>
    <div class="flex-1 p-5">
      <client-only>
        <GoogleMap
          :api-key="config.public.GOOGLE_API"
          style="width: 100%; height: 500px;"
          :center="center"
          :zoom="15"
        >
          <Marker :options="{ position: center }" />
        </GoogleMap>
      </client-only>
    </div>
  </div>
</template>

<script setup>
import { defineComponent } from "vue";
const config = useRuntimeConfig();
import { GoogleMap, Marker } from "vue3-google-map";
import { Location, Phone, Message } from "@element-plus/icons-vue";
const center = { lat: parseFloat(config.public.LATITUDE), lng: parseFloat(config.public.LONGITUDE)  };
const address = 'Str. Unirii 1C, Ocna Sugatag,Maramures, România,'
</script>
