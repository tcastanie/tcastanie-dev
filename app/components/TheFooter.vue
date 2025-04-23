<script lang="ts" setup>
import { en, fr } from '@nuxt/ui/locale'

const { locale, setLocale } = useI18n()
</script>

<template>
  <UFooter>
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
