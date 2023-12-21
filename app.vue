<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'fr',
    class: 'bg-zinc-800 text-white'
  },
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
