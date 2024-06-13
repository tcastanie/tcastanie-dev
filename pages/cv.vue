<template>
  <div
    v-auto-animate
    class="relative"
  >
    <div
      v-if="!hackerzMode"
      class="overflow-hidden rounded-lg bg-bego-5/10 ring-1 ring-bego-0 divide-y-1 divide-bego-0"
    >
      <div
        class="glitch tcastanie absolute right-0 top-0 mr-4 mt-5 h-20 w-20 cursor-pointer sm:mr-6 sm:mt-6"
        @click="switchToHackerzMode"
      />
      <div class="px-4 py-5 sm:p-6">
        <div class="flex flex-col gap-x-12 pr-21 sm:flex-row sm:items-end">
          <h1 class="text-3xl/8 font-bold tracking-tight">
            Thibaut Castanié
          </h1>
          <div class="mt-4 flex items-center gap-x-3 sm:mt-0">
            <div class="inline-flex">
              <span class="i-mingcute-location-2-line mr-1 h-6 w-6 align-bottom" /> Montpellier
            </div>
            <a
              v-for="link in links"
              :key="link.label"
              class="flex items-center gap-x-1.5 text-sm hover:text-bleu"
              :href="link.href"
              :aria-label="link.label"
              target="_blank"
              noopener
              noreferrer
              type="button"
            >
              <span
                :class="link.icon"
                class="h-6 w-6"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
        <div class="mt-4 text-lg font-semibold">
          Développeur web front-end indépendant
        </div>
      </div>
      <div class="px-4 py-5 sm:p-6">
        <div class="mb-2">
          Fort de 8 ans d'expériences professionnelles dans le développement web front-end, ainsi que la création &
          gestion d'une entreprise, je me suis spécialisé dans une gamme d'outils incluant Vue.js <span
            class="i-logos-vue h-4 w-4 inline-flex align-sub"
          />, Nuxt <span
            class="i-logos-nuxt-icon h-4 w-4 inline-flex align-sub"
          />, Tailwind <span
            class="i-logos-tailwindcss-icon h-4 w-4 inline-flex align-sub"
          /> et Directus.
        </div>
      </div>
      <div class="px-4 py-5 sm:p-6">
        <div class="text-lg font-semibold tracking-tight">
          <div class="text-sm text-bego-2">
            <span class="uppercase">Sept. 2023 -> </span>
            <div class="inline-block w-fit">
              <pre
                class="p-1"
                style="background-color:#282A36;color:#F8F8F2"
                tabindex="0"
              ><code><span><span style="color:#FF79C6;font-weight:bold">new</span><span style="color:#50FA7B"> Date</span><span style="color:#F8F8F2">()</span></span></code></pre>
            </div>
          </div>
          Développeur web freelance
        </div>
        <div class="mt-4">
          <ul class="list-disc list-inside">
            <li>
              Création d'un site web de réservations de gîtes, de cours de dressage et d'achat de chiens de troupeau. Développement complet du front full-static, déploiement
              du back-office sur mesure via le CMS Directus et paiements. Accompagnement, aide à la contribution et support
              continu.
            </li>
            <li>Formation continue aux dernières versions des outils de l'écosystème Nuxt et Vue</li>
            <li>Développement de mini projets personnels</li>
          </ul>
        </div>
        <div class="mt-8 text-lg font-semibold tracking-tight">
          <div class="text-sm text-bego-2 uppercase">
            Fév 2021 -> Avr 2023
          </div>
          Ingénieur étude et développement - Smile Montpellier (ESN)
        </div>
        <div class="mt-4">
          Développeur et intégrateur front-end de sites e-commerce complexes.
          <ul class="list-disc list-inside">
            <li>
              Gestion complète du front Snowleader, intégration de fonctionnalités (dont SSR, SEO, tests unitaires),
              optimisations des performances (web, scores SEO et paiements), amélioration continue et
              support.Accompagnement d'un alternant et d'un stagiaire.
            </li>
            <li>Intégration web de maquettes (Avène, Aderma, Klorane)</li>
            <li>Aide ponctuelle sur d'autres projets</li>
          </ul>
        </div>
        <div class="mt-8 text-lg font-semibold tracking-tight">
          <div class="text-sm text-bego-2 uppercase">
            Mars 2019 -> Sept. 2020
          </div>
          Co-fondateur & Président de Qyrolab (EdTech)
        </div>
        <div class="mt-4">
          <ul class="list-disc list-inside">
            <li>Création et gestion d'une société dans le domaine du jeu-vidéo et de l'apprentissage.</li>
            <li>
              Développement de Grammaticus, un jeu mobile d’apprentissage de la grammaire française à destination des
              enfants en ﬁn du primaire.
            </li>
            <li>
              Création de Gameji, une application web & mobile permettant de créer et partager son jeu en quelques
              minutes.
            </li>
          </ul>
        </div>
        <div class="mt-8 text-lg font-semibold tracking-tight">
          <div class="text-sm text-bego-2 uppercase">
            Janvier 2017 -> Novembre 2018
          </div>
          Ingénieur front-end - SATT AxLR / WeAreLearning (e-learning)
        </div>
        <div class="mt-4">
          <ul class="list-disc list-inside">
            <li>
              Développement d'une plateforme proposant une solution complète pour créer des jeux sérieux dans le domaine
              de la formation et de la RH. (1 an et demi sous contrat avec la SATT AxLR)
            </li>
            <li>Maintenance et amélioration continue de la plateforme.</li>
          </ul>
        </div>
      </div>
      <div class="px-4 py-5 sm:p-6">
        <div class="text-lg font-semibold tracking-tight">
          <div class="text-sm text-bego-2 uppercase">
            2014 -> 2016
          </div>
          Master Informatique - Université de Montpellier
        </div>
        <p class="mt-4">
          Master IMAGINA (IMAges, Games, INtelligent Agents)
        </p>
        <div class="mt-8 text-lg font-semibold tracking-tight">
          <div class="text-sm text-bego-2 uppercase">
            2013 -> 2014
          </div>
          License Informatique - Université de Montpellier
        </div>
        <div class="mt-8 text-lg font-semibold tracking-tight">
          <div class="text-sm text-bego-2 uppercase">
            2011 -> 2013
          </div>
          DUT Informatique - IUT de Montpellier
        </div>
      </div>
      <div class="px-4 py-5 sm:p-6">
        <div class="flex flex-wrap items-center justify-center gap-3">
          <span
            class="i-logos-vue h-10 w-10"
            title="Vue"
          />
          <span
            class="i-logos-nuxt-icon h-10 w-10"
            title="Nuxt"
          />
          <span
            class="i-logos-javascript h-10 w-10"
            title="JavaScript"
          />
          <span
            class="i-logos-typescript-icon h-10 w-10"
            title="TypeScript"
          />
          <span
            class="i-logos-unocss h-10 w-10"
            title="UnoCSS"
          />
          <span
            class="i-logos-tailwindcss-icon h-10 w-10"
            title="tailwind"
          />
          <span
            class="i-logos-git-icon h-10 w-10"
            title="git"
          />
          <span
            class="i-logos-jest h-10 w-10"
            title="Jest"
          />
          <span
            class="i-logos-jamstack-icon h-10 w-10"
            title="JAMStack / SSG"
          />
          <!-- <span
            class="i-logos-magento h-10 w-10"
            title="Magento"
          /> -->
          <span
            class="i-logos-cloudflare-icon h-10 w-10"
            title="Cloudflare"
          />
        </div>
      </div>
    </div>
    <div v-if="hackerzMode">
      <div
        class="glitch matrix absolute right-0 top-0 mr-4 mt-5 h-20 w-20 cursor-pointer sm:mr-6 sm:mt-6"
        @click="switchToNormalMode"
      />
      <TheCV />
    </div>
  </div>
</template>

<script lang="ts" setup>
useHead({
  titleTemplate: 'CV %separator %siteName',
})

const hackerzMode = ref(false)
const switchToHackerzMode = () => {
  hackerzMode.value = true
}
const switchToNormalMode = () => {
  hackerzMode.value = false
}
const img = useImage()
const avatarUrl = img('/avatar.jpg', { width: 160, height: 160, quality: 95, format: 'webp' })
const codingUrl = img('/coding.gif', { width: 80, height: 80, quality: 95, format: 'gif' })
const bgAvatar = `url('${avatarUrl}')`
const bgCoding = `url('${codingUrl}')`

const links = [
  { label: 'linkedin', href: 'https://www.linkedin.com/in/tcastanie', icon: 'i-mingcute-linkedin-line' },
  { label: 'github', href: 'https://github.com/tcastanie', icon: 'i-mingcute-github-line' },
]
</script>

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
