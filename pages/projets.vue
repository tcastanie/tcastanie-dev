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
      <template v-for="project in projects" :key="project.title">
        <ProjectContent v-if="project.primary" :project />
        <BegoCard v-else>
          <BegoAccordion
            :items="[{ label: project.title, slot: slugify(project.title) }]"
            variant="ghost"
            size="2xl"
            class="-mx-4 -mt-5 -mb-6.5 sm:-mx-6 !w-auto"
          >
            <template #[slugify(project.title)]>
              <ProjectContent :project small />
            </template>
          </BegoAccordion>
        </BegoCard>
      </template>
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
