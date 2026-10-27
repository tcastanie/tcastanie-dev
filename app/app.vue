<script setup lang="ts">
const { partyMode } = usePartyMode()
useHead(useLocaleHead())
useHead({
  bodyAttrs: {
    style: {
      'background-image': () => partyMode.value ? 'url(/gifs/stars.gif)' : false,
      'background-repeat': () => partyMode.value ? 'repeat' : false,
      'cursor': () => partyMode.value ? 'url("/gifs/rocket.gif"), auto' : false,
    },
  },
  script: useScripts(),
})
</script>

<template>
  <UApp>
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator color="var(--ui-primary)" />

    <TheHeader />

    <UMain>
      <UContainer>
        <NuxtPage />
      </UContainer>
    </UMain>

    <TheFooter />
  </UApp>
</template>
