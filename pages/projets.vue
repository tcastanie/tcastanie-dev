<script lang="ts" setup>
const { shitMode } = useShitMode()
const { projects } = useProjects()
</script>

<template>
  <BegoPage>
    <BegoHero v-if="!shitMode" title="Projets" icon="i-mingcute-folder-more-fill" />
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
    <div class="grid gap-y-4 lg:gap-y-6">
      <BegoCard
        v-for="project of projects"
        :key="project.title"
        :primary="project.primary"
        :class="{ '!bg-zinc-800/50 overflow-hidden': shitMode }"
        class=""
      >
        <div v-if="shitMode && project.title === `Domaine l'Angélus`" class="absolute -z-1 -bottom-36 -left-36">
          <img
            src="~/assets/corgiswim.gif"
            alt="corgiswimming"
            width="700"
            height="700"
          >
        </div>
        <div class="grid gap-y-3">
          <NuxtImg
            v-if="project.image"
            :src="project.image"
            :alt="project.title + ' social'"
            format="webp"
            width="672"
            height="336"
            class="rounded-md"
          />
          <BegoH2>{{ project.title }}</BegoH2>
          <div v-if="project.subtitle" class="-mt-4 text-lg text-zinc-400">
            {{ project.subtitle }}
          </div>
          <p v-if="project.description" class="text-base text-zinc-200 text-pretty">
            <!-- eslint-disable-next-line vue/no-v-html -->
            <span v-html="project.description" />
          </p>
          <div v-if="project.date">
            <span class="i-mingcute-calendar-2-line mr-2 h-6 w-6 inline-flex align-text-bottom text-bego-400" />
            <span>{{ project.date }}</span>
          </div>
          <div v-if="project.skills?.length" class="flex flex-wrap gap-3">
            <BegoBadge v-for="skill of project.skills" :key="skill" variant="subtle">
              {{ skill }}
            </BegoBadge>
          </div>
          <div v-if="project.lighthouse">
            <span class="i-mingcute-lighthouse-line mr-2 h-6 w-6 inline-flex align-text-bottom text-bego-400" />
            <span v-if="project.lighthousePages">Score Lighthouse (moyenne des {{ project.lighthousePages }} pages via <BegoButton
              to="https://unlighthouse.dev/"
              target="_blank"
              variant="link"
              no-padding
              size="xl"
            >Unlighthouse</BegoButton>) :</span>
            <span v-else>Score Lighthouse :</span>
            <LighthouseDisplay v-bind="project.lighthouse" class="my-4" />
          </div>
          <div v-if="project.links?.length" class="grid justify-items-start">
            <BegoButton
              v-for="{ label, to, icon } of project.links"
              :key="label"
              :to="to"
              target="_blank"
              :variant="project.primary ? 'outline' : 'ghost'"
              :icon="icon"
              :white="!project.primary"
              class="-ml-2"
            >
              {{ label }}
            </BegoButton>
          </div>
        </div>
      </BegoCard>
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
  </BegoPage>
</template>
