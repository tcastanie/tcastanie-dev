<script setup lang="ts">
const { t } = useI18n()
const { partyMode } = usePartyMode()

const cards = computed(() => [
  {
    title: t('email'),
    description: 'contact@tcastanie.dev',
    icon: 'i-mingcute-mail-send-line',
    to: 'mailto:contact@tcastanie.dev',
    target: '_blank',
  },
  {
    title: 'LinkedIn',
    description: t('lets_connect'),
    icon: 'i-mingcute-linkedin-line',
    to: 'https://www.linkedin.com/in/tcastanie',
    target: '_blank',
  },
  {
    title: 'Malt',
    description: t('hire_me'),
    to: 'https://www.malt.fr/profile/tcastanie',
    target: '_blank',
  },
])
</script>

<template>
  <UDrawer
    :title="$t('contact')"
    :ui="{ title: 'font-hubot text-2xl' }"
  >
    <slot />
    <template v-if="partyMode" #title>
      <img src="/gifs/contact.gif" width="141" height="52">
    </template>
    <template #body>
      <UPageGrid class="mb-4">
        <UPageCard
          v-for="{ title, description, icon, to, target } in cards"
          :key="title" :title :description :icon :to :target
          spotlight
        >
          <template #leading>
            <SvgMalt v-if="title === 'Malt'" class="size-5 text-primary" />
            <img v-if="partyMode && title === 'Courriel'" src="/gifs/email.gif" width="107" height="35">
          </template>
        </UPageCard>
      </UPageGrid>
    </template>
  </UDrawer>
</template>
