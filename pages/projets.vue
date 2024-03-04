<template>
  <div v-auto-animate>
    <div v-if="shitMode" class="mb-16 flex items-center justify-around">
      <NuxtImg
        src="/cmcdconstruction.gif"
        alt="building"
        format="gif"
        width="50"
        height="82"
      />
      <NuxtImg
        src="/construction.gif"
        alt="building"
        format="gif"
        width="96"
        height="66"
      />
      <NuxtImg
        src="/construction2.gif"
        alt="building"
        format="gif"
        width="90"
        height="85"
      />
    </div>
    <div
      v-for="project of projects"
      :key="project.title"
      class="relative mb-4 w-full rounded-lg shadow ring-1 ring-bego-1 hover:bg-bego-5/10 hover:ring-2"
    >
      <div class="px-4 py-5 sm:p-6">
        <div class="mb-6 flex">
          <NuxtImg
            src="/APOD_social.png"
            alt="Another APOD viewer logo"
            format="webp"
            width="640"
            height="320"
          />
        </div>
        <p class="text-lg font-semibold">
          {{ project.title }}
        </p>
        <p class="text-base text-lg tracking-tight opacity-50">
          <span>{{ project.subtitle }}</span>
        </p>
        <p class="mt-6 text-base">
          <span>{{ project.description }}</span>
        </p>
        <p class="mt-6 text-sm">
          <span class="i-mingcute-calendar-line mr-2 h-5 w-5 inline-flex align-text-bottom text-bego-0" />
          <span>{{ project.date }}</span>
        </p>
        <div class="mt-6 flex gap-x-3 text-xs">
          <span v-for="skill of project.skills" :key="skill" class="rounded-md bg-bego-5 px-2 py-1">{{ skill }}</span>
        </div>
        <div class="mt-6">
          <div
            v-for="link of project.links"
            :key="link.label"
            class="flex"
          >
            <span :class="link.icon" class="mr-2 h-5 w-5" />
            <NuxtLink
              :to="link.href"
              rel="noopener noreferrer"
              target="_blank"
              class="text-bego-0 hover:text-bego-3"
            >
              {{ link.href }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!shitMode" class="mt-16 text-center text-xl font-italic opacity-50">
      &lt;!-- 🚧🚧🏗️🚧🚧 -->
    </div>
    <div v-if="shitMode" class="mt-16 flex justify-center gap-x-12">
      <NuxtImg
        v-for="i in 3"
        :key="i"
        src="/building.gif"
        alt="building"
        format="gif"
        width="78"
        height="53"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const shitMode = useState('shitMode')
const projects = [
  {
    title: 'Another APOD viewer',
    subtitle: 'Simple appli de visualisation de l\'image du jour de la NASA',
    description: 'Petit projet personnel pour améliorer mes compétences sur Vue, son écosystème, et tout le reste. Principalement Vue 3 et la Composition API, Vite, Pinia, Vitest, Github CI... tout cela prêt à l\'emploi dans un environnement convivial pour les développeurs.',
    date: 'Août 2022',
    skills: ['Vue 3', 'Vite', 'Pinia', 'Vitest'],
    links: [
      {
        label: 'Website',
        href: 'https://apod.tcastanie.dev/',
        icon: 'i-mingcute-external-link-line'
      },
      {
        label: 'Github',
        href: 'https://github.com/tcastanie/another-apod-viewer',
        icon: 'i-mingcute-github-line'
      },
      {
        label: 'NASA APOD',
        href: 'https://apod.nasa.gov/',
        icon: 'i-mingcute-full-moon-line'
      }
    ]
  }
]
</script>
