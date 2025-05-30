<script setup lang="ts">
import type { NuxtError } from '#app'
import { en, fr } from '@nuxt/ui-pro/locale'

const locales = { fr, en }

const { error } = defineProps<{
  error: NuxtError
}>()

const { locale } = useI18n()
const head = useLocaleHead()
const localePath = useLocalePath()
useHead({ ...head.value })
</script>

<template>
  <UApp :locale="locales[locale]">
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator color="#e02956" />

    <UContainer class="min-h-[calc(100vh-var(--ui-header-height))] flex flex-col items-center justify-center text-center gap-y-16">
      <UError
        :error="error"
        :redirect="localePath('/')"
        :ui="{ root: 'min-h-auto' }"
      />
      <div class="grid items-center justify-center">
        <p class="text-2xl mb-8">
          You found a <b>dead link</b> 😱
        </p>
        <img
          src="/404link.jpg"
          alt="dead link"
          width="512"
          height="384"
          class="rounded-xl"
        />
      </div>
    </UContainer>

    <TheFooter />
  </UApp>
</template>
