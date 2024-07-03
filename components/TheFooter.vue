<script lang="ts" setup>
const { shitMode, toggleShitMode } = useShitMode()

const linksRight = [
  {
    label: 'Linkedin',
    to: 'https://www.linkedin.com/in/tcastanie',
    icon: 'i-mingcute-linkedin-line',
    target: '_blank',
  },
  {
    label: 'Github',
    to: 'https://github.com/tcastanie',
    icon: 'i-mingcute-github-line',
    target: '_blank',
  },
]
</script>

<template>
  <UiFooter :links="footerLinks">
    <template v-if="shitMode" #top>
      <div class="mb-2 flex items-center justify-center gap-x-3">
        <NuxtImg
          src="/valid-html40.png"
          alt="valid-html40"
          format="webp"
          width="88"
          height="31"
          class="animate-spin"
        />
        <NuxtImg
          src="/valid-css2.png"
          alt="valid-css2"
          format="webp"
          width="88"
          height="31"
          class="animate-ping"
        />
      </div>
    </template>
    <template #left>
      <div class="flex items-center">
        <UiIcon icon="i-mingcute-copyright-line" />
        <UiButton
          to="https://creativecommons.org/licenses/by-nc-sa/4.0/"
          target="_blank"
          variant="link"
          size="sm"
          white
        >
          CC BY-NC-SA 4.0
        </UiButton>
        <span>tcastanie.dev {{ new Date().getFullYear() }}</span>
      </div>
    </template>
    <template #right>
      <UiButton
        v-for="{ label, to, icon, target } of linksRight"
        :key="label"
        :to="to"
        :target="target"
        :icon="icon"
        variant="link"
        size="lg"
        square
        white
        :title="label"
        :aria-label="label"
      />
      <UiButton
        to="https://www.malt.fr/profile/tcastanie"
        target="_blank"
        variant="link"
        size="lg"
        square
        white
        title="Malt"
        aria-label="Malt"
      >
        <SvgMalt class="h-4 w-4" />
      </UiButton>
      <UiButton
        v-if="shitMode"
        icon="i-mingcute-planet-line"
        variant="link"
        size="lg"
        square
        title="Turn off party mode"
        aria-label="Party mode"
        class="animate-spin"
        @click="toggleShitMode()"
      />
    </template>
  </UiFooter>
  <audio
    v-if="shitMode"
    ref="sg1"
    src="/sg1.mp3"
    controls
    autoplay
    loop
    volume="0.4"
    class="fixed lg:bottom-16 left-0 mx-auto bottom-0"
  />
</template>
