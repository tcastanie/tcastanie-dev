<script lang="ts" setup>
const { shitMode } = useShitMode()
const links = [
  { label: 'linkedin',
    href: 'https://www.linkedin.com/in/tcastanie',
    icon: 'i-mingcute-linkedin-line',
    blank: true,
  },
  { label: 'github',
    href: 'https://github.com/tcastanie',
    icon: 'i-mingcute-github-line',
    blank: true,
  },
]
</script>

<template>
  <div v-auto-animate class="text-lg">
    <h1 class="mb-12 flex flex-wrap gap-4 items-center text-3xl/6 font-bold tracking-tight sm:text-4xl/8">
      <NuxtImg
        src="/avatar.jpg"
        alt="Thibaut Castanié"
        format="webp"
        width="56"
        height="56"
        class="rounded-full"
        :class="shitMode ? 'animate-bounce' : ''"
      />
      <span v-if="!shitMode">tcastanie</span>
      <NuxtImg
        v-else
        src="/text.gif"
        alt="Thibaut Castanié"
        format="gif"
        width="208"
        height="43"
        class="animate-bounce"
      />
    </h1>
    <h2 class="mb-4 text-xl/6 font-bold tracking-tight sm:text-2xl/8">
      Bonjour !
    </h2>
    <p class="mb-8">
      Je suis Thibaut Castanié, développeur web indépendant spécialisé en JavaScript.
    </p>
    <p class="mb-6">
      <span class="i-mingcute-terminal-box-line mr-2 h-8 w-8 inline-flex align-bottom text-bego-0" :class="shitMode ? 'animate-bounce' : ''" />
      J'ai huit ans d'XP en développement web, principalement en front-end avec Vue <span class="i-logos-vue h-5 w-5 inline-flex align-sub" /> et Nuxt <span class="i-logos-nuxt-icon h-6 w-6 inline-flex align-sub" />
    </p>
    <p class="mb-2">
      <span class="i-mingcute-package-line mr-2 h-8 w-8 inline-flex align-bottom text-bego-0" :class="shitMode ? 'animate-bounce' : ''" />
      Je mets à disposition mes compétences de développeur senior et m'applique à assurer une modernité technique et des services web épurés.
    </p>
    <p class="mb-2 ml-10">
      <span class="i-mingcute-web-line mr-2 h-7 w-7 inline-flex align-bottom text-bego-0" :class="shitMode ? 'animate-bounce' : ''" />
      Conception et création de sites web sur mesure, de la simple vitrine aux applications complexes
    </p>
    <p class="ml-20">
      <span class="i-mingcute-lightning-line mr-2 h-6 w-6 inline-flex align-bottom text-bego-0" :class="shitMode ? 'animate-bounce' : ''" />
      Utilisation des technos dernier cri, pour un code léger, rapide, économique et écolo
    </p>
    <p class="ml-20">
      <span class="i-mingcute-search-3-line mr-2 h-6 w-6 inline-flex align-bottom text-bego-0" :class="shitMode ? 'animate-bounce' : ''" />
      Optimisation pour les moteurs de recherche (SEO)
    </p>
    <p class="mb-4 ml-20">
      <span class="i-mingcute-cellphone-line mr-2 h-6 w-6 inline-flex align-bottom text-bego-0" :class="shitMode ? 'animate-bounce' : ''" />
      Adaptation pour tous les tailles d'écran (responsive design)
    </p>
    <p class="mb-8 ml-10">
      <span class="i-mingcute-tool-line mr-2 h-7 w-7 inline-flex align-bottom text-bego-0" :class="shitMode ? 'animate-bounce' : ''" />
      Refontes, maintenance, optimisations des performances, corrections et assistance technique sur projets existants
    </p>
    <p class="mb-8">
      <span class="i-mingcute-run-line mr-2 h-8 w-8 inline-flex align-bottom text-bego-0" :class="shitMode ? 'animate-bounce' : ''" />
      Entre deux projets dev, sérieux ou non, j'aime courir des marathons et randonner autour de <span class="i-mingcute-triumphal-arch-line h-6 w-6 inline-flex align-sub" /> Montpellier
    </p>
    <div class="flex items-center flex-wrap gap-x-8 gap-y-4">
      <NuxtLink
        v-if="0"
        to="/contact"
        class="inline-flex items-center gap-x-2 border border-bego-0 rounded-md bg-transparent px-3 py-2 text-sm text-bego-0 font-medium hover:bg-bego-5/10"
        :class="shitMode ? 'animate-pulse' : ''"
      >
        <span class="i-mingcute-send-plane-line h-5 w-5" aria-hidden="true" />
        <span>Mes prestations</span>
      </NuxtLink>
      <NuxtLink
        to="/contact"
        class="inline-flex items-center gap-x-2 border border-bego-0 rounded-md bg-transparent px-3 py-2 text-sm text-bego-0 font-medium hover:bg-bego-5/10"
        :class="shitMode ? 'animate-pulse' : ''"
      >
        <span class="i-mingcute-send-plane-line h-5 w-5" aria-hidden="true" />
        <span>Contactez-moi !</span>
      </NuxtLink>
    </div>
    <div v-if="!shitMode" class="align-center my-12 w-full flex flex-row items-center text-center">
      <div class="w-full flex border-t" />
      <div class="mx-3 flex whitespace-nowrap font-medium">
        <span class="i-mingcute-code-line h-6 w-6" :class="shitMode ? 'animate-spin' : ''" />
      </div>
      <div class="w-full flex border-t" />
    </div>
    <NuxtImg
      v-else
      src="/bluline.gif"
      alt="separator"
      format="gif"
      width="575"
      height="10"
      class="my-14"
    />
    <div class="flex items-center justify-center gap-x-3">
      <NuxtLink
        v-for="link in links"
        :key="link.label"
        class="flex text-sm hover:text-bleu"
        :to="link.href"
        :aria-label="link.label"
        :target="link.blank ? '_blank' : '_self'"
        noopener
        noreferrer
      >
        <span :class="link.icon" class="h-5 w-5" aria-hidden="true" />
      </NuxtLink>
    </div>
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
  </div>
</template>
