<script lang="ts" setup>
import { en, fr } from '@nuxt/ui/locale'

const { locale, setLocale } = useI18n()

const frLabel = { ...fr, label: 'FR' }
const enLabel = { ...en, label: 'EN' }

function getEmojiFlag(locale: string): string {
  const countryCode = locale === 'en' ? 'gb' : 'fr'
  return countryCode.toUpperCase()
    .split('')
    .map(char => String.fromCodePoint(0x1F1A5 + char.charCodeAt(0)))
    .join('')
}
</script>

<template>
  <USelectMenu
    v-model="locale"
    :items="[frLabel, enLabel]"
    :search-input="false"
    label-key="label"
    value-key="code"
    variant="ghost"
    :ui="{
      trailingIcon: 'group-data-[state=open]:rotate-180 transition-transform duration-200',
    }"
    @change="setLocale(locale)"
  >
    <template #leading>
      <span v-if="locale" class="size-5 text-center">
        {{ getEmojiFlag(locale) }}
      </span>
    </template>

    <template #item-leading="{ item }">
      <span class="size-5 text-center">
        {{ getEmojiFlag(item.code) }}
      </span>
    </template>
  </USelectMenu>
</template>
