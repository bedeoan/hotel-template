<template>
  <div>
    <TransitionGroup
      tag="ul"
      :css="false"
      @before-enter="onBeforeEnter"
      @enter="onEnter"
      class="flex"
      @leave="onLeave"
    >
      <li
        v-for="(item, index) in listOfCoverImages"
        :key="item.msg"
        class="w-1/2 mr-1"
        :data-index="index"
      >
        <img class="rounded-lg mr-1 ml-1" :src="item.link" alt="" />
      </li>
    </TransitionGroup>
  </div>
</template>

<script setup>
const list = [
  {
    msg: "foto1",
    link: "https://teleptean.s3.eu-west-3.amazonaws.com/2018_12_02_7173cc23b7.jpg",
  },
  {
    msg: "foto2",
    link: "https://teleptean.s3.eu-west-3.amazonaws.com/small_pasted_image_0_35f5d670f4.png",
  },
];
import gsap from "gsap";
function onBeforeEnter(el) {
  el.style.opacity = 0;
  el.style.height = 0;
}
function onEnter(el, done) {
  gsap.to(el, {
    opacity: 1,
    height: "1.6em",
    duration: 1.5,
    delay: el.dataset.index * 1,
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
const listOfCoverImages = ref(null)
onMounted(() => {
  setTimeout(() => {
    listOfCoverImages.value = list
  }, 1400)
})

</script>
<style>

</style>
