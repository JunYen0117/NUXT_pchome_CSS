// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '~/assets/styles/main.scss',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
})
