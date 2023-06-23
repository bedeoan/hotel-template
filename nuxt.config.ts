export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
      '@nuxtjs/tailwindcss',
      '@element-plus/nuxt'
  ],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  runtimeConfig: {
    secret: process.env.SECRET,
    public: {
      GALERY_0_NAME: process.env.GALERY_0_NAME,
      GALERY_0_LINK: process.env.GALERY_0_LINK,
      GALERY_1_NAME: process.env.GALERY_1_NAME,
      GALERY_1_LINK: process.env.GALERY_1_LINK,
      GALERY_2_NAME: process.env.GALERY_2_NAME,
      GALERY_2_LINK: process.env.GALERY_2_LINK,
      GOOGLE_API: process.env.GOOGLE_API,
      LATITUDE: process.env.LATITUDE,
      LONGITUDE: process.env.LONGITUDE,
      CONTACT_PHONE1: process.env.CONTACT_PHONE1,
      CONTACT_PHONE2: process.env.CONTACT_PHONE2,
      HOTEL_NAME: process.env.HOTEL_NAME
    }
  }
});
