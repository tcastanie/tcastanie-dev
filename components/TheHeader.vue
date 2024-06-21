<script lang="ts" setup>
const links = [
  {
    label: 'CV',
    to: '/cv',
    icon: 'i-mingcute-profile-line',
  },
  {
    label: 'Prestations',
    to: '/prestations',
    icon: 'i-mingcute-server-line',
  },
  {
    label: 'Projets',
    to: '/projets',
    icon: 'i-mingcute-folder-more-line',
  },
  {
    label: 'Contact',
    to: '/contact',
    icon: 'i-mingcute-send-plane-line',
  },
]
</script>

<template>
  <UiTheHeader title="Thibaut Castanié" :links="links" />
  <!-- <header class="w-full mb-8 sm:mb-0">
    <div class="mx-auto max-w-7xl grid grid-cols-2 px-4 lg:px-8 sm:px-6 sm:grid-cols-4 gap-y-2">
      <div class="flex items-center">
        <NuxtLink to="/" class="text-xl font-bold sm:text-2xl hover:text-bego-3">
          Thibaut Castanié
        </NuxtLink>
      </div>
      <ul class="flex items-center justify-evenly sm:justify-end gap-x-8 col-span-2">
        <li v-for="link in links" :key="link.label">
          <NuxtLink
            :to="link.to"
            class="flex flex-col items-center gap-1 text-sm font-semibold sm:flex-row hover:text-bego-0"
            :class="{ 'text-bego-0': $route.path === link.to }"
            :aria-label="link.label"
          >
            <span :class="link.icon" class="h-6 w-6" aria-hidden="true" />
            <span class="">{{ link.label }}</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </header> -->
</template>
