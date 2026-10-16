<script lang="ts" setup>
import { en, fr } from '@nuxt/ui/locale'

const { locale, setLocale } = useI18n()

const locales = [
  { ...fr, name: 'FR' },
  { ...en, name: 'EN', code: 'en-GB' },
]

const model = computed({
  get: () => (locale.value === 'en' ? 'en-GB' : locale.value),
  set: code => setLocale(code.split('-')[0] as typeof locale.value),
})
</script>

<template>
  <ULocaleSelect
    v-model="model"
    :locales="locales"
    variant="ghost"
    :ui="{
      trailingIcon: 'group-data-[state=open]:rotate-180 transition-transform duration-200',
    }"
  />
</template>
