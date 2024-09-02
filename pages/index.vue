<script lang="ts" setup>
useSchemaOrg([
  defineWebPage({ '@type': 'ProfilePage' }),
])
useHead({ titleTemplate: 'Thibaut Castanié' })
const { shitMode } = useShitMode()
</script>

<template>
  <BegoPage>
    <div class="grid grid-cols-2 items-center">
      <BegoHero description="Développeur web front-end freelance">
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
            <img
              v-if="shitMode"
              src="~/assets/text.gif"
              alt="Thibaut Castanié"
              width="208"
              height="43"
              class="animate-bounce"
            >
            <span v-else>tcastanie</span>
          </div>
        </template>
      </BegoHero>
      <ThePlanet class="h-24 w-24 justify-self-end sm:h-32 sm:w-32" />
    </div>
    <TheIntroduction />
    <div v-if="shitMode" class="flex flex-wrap items-center justify-center gap-x-12">
      <img
        src="~/assets/earth.gif"
        alt="earth"
        width="36"
        height="36"
        class="animate-bounce"
      >
      <img
        src="~/assets/alien.gif"
        alt="alien"
        width="90"
        height="200"
      >
      <img
        src="~/assets/ufo.gif"
        alt="ufo"
        width="200"
        height="43"
        class="animate-bounce"
      >
    </div>
    <div v-if="shitMode" class="mt-8 flex items-center justify-center gap-x-12">
      <img
        src="~/assets/valid-html40.png"
        alt="valid-html40"
        width="88"
        height="31"
        class="animate-spin"
      >
      <img
        src="~/assets/valid-css2.png"
        alt="valid-css2"
        width="88"
        height="31"
        class="animate-ping"
      >
    </div>
  </BegoPage>
</template>
