import { ref } from 'vue'
export const useCustomFade = (list) => {
  const { isMobile } = useDevice()
  const target = ref(null)
  const targetIsVisible = ref(false)

  useIntersectionObserver(target, ([{ isIntersecting }]) => {
    if (isIntersecting) {
      targetIsVisible.value = isIntersecting
    }
  })

  const filteredList = computed(() => {
    if (isMobile) {
      return list.value.filter(item => item && targetIsVisible.value)
    }
    return list.value
  })

  return {
    target,
    targetIsVisible,
    filteredList
  }
}
