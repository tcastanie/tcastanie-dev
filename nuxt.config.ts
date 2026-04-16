import { definePerson } from 'nuxt-schema-org/schema'

export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@nuxtjs/i18n',
    '@nuxtjs/seo',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/eslint',
    '@nuxt/scripts',
  ],
  $development: {
    site: {
      url: 'http://localhost:3000',
    },
  },
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
          trigger: 'onNuxtReady',
          proxy: false,
          bundle: false,
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
      meta: [
        { name: 'theme-color', content: '#E6375A' },
        { name: 'theme-color', content: '#E02956', media: '(prefers-color-scheme: dark)' },
      ],
    },
  },
  css: ['~/assets/css/main.css'],
  site: {
    name: 'Thibaut Castanié',
    url: 'https://tcastanie.dev',
  },
  content: {
    experimental: { nativeSqlite: true },
  },
  routeRules: {
    '/projets': {
      redirect: { to: '/portfolio', statusCode: 301 },
    },
    '/projects': {
      redirect: { to: '/portfolio', statusCode: 301 },
    },
    '/blog': {
      redirect: { to: '/portfolio', statusCode: 301 },
    },
  },
  future: {
    compatibilityVersion: 5,
  },
  experimental: {
    viewTransition: true,
    nitroAutoImports: true,
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
  vite: {
    optimizeDeps: {
      include: [
        'zdog', // CJS
        '@unhead/schema-org/vue',
        '@vue/devtools-core',
        '@vue/devtools-kit',
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

  robots: {
    groups: [{
      userAgent: '*',
      disallow: '',
      contentUsage: {
        'bots': 'y',
        'train-ai': 'n',
        'search': 'y',
      },
      contentSignal: {
        'ai-train': 'no',
        'search': 'yes',
      },
    }],
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
