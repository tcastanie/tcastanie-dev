<script lang="ts" setup>
const { shitMode, toggleShitMode } = useShitMode()
const headerLinks = [
  { label: 'CV', to: '/cv', icon: 'i-mingcute-profile-line' },
  { label: 'Projets', to: '/projets', icon: 'i-mingcute-folder-more-line' },
  { label: 'Prestations', to: '/prestations', icon: 'i-mingcute-necktie-line' },
  { label: 'Contact', to: '/contact', icon: 'i-mingcute-send-plane-line' },
]
</script>

<template>
  <UiHeader title="Thibaut Castanié" :links="headerLinks">
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
  </UiHeader>
</template>
