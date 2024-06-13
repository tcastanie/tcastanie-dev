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

<script setup lang="ts">
const shitMode = useState('shitMode', () => false)

const img = useImage()
const starsImg = img('/stars.gif', { width: 304, height: 234, quality: 95, format: 'gif' })
const rocketImg = img('/rocket.gif', { width: 94, height: 50, quality: 95, format: 'gif' })

watch(shitMode, (newValue) => {
  if (newValue) {
    document.documentElement.style.backgroundImage = `url("${starsImg}")`
    document.documentElement.style.backgroundRepeat = 'repeat'
    document.documentElement.style.cursor = `url("${rocketImg}"), auto`
  }
  else {
    document.documentElement.style.backgroundImage = ''
    document.documentElement.style.backgroundRepeat = ''
    document.documentElement.style.cursor = ''
  }
})

useHead({
  htmlAttrs: {
    lang: 'fr',
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
