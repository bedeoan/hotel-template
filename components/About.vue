<template>
  <div>
    <div style="margin-top: 5vh">
      <div class="text-2xl text-center"  ref="target1">Despre Pensiunea Teleptean</div>
      <div class="flex justify-center mt-5">
        <div class="details">
          Alege din opțiunile noastre de cazare, în funcție de nevoile tale și
          de numărul de persoane. Deschide galeria pentru a vizualiza
          fotografiile cu camerele noastre disponibile.
        </div>
      </div>
      <div v-if="!$device.isMobile" class="flex justify-center mt-5">
        <div class="flex row" style="width: 80vw">
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
          <div class="flex-1 ml-2">
            <RoomCard
              link="17"
              :hideOverlay="true"
              image="https://teleptean.s3.eu-west-3.amazonaws.com/DSC_00967_bff4aadeee.jpg"
              roomName="Camera dubla"
              title="Camera dubla"
              details="Cameră frumoasă și spațioasă, cu paturi king-size și un con"
              button="Vezi"
            ></RoomCard>
          </div>
        </div>
      </div>
      <div class="pa-2" v-else>
        <Customfade>
          <div
            v-for="(item, index) in filteredList"
            :key="index"
            :data-index="index"
            style="height: auto; background: red"
            class="mx-2 mb-2"
          >
            <RoomCard
              :link="item.link"
              :hideOverlay="item.hideOverlay"
              :image="item.image"
              :roomName="item.name"
              :details="item.details"
              button="Vezi"
              title="Camera Dubla"
            ></RoomCard>
          </div>
        </Customfade>
      </div>

      <!-- <div class="mx-2 mb-2">
     
        </div> -->
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

<script setup>
const list = ref([
  {
    title: "Apartament",
    link: 17,
    image: "https://teleptean.s3.eu-west-3.amazonaws.com/DSC_00781_ff602c0994.jpg",
    hideOverlay: false,
    details:
      "Cameră frumoasă și spațioasă, cu paturi king-size și un confort sporit. Începeți dimineața într-un cadru elegant cu micul dejun gratuit, bogat si variat.",
  },
  {
    title: "Camera dubla",
    link: 15,
    image: "https://teleptean.s3.eu-west-3.amazonaws.com/DSC_00967_bff4aadeee.jpg",
    hideOverlay: true,
    details: "Cameră frumoasă și spațioasă, cu paturi king-size și un con"
  },
]);
const { filteredList, target: target1 } = useCustomFade(list);
</script>

<style scoped>
@media only screen and (min-width: 600px) {
  .details {
    width: 60vw;
  }
}

@media only screen and (max-width: 600px) {
  .details {
    width: 100vw;
    font-size: 8px;
    padding: 10px;
  }
}
</style>
