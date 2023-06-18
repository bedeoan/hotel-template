import VueGoogleMaps from '@fawmi/vue-google-maps'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyDKrgyj8b-WfwUlbuGdVnC2JoKV8uC6250',
    }
  })
})