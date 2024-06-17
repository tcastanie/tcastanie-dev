<script setup lang="ts">
const { shitMode } = useShitMode()

useHead({
  htmlAttrs: {
    class: 'bg-zinc-800 text-white',
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
  ],
})
</script>

<template>
  <div>
    <TheHeader />
    <main :class="shitMode ? 'min-h-[calc(100vh-8.5rem)]' : 'min-h-[calc(100vh-6rem)]'">
      <div class="mx-auto max-w-2xl px-4 pb-32 pt-8 lg:px-8 sm:px-6 sm:pt-16">
        <NuxtPage />
      </div>
    </main>
    <TheFooter />
  </div>
</template>

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
