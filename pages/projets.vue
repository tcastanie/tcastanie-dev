<script lang="ts" setup>
const { shitMode } = useShitMode()
const projects = [
  {
    title: 'Another APOD viewer',
    subtitle: 'Simple appli de visualisation de l\'image du jour de la NASA',
    description: 'Petit projet personnel pour améliorer mes compétences sur Vue, son écosystème, et tout le reste. Principalement Vue 3 et la <i>Composition API</i>, Vite, Pinia, Vitest... tout cela prêt à l\'emploi dans un environnement convivial pour les développeurs.<br/><b>v2</b> : Réusinage complet avec Nuxt, Nuxt UI et un proxy pour l\'API de la NASA.',
    date: 'v1 : août 2022, v2 : juin 2024',
    skills: ['Vue 3', 'Vite', 'Pinia', 'Vitest', 'Nuxt', 'Nuxt UI'],
    links: [
      {
        label: 'apod.tcastanie.dev',
        to: 'https://apod.tcastanie.dev',
        icon: 'i-mingcute-planet-line',
      },
      {
        label: 'tcastanie/another-apod-viewer',
        to: 'https://github.com/tcastanie/another-apod-viewer',
        icon: 'i-mingcute-github-line',
      },
      {
        label: 'apod.nasa.gov',
        to: 'https://apod.nasa.gov',
        icon: 'i-mingcute-full-moon-line',
      },
    ],
  },
]
</script>

<template>
  <UiPage>
    <UiHero v-if="!shitMode" title="Projets" icon="i-mingcute-folder-more-fill" />
    <div v-else class="py-6 sm:py-12 flex items-center justify-around">
      <img
        src="~/assets/cmcdconstruction.gif"
        alt="building"
        width="50"
        height="82"
      >
      <img
        src="~/assets/construction.gif"
        alt="building"
        width="96"
        height="66"
      >
      <img
        src="~/assets/construction2.gif"
        alt="building"
        width="90"
        height="85"
      >
    </div>
    <div class="grid">
      <UiCard
        v-for="{ title, subtitle, description, date, skills, links } of projects"
        :key="title"
        class="grid gap-y-6"
      >
        <div class="grid gap-y-6">
          <NuxtImg
            src="/APOD_social.png"
            alt="Another APOD viewer logo"
            format="webp"
            width="672"
            height="336"
            class="rounded-md"
          />
          <UiH2>{{ title }}</UiH2>
          <div class="-mt-4 text-lg text-zinc-400">
            {{ subtitle }}
          </div>
          <p class="text-base text-zinc-200 text-pretty">
            <!-- eslint-disable-next-line vue/no-v-html -->
            <span v-html="description" />
          </p>
          <div>
            <span class="i-mingcute-calendar-2-line mr-2 h-6 w-6 inline-flex align-text-bottom text-bego-400" />
            <span>{{ date }}</span>
          </div>
          <div class="flex gap-x-3">
            <UiBadge v-for="skill of skills" :key="skill" variant="subtle">
              {{ skill }}
            </UiBadge>
          </div>
          <div class="grid justify-items-start">
            <UiButton
              v-for="{ label, to, icon } of links"
              :key="label"
              :to="to"
              target="_blank"
              variant="ghost"
              :icon="icon"
              white
              class="-ml-2"
            >
              {{ label }}
            </UiButton>
          </div>
        </div>
      </UiCard>
    </div>
    <div v-if="!shitMode" class="mt-16 text-center text-xl font-italic opacity-50">
      &lt;!-- 🚧🚧🏗️🚧🚧 -->
    </div>
    <div v-if="shitMode" class="mt-16 flex justify-center gap-x-12">
      <img
        v-for="i in 3"
        :key="i"
        src="~/assets/building.gif"
        alt="building"
        width="78"
        height="53"
      >
    </div>
  </UiPage>
</template>
