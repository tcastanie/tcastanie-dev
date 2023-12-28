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
  },
  nitro: {
    prerender: {
      routes: [
        '/_ipx/f_gif&q_95&s_200x43/ufo.gif',
        '/_ipx/f_gif&q_95&s_400x86/ufo.gif',
        '/_ipx/f_gif&q_95&s_36x36/earth.gif',
        '/_ipx/f_gif&q_95&s_72x72/earth.gif',
        '/_ipx/f_gif&q_95&s_96x66/construction.gif',
        '/_ipx/f_gif&q_95&s_192x132/construction.gif',
        '/_ipx/f_gif&q_95&s_50x82/cmcdconstruction.gif',
        '/_ipx/f_gif&q_95&s_100x164/cmcdconstruction.gif',
        '/_ipx/f_gif&q_95&s_90x85/construction2.gif',
        '/_ipx/f_gif&q_95&s_180x170/construction2.gif',
        '/_ipx/f_gif&q_95&s_78x53/building.gif',
        '/_ipx/f_gif&q_95&s_156x106/building.gif',
        '/_ipx/f_gif&q_95&s_90x200/alien.gif',
        '/_ipx/f_gif&q_95&s_180x400/alien.gif',
        '/_ipx/f_gif&q_95&s_416x86/text.gif',
        '/_ipx/f_gif&q_95&s_208x43/text.gif'
      ]
    }
  }
})
