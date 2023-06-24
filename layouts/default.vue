<template>
  <div class="layout">
    <NavBar></NavBar>
    <div style="padding-top: 10vh">
      <slot />
    </div>
    <Footer></Footer>
  </div>
</template>

<style scoped>
.layout {
  position: relative;
}
</style>
