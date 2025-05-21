<script lang="ts" setup>
import { en, fr } from '@nuxt/ui/locale'

const { locale, setLocale } = useI18n()
</script>

<template>
  <UFooter :ui="{ left: 'text-muted' }">
    <template #left>
      <UIcon name="i-mingcute-copyright-line" />
      <UButton
        label="CC BY-NC-SA 4.0"
        variant="link"
        href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
        target="_blank"
        color="neutral"
      />
      <div>tcastanie.dev {{ new Date().getFullYear() }}</div>
    </template>
    <template #right>
      <ULocaleSelect
        v-model="locale"
        :locales="[en, fr]"
        trailing-icon="i-mingcute-up-line"
        variant="ghost"
        @change="setLocale(locale)"
      />
      <UColorModeButton variant="ghost" />
    </template>
  </UFooter>
</template>

<style scoped>

</style>
