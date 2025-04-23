<script setup lang="ts">
import * as locales from '@nuxt/ui-pro/locale'

const { locale } = useI18n()
const head = useLocaleHead()
useHead({ ...head.value })
</script>

<template>
  <UApp :locale="locales[locale]">
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator color="#e02956" />

    <TheHeader />

    <UContainer>
      <UMain>
        <NuxtPage />
      </UMain>
    </UContainer>

    <TheFooter />
  </UApp>
</template>
