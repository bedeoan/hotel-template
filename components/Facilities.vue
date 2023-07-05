<template>
  <div class="flex row parent">
    <div class="flex-1">
      <div class="text-4xl text-center">Facilitati Pensiunea Teleptean</div>
      <div class="text-center my-5 px-3">
        Tratamentul balneoclimateric este esențial pentru întreținerea
        sănătății. Oferim diverse terapii precum sauna umedă, ideală pentru
        detoxifiere și relaxare. Sauna uscată stimulează circulația, ameliorând
        durerile musculare. Salina purifică sistemul respirator, iar masajul
        relaxează musculatura și alină stresul.
      </div>
      <div class="flex flex-center text-xl mt-2 facilitylist mr-10">
        <TransitionGroup
          tag="div"
          @before-enter="onBeforeEnter"
          @enter="onEnter"
          @leave="onLeave"
        >
          <div
            v-for="(facility, index) in facilityList"
            :key="index"
            class="mt-2"
          >
            <div v-if="facility.name !== 'Mai multe informatii'">
              <el-icon color="orange"><CircleCheck /></el-icon>
              {{ facility.name }}
            </div>
            <div v-else>
              <nuxt-link to="/contact">
                <el-button type="primary">Mai multe informatii</el-button>
              </nuxt-link>
            </div>
          </div>
        </TransitionGroup>
      </div>
    </div>
    <div v-if="!$device.isMobile" class="flex-1">
      <div>
        <img
          class="shadow"
          style="width: 35vw; margin-left: 100px; border-radius: 20px"
          src="https://teleptean.s3.eu-west-3.amazonaws.com/small_big_pensiunea_teleptean_ocna_sugatag_qzd6458vg1am_278e0d6ad4.jpg"
        />
      </div>
      <div class="overlay">
        <img
          src="https://teleptean.s3.eu-west-3.amazonaws.com/small_pasted_image_0_35f5d670f4.png"
          style="width: 20vw; border-radius: 20px"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { CircleCheck, InfoFilled } from "@element-plus/icons-vue";
import gsap from "gsap";

const props = defineProps({
  scrollY: Number,
});
function onBeforeEnter(el) {
  el.style.opacity = 0;
  el.style.height = 0;
}

function onEnter(el, done) {
  gsap.to(el, {
    opacity: 1,
    height: "auto",
    duration: 2,
    delay: el.dataset.index * 2,
    onComplete: done,
  });
}
const list = ref([
  {
    name: "Tratament Balneoclimateric",
  },
  { name: "Salina" },
  { name: "Masaj" },
  { name: "Sauna uscata" },
  { name: "Sauna umeda" },
  { name: "Mai multe informatii" },
]);
const { isMobile } = useDevice();
const facilityList = computed(() => {
  if (isMobile) {
    return list.value.filter((item) => props.scrollY > 1300);
  }
  return list.value;
});
</script>

<style scoped>
.facilitylist {
  display: flex;
  align-items: center;
  justify-content: center;
}
.parent {
  position: relative;
}
.overlay {
  position: absolute;
  top: 25vh;
  right: 0vw;
  width: 900px;
  height: 10px;
  z-index: 5;
  border-radius: 10px; /* Add a pointer on hover */
}
.shadow {
  padding: 10px;
  box-shadow: 5px 10px 8px 8px #cccccc64;
}
</style>
