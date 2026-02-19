<script setup lang="ts">
import { en, fr } from '@nuxt/ui/locale'

const locales = { fr, en }
const { locale } = useI18n()
const head = useLocaleHead()
const { partyMode } = usePartyMode()
useHead({
  ...head.value,
  bodyAttrs: {
    style: {
      'background-image': () => partyMode.value ? 'url(/gifs/stars.gif)' : false,
      'background-repeat': () => partyMode.value ? 'repeat' : false,
      'cursor': () => partyMode.value ? 'url("/gifs/rocket.gif"), auto' : false,
    },
  },
})
</script>

<template>
  <UApp :locale="locales[locale]">
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator color="#e6375a" />

    <TheHeader />

    <UMain as="main">
      <UContainer>
        <NuxtPage />
      </UContainer>
    </UMain>

    <TheFooter />
  </UApp>
</template>
