<template>
  <div>
    <TransitionGroup
      tag="div"
      @before-enter="onBeforeEnter"
      @enter="onEnter"
      @leave="onLeave"
    >
      <slot />
    </TransitionGroup>
  </div>
</template>

<script setup>
import gsap from 'gsap'
function onBeforeEnter (el) {
  el.style.opacity = 0
  el.style.height = 0
}
function onEnter (el, done) {
  gsap.to(el, {
    opacity: 1,
    height: 'auto',
    duration: 1,
    delay: el.dataset.index * 2,
    onComplete: done
  })
}
</script>
