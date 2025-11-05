<script setup lang="ts">
import { en, fr } from '@nuxt/ui/locale'

const locales = { fr, en }
const { locale } = useI18n()
const head = useLocaleHead()
useHead({ ...head.value })
</script>

<template>
  <UApp :locale="locales[locale]">
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator color="#e6375a" />

    <TheHeader />

    <UContainer>
      <UMain>
        <NuxtPage />
      </UMain>
    </UContainer>

    <TheFooter />
  </UApp>
</template>
