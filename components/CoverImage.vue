<template>
  <div>
    <div class="flex images">
      <img
        :style="$device.isMobile ? 'height:50vh' : 'height:90vh'"
        src="https://aventurescu.ro/wp-content/uploads/2016/07/ecomaramures2.jpg"
        alt="Hotel Image"
      />
      <div v-if="!$device.isMobile">
        <img
          class="w-full"
          src="https://www.teleptean.ro/articleimages/noutati/despre-noi-04.jpg"
          alt=""
        />

        <div class="flex pa-2">
          <img
            class="w-1/3"
            src="https://teleptean.s3.eu-west-3.amazonaws.com/DSC_00683_1_6db8970f0f.jpg"
            alt=""
          />
          <img
            class="w-1/3"
            src="https://www.teleptean.ro/images/pool/piscinaa.jpg"
            alt=""
          />
          <img
            class="w-1/3"
            src="https://www.teleptean.ro/images/pool/piscina.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>
