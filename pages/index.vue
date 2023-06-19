<template>
  <div>
    <NavBar></NavBar>
    <CoverImage></CoverImage>
    <div id="overlay"></div>
    <div id="overlaytext">
      <div
        class="text-3xl text-white mb-5"
        style="width: 600px; margin-left: 200px"
      >
        Rezervă-ți vacanța la Pensiunea Teleptean chiar in inima Maramuresului.
      </div>
      <div class="text-white" style="width: 900px">
        Descoperă autenticitatea și frumusețea Maramureșului: Pensiunea noastră,
        o oază de relaxare și ospitalitate în inima României. Îmbinând tradiția
        cu confortul modern, te invităm să te bucuri de o experiență de neuitat
        într-un peisaj idilic, cu dealuri verzi și sate pitorești.
      </div>
      <div class="text-white text-2xl mt-8" style="width: 900px">
        Tratament balneoclimateric, Conditii moderne, Obiective turistice usor
        accesibile
      </div>
      <div></div>
    </div>

    <div class="bookingbar flex bg-white p-2">
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
        <el-date-picker v-model="checkOut" type="date" placeholder="Alege data">
        </el-date-picker>
      </div>
      <div class="bookingbarTitle">
        Adults
        <el-input-number v-model="adults" :min="1" :max="10"></el-input-number>
      </div>
      <div class="bookingbarTitle">
        Children
        <el-input-number
          v-model="children"
          :min="1"
          :max="10"
        ></el-input-number>
      </div>
      <div class="">
        <nuxt-link to="/Book">
          <el-button  type="warning" size="large" class="mt-5">Book now</el-button>
        </nuxt-link>
      </div>
    </div>

    <!-- about section -->
    <div style="height: 100vh; margin-top: 150px">
      <div class="text-4xl text-center">Despre Pensiunea Teleptean</div>
      <div class="text-xl flex justify-center mt-5">
        <div class="" style="width: 60vw">
          Alege din opțiunile noastre de cazare, în funcție de nevoile tale și
          de numărul de persoane. Deschide galeria pentru a vizualiza
          fotografiile cu camerele noastre disponibile.
        </div>
      </div>
      <div class="flex justify-center mt-5">
        <div class="flex" style="width: 80vw">
          <div class="flex-1">
            <RoomCard
              link="15"
              roomName="Apartament"
              button="Vezi"
              title="Apartament"
              image="https://teleptean.s3.eu-west-3.amazonaws.com/DSC_00781_ff602c0994.jpg"
              details="Cameră frumoasă și spațioasă, cu paturi king-size și un confort sporit. Începeți dimineața într-un cadru elegant cu micul dejun gratuit care include fructe proaspete, iaurt, produse de patiserie și multe altele."
            ></RoomCard>
          </div>
          <div class="flex row flex-1 ml-2">
            <div class="mr-2">
              <RoomCard
                link="17"
                :hideOverlay="true"
                image="https://hotelstil.ro/wp-content/uploads/2022/04/BW-10-3.png"
                roomName="camera3"
                button="Vezi"
                title="Camera Standard Pat Dublu"
              ></RoomCard>
            </div>
            <div>
              <RoomCard
                link="16"
                :hideOverlay="true"
                image="https://hotelstil.ro/wp-content/uploads/2022/04/BW-10-3.png"
                roomName="camera3"
                button="Vezi"
                title="Camera Standard Pat Simplu"
              ></RoomCard>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="flex justify-center">
          <div class="flex" style="width: 80vw">
            <div class="flex-1">
              <img
                src="https://hotelstil.ro/wp-content/uploads/2022/04/BW-2-10.png"
                alt=""
              />
            </div>
            <div class="flex-1">
              <img
                src="https://hotelstil.ro/wp-content/uploads/2022/04/BW-2-10.png"
                alt=""
              />
            </div>
          </div>
        </div> -->
    </div>

    <Facilities></Facilities>
    <Spa></Spa>
    <BeHappy></BeHappy>
    <ContactForm></ContactForm>
    <Footer></Footer>
  </div>
</template>

<script setup>
const checkIn = ref("");
const checkOut = ref("");
const adults = ref(2);
const children = ref(0);
</script>

<style scoped>
.parent {
  position: relative;
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
  width: 100%; /* Full width (cover the whole page) */
  height: 90vh; /* Full height (cover the whole page) */
  top: 10vh;
  left: 0;
  right: 0;
  display: block;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* Black background with opacity */
  z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
  cursor: pointer; /* Add a pointer on hover */
}
#overlaytext {
  position: absolute; /* Sit on top of the page content */
  display: none; /* Hidden by default */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 35vh;
  left: 25vw;
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
</style>
