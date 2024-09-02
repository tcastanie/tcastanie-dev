export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  compatibilityDate: '2024-07-03',
  extends: 'github:tcastanie/nuxt-bego-ui',
  modules: [
    '@formkit/auto-animate/nuxt',
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxtjs/seo',
    '@unocss/nuxt',
    '@vueuse/nuxt',
  ],
  css: ['@unocss/reset/tailwind.css'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      link: [
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
    },
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  image: {
    dir: 'assets',
    quality: 90,
  },
  content: {
    locales: ['fr'],
    highlight: {
      theme: 'one-dark-pro',
      langs: ['json', 'js', 'vue'],
    },
  },
  site: {
    url: 'https://tcastanie.dev',
    name: 'tcastanie.dev',
    description: 'Site web personnel de Thibaut Castanié, développeur web indépendant spécialisé en JavaScript, Vue et Nuxt',
    defaultLocale: 'fr',
  },
  ogImage: {
    enabled: false,
  },
  schemaOrg: {
    identity: 'Person',
  },
})
