<script lang="ts" setup>
const { shitMode, toggleShitMode } = useShitMode()
const { links } = useLinks()
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
  <UiTheFooter :links="links">
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
        <span class="i-mingcute-copyright-line w-4 h-4" />
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path fill="currentColor" d="m 23.232 -1.21 m -9.6839 17.6679 l -0.8131 0.8131 l 2.3968 2.3929 c 1.1771 1.1771 3.0589 2.3155 4.8168 0.5576 c 1.3126 -1.3165 1.0067 -2.691 0.2827 -3.7946 c -0.2323 0.0155 -6.6831 0.031 -6.6831 0.031 m -3.7287 -9.0024 l 0.8131 -0.8131 l -2.3542 -2.3503 c -1.1771 -1.1732 -2.9621 -2.4045 -4.8129 -0.5537 c -1.3591 1.3552 -1.0571 2.6794 -0.3369 3.7558 Z m 11.0739 1.6108 a 1486.848 1486.848 90 0 1 -5.8506 5.9009 h 4.4683 c 1.665 0 3.7984 -0.3911 3.7984 -3.0085 c 0 -1.9205 -1.1461 -2.6446 -2.4161 -2.8924 m -12.5608 -0.12 H 3.7984 c -1.665 0 -3.7984 0.5227 -3.7984 3.0124 c 0 1.8547 1.1887 2.6175 2.482 2.8846 c 0.1549 -0.1781 5.8506 -5.8971 5.8506 -5.8971 m 5.746 11.7709 l -2.3929 -2.3929 l -2.3542 2.3503 a 11.616 11.616 90 0 1 -0.5305 0.4956 c 0.271 1.2894 1.03 2.4742 2.8846 2.4742 s 2.6175 -1.1887 2.8846 -2.482 q -0.2478 -0.2091 -0.4917 -0.4453 M 9.3315 3.2428 l 2.3542 2.3503 l 2.3929 -2.3929 a 7.744 7.744 90 0 1 0.4956 -0.4569 c -0.2517 -1.2661 -0.9719 -2.4123 -2.8924 -2.4123 s -2.6407 1.15 -2.8885 2.42 q 0.2633 0.2246 0.5421 0.4917 z m 10.617 0.453 c -1.7618 -1.7579 -3.6397 -0.6195 -4.8168 0.5576 l -11.1126 11.1126 c -1.1732 1.1732 -2.4045 2.9621 -0.5537 4.8129 s 3.6397 0.6195 4.8129 -0.5537 l 11.1126 -11.1126 c 1.1771 -1.1771 2.3155 -3.0589 0.5576 -4.8168" />
        </svg>
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
  </UiTheFooter>
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
