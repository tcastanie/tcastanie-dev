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
  <UiPage>
    <template #hero>
      <UiHero avatar description="Développeur web front-end freelance">
        <template #title>
          <NuxtImg
            src="/avatar.jpg"
            alt="Thibaut Castanié"
            format="webp"
            width="56"
            height="56"
            class="rounded-full"
            :class="shitMode ? 'animate-bounce' : ''"
          />
          <NuxtImg
            v-if="shitMode"
            src="/text.gif"
            alt="Thibaut Castanié"
            format="gif"
            width="208"
            height="43"
            class="animate-bounce"
          />
          <span v-else>tcastanie</span>
        </template>
      </UiHero>
    </template>
    <TheIntroduction />
    <div v-if="!shitMode" class="align-center my-12 w-full flex flex-row items-center text-center">
      <div class="w-full flex border-t" />
      <div class="mx-3 flex whitespace-nowrap font-medium">
        <span class="i-mingcute-code-line h-6 w-6" :class="shitMode ? 'animate-spin' : ''" />
      </div>
      <div class="w-full flex border-t" />
    </div>
    <NuxtImg
      v-else
      src="/bluline.gif"
      alt="separator"
      format="gif"
      width="575"
      height="10"
      class="my-14 mx-auto"
    />
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
    <div v-if="shitMode" class="mt-16 flex flex-wrap items-center justify-center gap-x-12">
      <NuxtImg
        src="/earth.gif"
        alt="earth"
        format="gif"
        width="36"
        height="36"
        class="animate-bounce"
      />
      <NuxtImg
        src="/alien.gif"
        alt="alien"
        format="gif"
        width="90"
        height="200"
      />
      <NuxtImg
        src="/ufo.gif"
        alt="ufo"
        format="gif"
        width="200"
        height="43"
        class="animate-bounce"
      />
    </div>
  </UiPage>
</template>
