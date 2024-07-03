<script lang="ts" setup>
const { shitMode } = useShitMode()
</script>

<template>
  <UiPage>
    <div class="grid grid-cols-2 items-center">
      <UiHero description="Développeur web front-end freelance">
        <template #title>
          <div class="flex items-center gap-4">
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
          </div>
        </template>
      </UiHero>
      <ThePlanet class="w-24 h-24 sm:w-32 sm:h-32 justify-self-end" />
    </div>
    <TheIntroduction />
    <div v-if="shitMode" class="flex flex-wrap items-center justify-center gap-x-12">
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
    <div v-if="shitMode" class="mt-8 flex items-center justify-center gap-x-12">
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
  </UiPage>
</template>
