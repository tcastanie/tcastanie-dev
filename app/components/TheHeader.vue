<script lang="ts" setup>
const route = useRoute()
const { t } = useI18n()
const getRouteBaseName = useRouteBaseName()
const { partyMode, togglePartyMode } = usePartyMode()

const items = computed(() => [{
  label: t('nav1'),
  icon: 'i-mingcute-folder-open-2-line',
  to: '/portfolio',
  active: getRouteBaseName(route)?.startsWith('portfolio'),
}, {
  label: t('nav2'),
  icon: 'i-mingcute-profile-line',
  to: '/cv',
}])
</script>

<template>
  <UHeader
    title="tcastanie.dev"
    to="/"
    mode="slideover"
    class="font-hubot"
    :ui="{
      root: partyMode ? 'backdrop-blur-none' : undefined,
      body: 'grid',
      content: 'max-w-xs',
    }"
  >
    <UNavigationMenu :items="items" variant="link" />

    <template #right>
      <img
        v-if="partyMode"
        src="/gifs/earth.gif"
        width="36" height="36" class="me-4"
        @click="togglePartyMode()"
      >
      <SelectLocale class="hidden lg:flex" />

      <UColorModeButton variant="ghost" />

      <UButton icon="i-mingcute-github-line" to="https://github.com/tcastanie" target="_blank" variant="ghost" color="neutral" />
    </template>

    <template #body>
      <SelectLocale class="lg:hidden justify-self-end mb-4" />
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
    </template>
  </UHeader>
</template>
