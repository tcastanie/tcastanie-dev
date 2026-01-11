<script setup lang="ts">
import { en, fr } from '@nuxt/ui/locale'

const locales = { fr, en }
const { locale } = useI18n()
const head = useLocaleHead()
const { partyMode } = usePartyMode()
const bodyAttrs = computed(() => {
  return {
    style: {
      'background-image': partyMode.value ? 'url(/gifs/stars.gif)' : '',
      'background-repeat': partyMode.value ? 'repeat' : '',
      'cursor': partyMode.value ? 'url("/gifs/rocket.gif"), auto' : '',
    },
  }
})
useHead({
  ...head.value,
  // @ts-expect-error: doesn't match useHead typings
  bodyAttrs,
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
