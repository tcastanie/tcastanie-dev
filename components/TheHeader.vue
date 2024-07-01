<script lang="ts" setup>
const { shitMode, toggleShitMode } = useShitMode()
const links = [
  { label: 'CV', to: '/cv', icon: 'i-mingcute-profile-line' },
  { label: 'Prestations', to: '/prestations', icon: 'i-mingcute-server-line' },
  { label: 'Projets', to: '/projets', icon: 'i-mingcute-folder-more-line' },
  { label: 'Contact', to: '/contact', icon: 'i-mingcute-send-plane-line' },
]
</script>

<template>
  <UiTheHeader title="Thibaut Castanié" :links="links">
    <template #right>
      <UiButton
        variant="ghost"
        icon="i-mingcute-planet-line"
        square
        :white="!shitMode"
        :class="{ 'animate-spin': shitMode }"
        @click="toggleShitMode()"
      />
    </template>
  </UiTheHeader>
</template>
