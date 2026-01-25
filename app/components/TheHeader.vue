<script lang="ts" setup>
const route = useRoute()
const { t } = useI18n()
const localePath = useLocalePath()
const { partyMode, togglePartyMode } = usePartyMode()

const items = computed(() => [
  {
    label: t('nav1'),
    icon: 'i-mingcute-folder-open-2-line',
    to: localePath('/portfolio'),
    active: route.path.startsWith('/portfolio') || route.path.startsWith('/en/portfolio'),
  },
  {
    label: t('nav2'),
    icon: 'i-mingcute-profile-line',
    to: localePath('/cv'),
  },
])
</script>

<template>
  <UHeader
    title="tcastanie.dev"
    :to="localePath('/')"
    mode="slideover"
    :ui="{ title: 'font-hubot' }"
  >
    <UNavigationMenu :items="items" variant="link" />

    <template #right>
      <img
        v-if="partyMode"
        src="/gifs/earth.gif"
        width="36" height="36" class="me-4"
        @click="togglePartyMode()"
      >
      <SelectLocale />

      <UColorModeButton variant="ghost" />

      <UButton icon="i-mingcute-github-line" to="https://github.com/tcastanie" target="_blank" variant="ghost" color="neutral" />
    </template>

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
    </template>
  </UHeader>
</template>
