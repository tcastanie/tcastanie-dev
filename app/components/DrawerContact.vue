<script setup lang="ts">
const { t } = useI18n()

const cards = ref([
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
    should-scale-background
    set-background-color-on-scale
    :title="$t('contact')"
    :ui="{ title: 'font-hubot text-2xl' }"
  >
    <slot />
    <template #body>
      <UPageGrid class="mb-4">
        <UPageCard
          v-for="{ title, description, icon, to, target } in cards"
          :key="title"
          :title :description :icon :to :target
          spotlight
        >
          <template v-if="title === 'Malt'" #leading>
            <SvgMalt class="size-5 text-(--ui-primary)" />
          </template>
        </UPageCard>
      </UPageGrid>
    </template>
  </UDrawer>
</template>
