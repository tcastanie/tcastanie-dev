// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/ui-pro',
    '@nuxt/content',
    '@nuxtjs/i18n',
    '@nuxt/image',
    '@nuxt/eslint',
  ],
  devtools: { enabled: true },
  app: {
    rootAttrs: {
      'data-vaul-drawer-wrapper': '',
      'class': 'font-mona',
    },
  },
  css: ['~/assets/css/main.css'],
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-11-01',
  eslint: {
    config: {
      standalone: false,
      stylistic: true,
    },
  },
  i18n: {
    baseUrl: 'https://tcastanie.dev',
    locales: [
      {
        code: 'fr',
        name: 'Français',
        language: 'fr',
        file: 'fr.json',
        dir: 'ltr',
      },
      {
        code: 'en',
        name: 'English',
        language: 'en',
        file: 'en.json',
        dir: 'ltr',
      },
    ],
    defaultLocale: 'fr',
    strategy: 'prefix_except_default',
    bundle: {
      optimizeTranslationDirective: false,
    },
  },
  icon: {
    clientBundle: {
      scan: true,
    },
  },
})
