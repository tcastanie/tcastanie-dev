<script lang="ts" setup>
useSchemaOrg([
  defineWebPage({
    '@type': 'ProfilePage',
    'mainEntity': {
      '@type': 'Person',
      '@id': 'https://tcastanie.dev/#identity',
    },
  }),
])
useHead({ titleTemplate: 'CV %separator %siteName' })

const { shitMode } = useShitMode()
const { hackerzMode, toggleHackerzMode, bgAvatar, bgCoding } = useHackerz()
const { title, subtitle, description, location, experiences } = useCV()
</script>

<template>
  <BegoPage v-auto-animate>
    <BegoHero title="Curriculum Vitae" icon="i-mingcute-profile-fill" />
    <div class="mb-2 flex justify-between">
      <BegoButton
        variant="link"
        to="/cv/CV_Thibaut_Castanié.pdf"
        icon="i-mingcute-external-link-line"
        target="_blank"
      >
        Version PDF
      </BegoButton>
      <BegoButton
        variant="link"
        to="/cv/CV_Thibaut_Castanié_EN.pdf"
        icon="i-mingcute-external-link-line"
        target="_blank"
      >
        PDF english version
      </BegoButton>
    </div>
    <BegoCard v-show="!hackerzMode" class="relative" primary>
      <template #header>
        <div>
          <BegoHero :title="title" :description="subtitle" class="flex-1 pr-20 !py-0" />
          <div
            :class="[
              { 'animate-spin': shitMode },
              'glitch tcastanie absolute right-4 top-4 h-20 w-20 cursor-pointer',
            ]"
            @click="toggleHackerzMode()"
          />
        </div>
        <div class="group mt-4 flex items-center gap-2">
          <BegoIcon icon="i-mingcute-map-pin-line" size="lg" class="group-hover:text-bego-400" />
          {{ location }}
        </div>
        <BegoP class="mt-8">
          {{ description }}
        </BegoP>
      </template>
      <div class="grid gap-y-8 text-lg">
        <div v-for="exp in experiences" :key="exp.startDate">
          <div class="flex items-center gap-1 text-sm text-bego-50 uppercase">
            <span>{{ formatShortDate(exp.startDate) }}</span>
            <BegoIcon icon="i-mingcute-arrow-right-line" />
            <span v-if="exp.endDate === 'new Date()'" class="rounded bg-[#282c34] px-1 normal-case">
              <ContentDoc path="/date" />
            </span>
            <span v-else>{{ formatDate(exp.endDate) }}</span>
          </div>
          <div class="text-balance text-xl/6 font-semibold sm:text-2xl/8">
            {{ `${exp.title} ${exp.company ? ` - ${exp.company}` : ''}` }}
          </div>
          <BegoP v-if="exp.description">
            {{ exp.description }}
          </BegoP>
          <div v-if="exp.location" class="group flex items-center gap-2">
            <BegoIcon icon="i-mingcute-map-pin-line" size="md" class="group-hover:text-bego-400" />
            {{ exp.location }}
          </div>
          <ul v-if="exp.missions?.length" class="grid ml-6 mt-4 cursor-default list-disc gap-y-2 whitespace-pre-wrap text-base/5 text-zinc-300">
            <li v-for="task in exp.missions" :key="task" class="text-pretty hover:text-zinc-50">
              {{ task }}
            </li>
          </ul>
          <div v-if="exp.links" class="mt-4">
            <div class="font-semibold">
              Portfolio (cf. <BegoButton
                variant="link"
                size="xl"
                to="/projets"
                no-padding
                class="font-semibold"
              >
                Mes Projets
              </BegoButton>) :
            </div>
            <ul>
              <li v-for="{ url, label, icon } of exp.links" :key="url">
                <BegoButton
                  :to="url"
                  variant="outline"
                  target="_blank"
                  :icon="icon ? icon : 'i-mingcute-link-line'"
                  class="mt-2"
                >
                  {{ label }} 🡕
                </BegoButton>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <template #footer>
        <div class="grid grid-cols-4 place-items-center gap-8 sm:grid-cols-6" :class="{ 'animate-bounce': shitMode }">
          <BegoIcon icon="i-logos-vue" size="2xl" title="Vue.js" />
          <BegoIcon icon="i-logos-nuxt-icon" size="2xl" title="Nuxt" />
          <BegoIcon icon="i-logos-javascript" size="2xl" title="JavaScript" />
          <BegoIcon icon="i-logos-typescript-icon" size="2xl" title="TypeScript" />
          <BegoIcon icon="i-logos-tailwindcss-icon" size="2xl" title="TailwindCSS" />
          <BegoIcon icon="i-logos-unocss" size="2xl" title="UnoCSS" />
          <BegoIcon icon="i-simple-icons-directus" size="2xl" title="Directus" />
          <BegoIcon icon="i-logos-jest" size="2xl" title="Jest / Test unitaire" />
          <BegoIcon icon="i-logos-git-icon" size="2xl" title="git" />
          <BegoIcon icon="i-logos-jamstack-icon" size="2xl" title="JAMStack / SSG" />
          <BegoIcon icon="i-logos-graphql" size="2xl" title="GraphQL" />
          <BegoIcon icon="i-logos-cloudflare-icon" size="2xl" title="Cloudflare" />
        </div>
      </template>
    </BegoCard>
    <div v-show="hackerzMode" class="relative rounded bg-[#282c34] px-4 py-2 text-sm">
      <div
        :class="[
          { 'animate-spin': shitMode },
          'glitch matrix absolute right-4 top-4 h-20 w-20 cursor-pointer',
        ]"
        @click="toggleHackerzMode()"
      />
      <ContentDoc path="/cv" class="*:whitespace-break-spaces" />
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
