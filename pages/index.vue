<script lang="ts" setup>
const { shitMode } = useShitMode()
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
