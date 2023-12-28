<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const shitMode = useState('shitMode', () => false)
const img = useImage()
const starsImg = img('/stars.gif', { width: 304, height: 234, quality: 95, format: 'gif' })
const rocketImg = img('/rocket.gif', { width: 94, height: 50, quality: 95, format: 'gif' })

const htmlAttrs = computed(() => ({
  lang: 'fr',
  class: 'bg-zinc-800 text-white',
  style: shitMode.value ? `background-image: url("${starsImg}"); background-repeat: repeat; cursor: url("${rocketImg}"), auto` : ''
}))
useHead({
  htmlAttrs,
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png'
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png'
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest'
    }
  ]
})
useSeoMeta({
  title: 'tcastanie.dev',
  ogTitle: 'tcastanie.dev',
  description: 'Site web personnel de Thibaut Castanié, développeur web indépendant spécialisé en JavaScript.',
  ogDescription: 'Site web personnel de Thibaut Castanié, développeur web indépendant spécialisé en JavaScript.',
  ogUrl: 'https://tcastanie.dev'
})
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.5rem);
}
</style>
