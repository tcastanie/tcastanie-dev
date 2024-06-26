// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  modules: [
    '@unocss/nuxt',
    '@formkit/auto-animate/nuxt',
    '@nuxt/image',
    '@nuxtjs/seo',
    '@nuxt/eslint',
    '@vueuse/nuxt',
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  css: ['@unocss/reset/tailwind.css'],
  image: {
    dir: 'assets',
    quality: 95,
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  site: {
    url: 'https://tcastanie.dev',
    name: 'Thibaut Castanié',
    description: 'Site web personnel de Thibaut Castanié, développeur web indépendant spécialisé en JavaScript, Vue et Nuxt',
    defaultLocale: 'fr',
  },
  ogImage: {
    enabled: false,
  },
  schemaOrg: {
    identity: 'Person',
  },
  nitro: {
    prerender: {
      routes: [
        '/',
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
        '/_ipx/f_gif&q_95&s_208x43/text.gif',
        '/_ipx/f_gif&q_95&s_60x60/mail.gif',
        '/_ipx/f_gif&q_95&s_120x120/mail.gif',
        '/_ipx/f_webp&q_95&s_88x31/valid-html40.png',
        '/_ipx/f_webp&q_95&s_176x62/valid-html40.png',
        '/_ipx/f_webp&q_95&s_88x31/valid-css2.png',
        '/_ipx/f_webp&q_95&s_176x62/valid-css2.png',
        '/_ipx/f_gif&q_95&s_141x52/contact.gif',
        '/_ipx/f_gif&q_95&s_282x104/contact.gif',
        '/_ipx/f_gif&q_95&s_107x35/email.gif',
        '/_ipx/f_gif&q_95&s_214x70/email.gif',
        '/_ipx/f_gif&q_95&s_575x10/bluline.gif',
        '/_ipx/f_gif&q_95&s_1150x20/bluline.gif',
      ],
    },
  },
})
