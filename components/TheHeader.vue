<template>
  <header class="w-full">
    <div class="mx-auto h-16 max-w-7xl flex items-center justify-between px-4 lg:px-8 sm:px-6">
      <div class="flex items-center gap-1.5 lg:flex-1">
        <ul class="flex items-center gap-x-8">
          <li v-for="link in links" :key="link.label">
            <NuxtLink
              :to="link.href"
              class="flex flex-col items-center gap-1 text-sm font-semibold sm:flex-row hover:text-bego-0"
              :class="{ 'text-bego-0': $route.path === link.href }"
              :aria-label="link.label"
            >
              <span :class="link.icon" class="h-5 w-5" aria-hidden="true" />
              <span class="">{{ link.label }}</span>
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div class="flex items-center text-right">
        <NuxtLink to="/" class="text-xl font-bold sm:text-2xl hover:text-bego-3">
          Thibaut Castanié
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
const links = [
  { label: 'CV', href: '/cv', icon: 'i-mingcute-profile-line' },
  { label: 'Projets', href: '/projets', icon: 'i-mingcute-folder-more-line' },
  { label: 'Contact', href: '/contact', icon: 'i-mingcute-send-plane-line' }
]
</script>
