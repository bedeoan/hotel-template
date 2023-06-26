<template>
  <div>
    <div class="flex images" :style="$device.isMobile ? 'height:60vh' : 'height:90vh'">
      <img
        :style="$device.isMobile ? 'height:50vh' : 'height:90vh'"
        src="https://aventurescu.ro/wp-content/uploads/2016/07/ecomaramures2.jpg"
        alt="Hotel Image"
      />
      <div v-if="!$device.isMobile">
        <img
          class="w-full"
          src="https://teleptean.s3.eu-west-3.amazonaws.com/2019_08_04_504c3814e9.jpg"
          alt=""
        />

        <div class="flex pa-2">
          <img
            class="w-1/3"
            src="https://teleptean.s3.eu-west-3.amazonaws.com/small_big_pensiunea_teleptean_ocna_sugatag_qzd6458vg1am_278e0d6ad4.jpg"
            alt=""
          />
          <img
            class="w-1/3"
            src="https://teleptean.s3.eu-west-3.amazonaws.com/2018_12_02_7173cc23b7.jpg"
            alt=""
          />
   
          <img
            class="w-1/3"
            src="https://teleptean.s3.eu-west-3.amazonaws.com/small_pasted_image_0_35f5d670f4.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>
