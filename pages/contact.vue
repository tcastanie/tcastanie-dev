<script lang="ts" setup>
const { shitMode } = useShitMode()
const contacts = [
  {
    label: 'Courriel',
    to: 'mailto:contact@tcastanie.dev',
    icon: 'i-mingcute-mail-send-line',
    description: 'Contactez-moi directement',
    kbd: 'contact@tcastanie.dev',
  },
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
]
</script>

<template>
  <BegoPage v-auto-animate>
    <BegoHero v-if="!shitMode" title="Contact" icon="i-mingcute-send-plane-fill" />
    <img
      v-else
      src="~/assets/contact.gif"
      alt="contact"
      width="141"
      height="52"
      class="py-8 sm:py-16"
    >
    <div class="grid gap-4 lg:gap-8">
      <BegoCard
        v-for="{ label, to, icon, description, kbd } of contacts"
        :key="label"
        :to="to"
        target="_blank"
      >
        <div v-auto-animate class="mb-6 flex">
          <BegoIcon
            v-if="icon && (!shitMode || label !== 'Courriel')"
            :icon="icon ? icon : ''"
            size="xl"
            :class="{ 'animate-spin': shitMode }"
          />
          <img
            v-else-if="shitMode && label === 'Courriel'"
            src="~/assets/mail.gif"
            alt="mail"
            width="60"
            height="60"
          >
          <SvgMalt v-if="label === 'Malt'" class="h-7 w-7" :class="{ 'animate-spin': shitMode }" />
        </div>
        <p class="text-lg font-semibold">
          {{ label }}
        </p>
        <p class="mt-1 text-base">
          <span>{{ description }}</span>
          <BegoKbd v-if="kbd" size="md" class="ml-2">
            {{ kbd }}
          </BegoKbd>
        </p>
      </BegoCard>
    </div>
    <img
      v-if="shitMode"
      src="~/assets/email.gif"
      alt="email"
      width="107"
      height="35"
      class="mx-auto mt-8"
    >
  </BegoPage>
</template>
