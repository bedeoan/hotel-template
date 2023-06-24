<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
.img-hover-zoom {
  overflow: hidden;
  cursor: pointer; /* [1.2] Hide the overflowing of child elements */
}

/* [2] Transition property for smooth transformation of images */
.img-hover-zoom img {
  transform-origin: 0 0;
  transition: transform 0.25s, visibility 0.25s ease-in;
}

/* [3] Finally, transforming the image when container gets hovered */
.img-hover-zoom:hover img {
  transform: scale(1.05);
}
</style>
