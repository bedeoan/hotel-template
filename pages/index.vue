<template>
  <div>
    <CoverImage></CoverImage>
    <div
      :style="$device.isMobile ? 'height:60vh' : 'height:100vh'"
      id="overlay"
    ></div>
    <div id="overlaytext" class="px-2">
      <div class="title leading-10 text-white mb-5">
        {{ coverTitle }}
      </div>
      <div class="text-white text-center description">
        <div v-if="!$device.isMobile">
          {{ coverDescription }}
        </div>
      </div>
      <div class="text-white text-center description2 mt-8">
        Tratament balneoclimateric, Conditii moderne, Obiective turistice usor
        accesibile
      </div>
      <div v-if="$device.isMobile" class="flex" >
        <img
          class="w-1/2 rounded-lg mr-1 ml-1"
          src="https://www.teleptean.ro/articleimages/noutati/despre-noi-04.jpg"
          alt=""
        />
        <img
            class="w-1/3 rounded-lg"
            src="https://www.teleptean.ro/images/pool/piscinaa.jpg"
            alt=""
          />
      </div>
    </div>
    <!-- BookingBar -->
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
        <div class="">
          <nuxt-link to="/Book">
            <el-button
              :style="$device.isMobile ? 'width:50vw' : ''"
              type="warning"
              size="large"
              class="mt-5"
              >Rezerva acum</el-button
            >
          </nuxt-link>
        </div>
      </div>
    </div>
    <About style="margin-top: 100px"> </About>
    <Facilities style="margin-top: 100px; margin-bottom: 100px"></Facilities>
    <Spa v-if="$device.isDesktop"></Spa>
    <BeHappy class="my-5"></BeHappy>
    <ContactForm></ContactForm>
  </div>
</template>

<script setup>
const checkIn = ref("");
const checkOut = ref("");
const adults = ref(2);
const children = ref(0);
const coverTitle =
  "Rezervă-ți vacanța la Pensiunea Teleptean chiar in inima Maramuresului.";
const coverDescription =
  " Descoperă autenticitatea și frumusețea Maramureșului: Pensiunea noastră, o oază de relaxare și ospitalitate în inima României. Îmbinând tradiția cu confortul modern, te invităm să te bucuri de o experiență de neuitat într-un peisaj idilic, cu dealuri verzi și sate pitorești.";
const coverDescriptionMobile =
  " Descoperă autenticitatea și frumusețea Maramureșului: Pensiunea noastră, o oază de relaxare și ospitalitate în inima României.";
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
    width: 90; /* Full width (cover the whole page) */
    height: 100vh; /* Full height (cover the whole page) */
    top: 20vh;
    left: 20vw;
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
    top: 20vh;
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
