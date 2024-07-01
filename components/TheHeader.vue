<script lang="ts" setup>
const links = [
  { label: 'CV', to: '/cv', icon: 'i-mingcute-profile-line' },
  { label: 'Prestations', to: '/prestations', icon: 'i-mingcute-server-line' },
  { label: 'Projets', to: '/projets', icon: 'i-mingcute-folder-more-line' },
  { label: 'Contact', to: '/contact', icon: 'i-mingcute-send-plane-line' },
]
</script>

<template>
  <UiTheHeader title="Thibaut Castanié" :links="links" />
</template>
