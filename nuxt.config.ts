import { definePerson } from 'nuxt-schema-org/schema'

export default defineNuxtConfig({
  modules: [
    '@nuxt/ui-pro',
    '@nuxtjs/seo',
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
    head: {
      link: [
        { rel: 'manifest', href: '/manifest.webmanifest' },
        { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' },
        { rel: 'icon', href: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        { rel: 'icon', href: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      ],
    },
  },
  css: ['~/assets/css/main.css'],
  site: {
    url: 'https://tcastanie.dev',
  },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2025-05-29',
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
  schemaOrg: {
    identity: definePerson({
      name: 'Thibaut Castanié',
      givenName: 'Thibaut',
      familyName: 'Castanié',
      image: '/profile-photo.jpg',
      description: 'Freelance front-end web developer specialized in JavaScript, Vue, and Nuxt',
      jobTitle: 'Front-end web developer',
      email: 'contact@tcastanie.dev',
      url: 'https://tcastanie.dev',
      sameAs: [
        'https://github.com/tcastanie',
        'https://www.linkedin.com/in/tcastanie',
        'https://www.malt.fr/profile/tcastanie',
      ],
    }),
  },
})
