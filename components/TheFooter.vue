<script lang="ts" setup>
const { shitMode } = useShitMode()
const links = [
  {
    label: 'linkedin',
    to: 'https://www.linkedin.com/in/tcastanie',
    icon: 'i-mingcute-linkedin-line',
    blank: true,
  },
  {
    label: 'github',
    to: 'https://github.com/tcastanie',
    icon: 'i-mingcute-github-line',
    blank: true,
  },
  {
    label: 'malt',
    to: 'https://www.malt.fr/profile/tcastanie',
    icon: 'i-simple-icons-malt',
    blank: true,
  },
]
</script>

<template>
  <UiDivider
    v-if="!shitMode"
    orientation="horizontal"
    icon="i-mingcute-code-line"
  />
  <NuxtImg
    v-else
    src="/bluline.gif"
    alt="separator"
    format="gif"
    width="575"
    height="10"
    class="mx-auto"
  />
  <footer class="text-center text-xs" :class="shitMode ? 'h-16' : 'h-8'">
    <div v-if="shitMode" class="mb-2 flex items-center justify-center gap-x-3">
      <NuxtImg
        src="/valid-html40.png"
        alt="valid-html40"
        format="webp"
        width="88"
        height="31"
      />
      <NuxtImg
        src="/valid-css2.png"
        alt="valid-css2"
        format="webp"
        width="88"
        height="31"
      />
    </div>
    <NuxtLink
      to="https://creativecommons.org/licenses/by-nc-sa/4.0/"
      class="underline-offset-2 hover:text-bleu hover:underline"
      target="_blank"
      noopener
      noreferrer
    >
      CC BY-NC-SA 4.0
    </NuxtLink>
    <span>© {{ new Date().getFullYear() }} tcastanie.dev</span>

    <div class="flex items-center justify-center gap-x-3">
      <NuxtLink
        v-for="link in links"
        :key="link.label"
        class="flex text-sm hover:text-fluo"
        :to="link.to"
        :aria-label="link.label"
        :target="link.blank ? '_blank' : '_self'"
        noopener
        noreferrer
      >
        <span :class="link.icon" class="h-5 w-5" aria-hidden="true" />
      </NuxtLink>
    </div>
    <audio
      v-if="shitMode"
      ref="sg1"
      src="/sg1.mp3"
      controls
      autoplay
      loop
      volume="0.4"
      class="fixed bottom-20 left-0 mx-auto lg:bottom-0"
    />
  </footer>
</template>
