export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
      '@nuxtjs/tailwindcss',
      '@element-plus/nuxt',
      '@nuxtjs/device',
      '@vueuse/nuxt',
  ],
  
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  build: {
    transpile: ['gsap'],
  },
  runtimeConfig: {
    secret: process.env.SECRET,
    public: {
      ...process.env
    }
  }
});
