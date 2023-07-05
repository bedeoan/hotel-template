<template>
  <div>
    <CoverImage></CoverImage>
    <div
      :style="$device.isMobile ? 'height:60vh' : 'height:100vh'"
      id="overlay"
    ></div>
    <div id="overlaytext" class="px-2">
      <div class="title leading-10 text-white mb-5 fade-in-text">
        {{ config.public.coverTitle }}
      </div>
      <div class="text-white text-center description fade-in-text-description">
        <div v-if="!$device.isMobile">
          {{ config.public.coverDescription }}
        </div>
        <div v-else></div>
      </div>
      <div
        class="text-white text-center description2 mt-8 fade-in-text-description"
      >
        {{ config.public.coverDescription2 }}
      </div>

      <div v-if="$device.isMobile" class="flex mt-2">
        <CoverImagesInCover />
      </div>
    </div>
    <div
      :class="
        $device.isMobile
          ? 'bookingbarMobile flex flex-wrap justify-center bg-white p-2'
          : 'bookingbar flex bg-white p-2'
      "
    >
      <div :class="$device.isMobile ? '' : 'flex flex-row'">
        <div class="bookingbarTitle">
          <div>Check in</div>
          <div>
            <el-date-picker
              v-model="checkIn"
              type="date"
              placeholder="Alege data"
            >
            </el-date-picker>
          </div>
        </div>
        <div class="bookingbarTitle">
          <div>Check out</div>
          <el-date-picker
            v-model="checkOut"
            type="date"
            placeholder="Alege data"
          >
          </el-date-picker>
        </div>
        <div class="flex flex-row">
          <div class="bookingbarTitle mr-2">
            <div>Adulti</div>
            <div>
              <el-input-number
                v-model="adults"
                :min="1"
                :max="10"
              ></el-input-number>
            </div>
          </div>
          <div class="bookingbarTitle">
            <div>Copii</div>
            <div>
              <el-input-number
                v-model="children"
                :min="1"
                :max="10"
              ></el-input-number>
            </div>
          </div>
        </div>
        <div class="ml-2">
          <nuxt-link to="/Book">
            <el-button
              :style="$device.isMobile ? 'width:50vw' : ''"
              type="warning"
              size="large"
              class="mt-5 hover:scale-110"
              >{{ config.public.BookNow }}</el-button
            >
          </nuxt-link>
        </div>
      </div>
    </div>
    <About class="my-20" />
    <Facilities class="my-20" />
    <Spa v-if="$device.isDesktop" />
    <BeHappy class="my-5" />
    <ContactForm />
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
const checkIn = ref("");
const checkOut = ref("");
const adults = ref(2);
const children = ref(0);
</script>

<style scoped>
.bookingbar {
  position: absolute;
  top: 85vh;
  right: 20vw;
  width: 900px;
  height: 100px;
  z-index: 5;
  border-radius: 10px;
}

.bookingbarTitle {
  width: 100%;
  margin-bottom: 10px;
  font-family: Lato;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.02em;
  text-align: left;
  color: #000;
}
.navbar {
  height: 10vh;
}
#overlay {
  position: absolute; /* Sit on top of the page content */
  display: none; /* Hidden by default */
  width: 100vw; /* Full width (cover the whole page) */
  left: 0;
  right: 0;
  top: 0;
  display: block;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* Black background with opacity */
  z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
  cursor: pointer; /* Add a pointer on hover */
}
@media only screen and (min-width: 600px) {
  #overlaytext {
    position: absolute; /* Sit on top of the page content */
    display: none; /* Hidden by default */
    width: 90%; /* Full width (cover the whole page) */
    height: 100vh; /* Full height (cover the whole page) */
    top: 25vh;
    left: 5vw;
    right: 0;
    display: block;
    bottom: 0;
    z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
    cursor: pointer;
    text-align: center;
    color: #ffffff;
    font-family: "Poppins", Sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 28px;
  }
  #overlaytext .title {
    font-size: 4vh;
    margin-bottom: 50px;
  }
}
@media only screen and (max-width: 600px) {
  #overlaytext {
    position: absolute; /* Sit on top of the page content */
    display: none; /* Hidden by default */
    width: 100vw; /* Full width (cover the whole page) */
    height: 20vh; /* Full height (cover the whole page) */
    top: 15vh;
    right: 0;
    display: block;
    bottom: 0;
    z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
    cursor: pointer;
    text-align: center;
    color: #ffffff;
    font-family: "Poppins", Sans-serif;
    font-size: 10px;
    line-height: 28px;
  }
  #overlaytext .title {
    font-size: 3vh;
  }

  #overlaytext .description {
    font-size: 2vh;
  }
  #overlaytext .description2 {
    font-size: 2vh;
  }
}
</style>
