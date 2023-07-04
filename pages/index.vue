<template>
  <div>
    <CoverImage></CoverImage>
    <div
      :style="$device.isMobile ? 'height:60vh' : 'height:100vh'"
      id="overlay"
    ></div>
    <div id="overlaytext" class="px-2">
      <div class="title leading-10 text-white mb-5 fade-in-text">
        {{ coverTitle }}
      </div>
      <div class="text-white text-center description fade-in-text-description">
        <div v-if="!$device.isMobile">
          {{ coverDescription }}
        </div>
      </div>
      <div class="text-white text-center description2 mt-8 fade-in-text-description">
        Tratament balneoclimateric, Conditii moderne, Obiective turistice usor
        accesibile
      </div>

      <div v-if="$device.isMobile" class="flex">
        <TransitionGroup
          tag="ul"
          :css="false"
          @before-enter="onBeforeEnter"
          @enter="onEnter"
          class="flex"
          @leave="onLeave"
        >
          <li
            v-for="(item, index) in computedList"
            :key="item.msg"
            class="w-1/2 mr-1"
            :data-index="index"
          >
            <img class="rounded-lg mr-1 ml-1" :src="item.link" alt="" />
          </li>
        </TransitionGroup>
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
        <div class="ml-2">
          <nuxt-link to="/Book">
            <el-button
              :style="$device.isMobile ? 'width:50vw' : ''"
              type="warning"
              size="large"
              class="mt-5 hover:scale-110"
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
import gsap from "gsap";

const positionTop = ref(0);
const positiontLeft = ref(0);

const list = [
  {
    msg: "foto1",
    limit: 200,
    link: "https://teleptean.s3.eu-west-3.amazonaws.com/2018_12_02_7173cc23b7.jpg",
  },
  {
    msg: "foto2",
    limit: 200,
    link: "https://teleptean.s3.eu-west-3.amazonaws.com/small_pasted_image_0_35f5d670f4.png",
  },
];
const query = ref("");
const scrollY = ref(0);

// const computedList = computed(() => {
//   return list.filter((item) => scrollY.value > 1);
// });
const handleScroll = () => {
  scrollY.value = window.scrollY;
};
const computedList = ref(null)
onMounted(() => {
  setTimeout(() => {
    computedList.value = list
  }, 2000)
})
onBeforeMount(() => {
  window.addEventListener("scroll", handleScroll);
});
onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
function onBeforeEnter(el) {
  el.style.opacity = 0;
  el.style.height = 0;
}
function onEnter(el, done) {
  gsap.to(el, {
    opacity: 1,
    height: "1.6em",
    delay: el.dataset.index * 0.30,
    onComplete: done,
  });
}

function onLeave(el, done) {
  gsap.to(el, {
    opacity: 0,
    height: 0,
    delay: el.dataset.index * 0.15,
    onComplete: done,
  });
}
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
.fade-in-text {
  animation: fadeIn 3s;
  -webkit-animation: fadeIn 3s;
  -moz-animation: fadeIn 3s;
  -o-animation: fadeIn 3s;
  -ms-animation: fadeIn 3s;
}
.fade-in-text-description {
  animation: fadeIn 5s;
  -webkit-animation: fadeIn 5s;
  -moz-animation: fadeIn 5s;
  -o-animation: fadeIn 5s;
  -ms-animation: fadeIn 5s;
}

@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@-moz-keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@-webkit-keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@-o-keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@-ms-keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
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
    top: 20vh;
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
