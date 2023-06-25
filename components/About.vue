<template>
  <div>
    <div style="margin-top: 5vh">
      <div class="text-4xl text-center">Despre Pensiunea Teleptean</div>
      <div class="text-xl flex justify-center mt-5">
        <div :class="$device.isDesktop ? 'details' : 'details text-md'">
          Alege din opțiunile noastre de cazare, în funcție de nevoile tale și
          de numărul de persoane. Deschide galeria pentru a vizualiza
          fotografiile cu camerele noastre disponibile.
        </div>
      </div>
      <div v-if="!$device.isMobile" class="flex justify-center mt-5">
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
      <div class="pa-2" v-else>
        <div class="mx-2 mb-2">
          <RoomCard
            link="15"
            roomName="Apartament"
            button="Vezi"
            title="Apartament"
            image="https://teleptean.s3.eu-west-3.amazonaws.com/DSC_00781_ff602c0994.jpg"
            details="Cameră frumoasă și spațioasă, cu paturi king-size și un confort sporit. Începeți dimineața într-un cadru elegant cu micul dejun gratuit care include fructe proaspete, iaurt, produse de patiserie și multe altele."
          ></RoomCard>
        </div>

        <div class="mx-2 mb-2">
          <RoomCard
            link="17"
            :hideOverlay="true"
            image="https://hotelstil.ro/wp-content/uploads/2022/04/BW-10-3.png"
            roomName="camera3"
            button="Vezi"
            title="Camera Standard Pat Dublu"
          ></RoomCard>
        </div>
        <div class="mx-2 mb-2">
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
  </div>
</template>
<style scoped>
@media only screen and (min-width: 600px) {
  .details {
    width: 60vw;
  }
}

@media only screen and (max-width: 600px) {
  .details {
    width: 100vw;
    font-size: 16x;
    padding: 10px;
  }
}
</style>
