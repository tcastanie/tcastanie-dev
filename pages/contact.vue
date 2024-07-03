<script lang="ts" setup>
const { shitMode } = useShitMode()
const contacts = [
  {
    label: 'Malt',
    to: 'https://www.malt.fr/profile/tcastanie',
    description: 'Embauchez-moi pour vos projets web.',
  },
  {
    label: 'LinkedIn',
    to: 'https://www.linkedin.com/in/tcastanie',
    icon: 'i-mingcute-linkedin-line',
    description: 'Connectons-nous !',
  },
  {
    label: 'Courriel',
    to: 'mailto:contact@tcastanie.dev',
    icon: 'i-mingcute-mail-send-line',
    description: 'Contactez-moi directement',
    kbd: 'contact@tcastanie.dev',
  },
]
</script>

<template>
  <UiPage v-auto-animate>
    <UiHero v-if="!shitMode" title="Contact" icon="i-mingcute-send-plane-line" />
    <NuxtImg
      v-else
      src="/contact.gif"
      alt="contact"
      format="gif"
      width="141"
      height="52"
      class="mx-auto py-8 sm:py-16"
    />
    <div class="grid gap-4 lg:gap-8">
      <UiCard
        v-for="{ label, to, icon, description, kbd } of contacts"
        :key="label"
        :to="to"
        target="_blank"
      >
        <div v-auto-animate class="mb-6 flex">
          <UiIcon
            v-if="icon && (!shitMode || label !== 'Courriel')"
            :icon="icon ? icon : ''"
            size="xl"
            :class="{ 'animate-spin': shitMode }"
          />
          <NuxtImg
            v-else-if="shitMode && label === 'Courriel'"
            src="/mail.gif"
            alt="mail"
            format="gif"
            width="60"
            height="60"
          />
          <SvgMalt v-if="label === 'Malt'" class="h-7 w-7" :class="{ 'animate-spin': shitMode }" />
        </div>
        <p class="text-lg font-semibold">
          {{ label }}
        </p>
        <p class="mt-1 text-base">
          <span>{{ description }}</span>
          <UiKbd v-if="kbd" size="md" class="ml-2">
            {{ kbd }}
          </UiKbd>
        </p>
      </UiCard>
    </div>
    <NuxtImg
      v-if="shitMode"
      src="/email.gif"
      alt="email"
      format="gif"
      width="107"
      height="35"
      class="mx-auto mt-8"
    />
  </UiPage>
</template>
