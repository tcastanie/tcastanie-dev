<script lang="ts" setup>
useHead({ titleTemplate: 'CV %separator %siteName' })

const { shitMode } = useShitMode()
const [hackerzMode, toggleHackerzMode] = useToggle()

const img = useImage()
const avatarUrl = img('/avatar.jpg', { width: 160, height: 160, quality: 95, format: 'webp' })
const codingUrl = img('/coding.gif', { width: 80, height: 80, quality: 95, format: 'gif' })
const bgAvatar = `url('${avatarUrl}')`
const bgCoding = `url('${codingUrl}')`

const { title, subtitle, description, location, experiences } = theCv
</script>

<template>
  <BegoPage v-auto-animate>
    <BegoHero title="Curriculum Vitae" icon="i-mingcute-profile-fill" />
    <BegoCard v-if="!hackerzMode" class="relative" primary>
      <template #header>
        <div>
          <BegoHero :title="title" :description="subtitle" class="flex-1 !py-0 pr-20" />
          <div
            :class="[
              { 'animate-spin': shitMode },
              'glitch tcastanie absolute right-4 top-4 h-20 w-20 cursor-pointer',
            ]"
            @click="toggleHackerzMode()"
          />
        </div>
        <div class="flex gap-2 mt-4 items-center group">
          <BegoIcon icon="i-mingcute-map-pin-line" size="lg" class="group-hover:text-bego-400" />
          {{ location }}
        </div>
        <BegoP class="mt-8">
          {{ description }}
        </BegoP>
      </template>
      <div class="grid gap-y-8 text-lg">
        <div v-for="exp in experiences" :key="exp.startDate">
          <div class="text-sm text-bego-50 uppercase flex items-center gap-1">
            <span>{{ formatDate(exp.startDate) }}</span>
            <BegoIcon icon="i-mingcute-arrow-right-line" />
            <span v-if="exp.endDate === 'new Date()'" class="px-1 rounded bg-[#282c34] normal-case">
              <Shiki lang="javascript" :code="exp.endDate" />
            </span>
            <span v-else>{{ formatDate(exp.endDate) }}</span>
          </div>
          <div class="text-xl/6 font-semibold sm:text-2xl/8 text-balance">
            {{ `${exp.title} ${exp.company ? ` - ${exp.company}` : ''}` }}
          </div>
          <BegoP v-if="exp.description">
            {{ exp.description }}
          </BegoP>
          <div v-if="exp.location" class="flex gap-2 items-center group">
            <BegoIcon icon="i-mingcute-map-pin-line" size="md" class="group-hover:text-bego-400" />
            {{ exp.location }}
          </div>
          <ul v-if="exp.missions?.length" class="mt-4 ml-6 list-disc whitespace-pre-wrap grid gap-y-2 text-base/5 text-zinc-300 cursor-default">
            <li v-for="task in exp.missions" :key="task" class="hover:text-zinc-50">
              {{ task }}
            </li>
          </ul>
        </div>
      </div>
      <template #footer>
        <div class="grid grid-cols-4 sm:grid-cols-6 place-items-center gap-8" :class="{ 'animate-bounce': shitMode }">
          <BegoIcon icon="i-logos-vue" size="2xl" title="Vue.js" />
          <BegoIcon icon="i-logos-nuxt-icon" size="2xl" title="Nuxt" />
          <BegoIcon icon="i-logos-javascript" size="2xl" title="JavaScript" />
          <BegoIcon icon="i-logos-typescript-icon" size="2xl" title="TypeScript" />
          <BegoIcon icon="i-logos-tailwindcss-icon" size="2xl" title="TailwindCSS" />
          <BegoIcon icon="i-logos-unocss" size="2xl" title="UnoCSS" />
          <BegoIcon icon="i-simple-icons-directus" size="2xl" title="Directus" />
          <BegoIcon icon="i-logos-jest" size="2xl" title="Jest / Unit testing" />
          <BegoIcon icon="i-logos-git-icon" size="2xl" title="git" />
          <BegoIcon icon="i-logos-jamstack-icon" size="2xl" title="JAMStack / SSG" />
          <BegoIcon icon="i-logos-graphql" size="2xl" title="GraphQL" />
          <BegoIcon icon="i-logos-cloudflare-icon" size="2xl" title="Cloudflare" />
        </div>
      </template>
    </BegoCard>
    <div v-else class="relative bg-[#282c34] rounded px-4 py-2 text-sm">
      <div
        :class="[
          { 'animate-spin': shitMode },
          'glitch matrix absolute right-4 top-4 h-20 w-20 cursor-pointer',
        ]"
        @click="toggleHackerzMode()"
      />
      <Shiki lang="json" :code="`// cv-tcastanie.json\n\n${JSON.stringify(theCv, undefined, 2)}`" class="whitespace-break-spaces" />
    </div>
  </BegoPage>
</template>

<style scoped>
.glitch {
  background-position: center;
  border-radius: 1rem;
}

.glitch:before {
  background-position: center;
  border-radius: 1rem;
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: .5;
  border-radius: 1rem;
}

.glitch:hover:before {
  animation: animate .25s linear infinite;
  mix-blend-mode: hard-light;
}

.tcastanie,
.tcastanie:before {
  background-image: v-bind(bgAvatar);
  background-size: 100%;
}

.matrix,
.matrix:before {
  background-image: v-bind(bgCoding);
  background-size: auto;
}

@keyframes animate {
  0% {
    background-position: 0 0;
    filter: hue-rotate(0deg);
  }

  10% {
    background-position: 1px 0;
  }

  20% {
    background-position: -1px 0;
  }

  30% {
    background-position: 3px 0;
  }

  40% {
    background-position: 1px 0;
  }

  50% {
    background-position: -3px 0;
  }

  60% {
    background-position: -7px 0;
  }

  70% {
    background-position: 0 -4px;
  }

  80% {
    background-position: -8px -4px;
  }

  81% {
    background-position: 0 0;
  }

  100% {
    background-position: 0 0;
    filter: hue-rotate(360deg);
  }
}
</style>
