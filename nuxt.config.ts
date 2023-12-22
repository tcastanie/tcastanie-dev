// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  modules: [
    '@nuxtjs/eslint-module',
    '@unocss/nuxt',
    '@formkit/auto-animate/nuxt',
    '@nuxt/image'
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  eslint: {
    lintOnStart: false
  },
  css: ['@unocss/reset/tailwind.css'],
  image: {
    dir: 'assets',
    quality: 95
  }
})
