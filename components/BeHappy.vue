<template>
  <div style="height: 45vh; position: relative" class="flex items-center">
    <div>
      <img
        class="coverimg"
        src="https://hotelstil.ro/wp-content/uploads/2022/04/Mask-group.png"
      />
      <div class="overlay"></div>
      <div class="overlaytext">
        <div class="text-3xl" style="margin-top: 50px">
          Bucura-te de timpul petrecut alaturi de noi
        </div>
        <div class="my-5 px-2">
          Puteți avea o ședere relaxantă și liniștită la Pensiunea Teleptean,
          având încrederea că ne ocupăm de tot ce ține de confortul
          dumneavoastră. Dacă aveți întrebări pentru noi:
        </div>
        <BookButton label="Contacteaza-ne"></BookButton>
      </div>
    </div>
  </div>
</template>

<style scoped>
.coverimg {
  width: 100vw;
  height: 38vh;
  object-fit: cover;
}
.overlay {
  position: absolute; /* Sit on top of the page content */
  display: none; /* Hidden by default */
  width: 100%; /* Full width (cover the whole page) */
  height: 45vh; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  display: block;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.861); /* Black background with opacity */
  z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
  cursor: pointer; /* Add a pointer on hover */
}
.overlaytext {
  position: absolute; /* Sit on top of the page content */
  display: none; /* Hidden by default */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 1vh;
  right: 0;
  display: block;
  bottom: 0;
  z-index: 5; /* Specify a stack order in case you're using a different order for other elements */
  cursor: pointer;
  text-align: center;
  color: #ffffff;
  font-family: "Poppins", Sans-serif;
}
</style>
