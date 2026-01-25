import { definePerson } from 'nuxt-schema-org/schema'

export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@nuxtjs/seo',
    '@nuxt/content',
    '@nuxtjs/i18n',
    '@nuxt/image',
    '@nuxt/eslint',
    '@nuxt/scripts',
  ],
  $production: {
    runtimeConfig: {
      public: {
        scripts: {
          umamiAnalytics: {
            websiteId: '',
            scriptInput: {
              src: '',
            },
          },
        },
      },
    },
    scripts: {
      registry: {
        umamiAnalytics: {
          websiteId: import.meta.env.NUXT_PUBLIC_SCRIPTS_UMAMI_ANALYTICS_WEBSITE_ID,
          scriptInput: {
            src: import.meta.env.NUXT_PUBLIC_SCRIPTS_UMAMI_ANALYTICS_SCRIPT_INPUT_SRC,
          },
        },
      },
    },
  },
  devtools: { enabled: true },
  app: {
    rootAttrs: {
      class: 'font-mona',
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
  routeRules: {
    '/projets': {
      redirect: { to: '/portfolio', statusCode: 308 },
    },
  },
  experimental: {
    viewTransition: true,
  },
  compatibilityDate: '2025-05-29',
  nitro: {
    prerender: {
      routes: [
        '/portfolio/star-status',
        '/portfolio/quick-ui-designs',
        '/portfolio/wacky-planets',
        '/portfolio/nuxt-bego-ui',
        '/portfolio/another-apod-viewer',
        '/en/portfolio/star-status',
        '/en/portfolio/quick-ui-designs',
        '/en/portfolio/wacky-planets',
        '/en/portfolio/nuxt-bego-ui',
        '/en/portfolio/another-apod-viewer',
      ],
    },
  },
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
  },
  icon: {
    clientBundle: {
      scan: {
        globInclude: [
          '**/*.{vue,jsx,tsx,md,mdc,mdx,yml,yaml}',
          '**/app.config.ts',
        ],
      },
    },
  },
  schemaOrg: {
    identity: definePerson({
      name: 'Thibaut Castanié',
      givenName: 'Thibaut',
      familyName: 'Castanié',
      image: '/avatar.jpg',
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

  sitemap: {
    zeroRuntime: true,
  },
})
