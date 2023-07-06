<template>
  <div class="layout">
    <NavBar />
    <div style="padding-top: 10vh">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<style scoped>
.layout {
  position: relative;
}
</style>
