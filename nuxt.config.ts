// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@nuxt/image',
  ],
  alias: {
    "./runtimeConfig": "./runtimeConfig.browser"
  },
  vite: {
    define: {
      "window.global": {}
    }
  }
})