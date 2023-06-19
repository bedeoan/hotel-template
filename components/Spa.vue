<template>
  <div class="flex row parent" style="height: 70vh">
    <div class="flex-1 flex flex-row-reverse">
      <div class="mr-5">
        <img
          class="shadow"
          style="width: 35vw; border-radius: 20px"
          src="https://www.ofertesejurromania.ro/wp-content/uploads/2016/06/Statiunea_Ocna_Sugatag-1.jpg"
        />
      </div>
      <div class="overlay1">
        <img
          src="https://www.teleptean.ro/images/pool/piscina.jpg"
          style="border-radius: 20px"
        />
      </div>
      <div class="overlay2">
        <img
          src="https://www.picomartravel.ro/cache/e/6/6/e/1/e66e1c25dc03280cd556b171c88215e7585152fa.jpeg"
          style="border-radius: 20px"
        />
      </div>
    </div>
    <div class="flex-1">
      <div class="text-4xl text-center">Descopera Tratamentul Balneo Climateric</div>
      <div class="text-center my-5" style="width:40vw">
        Tratamentul balneo-climateric oferă numeroase beneficii pentru sănătate și bunăstare. Acest tip de terapie combină proprietățile vindecătoare ale apelor minerale și ale climatului, creând un mediu ideal pentru relaxare și refacere. Beneficiile tratamentului balneo-climateric sunt multiple: stimularea circulației sanguine și limfatice, reducerea durerilor articulare și musculare, ameliorarea stresului și anxietății, întărirea sistemului imunitar, detoxifierea organismului, îmbunătățirea sănătății pielii și a funcției respiratorii. De asemenea, acest tratament poate contribui la reglarea tensiunii arteriale, la reducerea insomniei și la ameliorarea afecțiunilor reumatice. Prin combinația dintre apele minerale și climatul specific, tratamentul balneo-climateric devine o experiență terapeutică holistică, având efecte benefice asupra întregului organism.
      </div>
    </div>
  </div>
</template>

<script setup>
import { CircleCheck, InfoFilled } from "@element-plus/icons-vue";
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
.overlay1 {
  position: absolute;
  top: 25vh;
  left: 12vw;
  width: 15vw;
  height: 10px;
  z-index: 5;
  border-radius: 10px; /* Add a pointer on hover */
}
.overlay2 {
  position: absolute;
  top: 35vh;
  left: 20vw;
  width: 15vw;
  height: 10px;
  z-index: 5;
  border-radius: 10px; /* Add a pointer on hover */
}
.shadow {
  padding: 10px;
  box-shadow: 5px 10px 8px 8px #cccccc64;
}
</style>
