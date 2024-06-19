<script lang="ts" setup>
const { shitMode } = useShitMode()
</script>

<template>
  <div class="cursor-default">
    <UiH2 class="mb-4" :class="{ 'animate-bounce': shitMode }">
      Bonjour !
    </UiH2>
    <UiP class="mb-8 group hover:text-zinc-400">
      <span class="i-mingcute-user-2-line mr-2 h-8 w-8 inline-flex align-bottom text-bego-400 group-hover:text-bego-700" :class="{ 'animate-bounce': shitMode }" />
      Je suis Thibaut Castanié, développeur web indépendant spécialisé en JavaScript.
    </UiP>
    <UiP class="mb-6 group hover:text-zinc-400">
      <span class="i-mingcute-terminal-box-line mr-2 h-8 w-8 inline-flex align-bottom text-bego-400 group-hover:text-bego-700" :class="{ 'animate-bounce': shitMode }" />
      J'ai huit ans d'XP en développement web, principalement en front-end avec Vue <span class="i-logos-vue h-5 w-5 inline-flex align-sub" /> et Nuxt <span class="i-logos-nuxt-icon h-6 w-6 inline-flex align-sub" />
    </UiP>
    <UiP class="mb-2 group hover:text-zinc-400">
      <span class="i-mingcute-package-line mr-2 h-8 w-8 inline-flex align-bottom text-bego-400 group-hover:text-bego-700" :class="{ 'animate-bounce': shitMode }" />
      Je mets à disposition mes compétences de développeur senior et m'applique à assurer une modernité technique et des services web épurés :
    </UiP>
    <UiP class="mb-2 ml-10 group hover:text-zinc-400">
      <span class="i-mingcute-web-line mr-2 h-7 w-7 inline-flex align-bottom text-bego-400 group-hover:text-bego-700" :class="{ 'animate-bounce': shitMode }" />
      Conception et création de sites web sur mesure, de la simple vitrine aux applications complexes
    </UiP>
    <UiP class="ml-20 group hover:text-zinc-400">
      <span class="i-mingcute-lightning-line mr-2 h-6 w-6 inline-flex align-bottom text-bego-400 group-hover:text-bego-700" :class="{ 'animate-bounce': shitMode }" />
      Utilisation des technos dernier cri, pour un code léger, ultra-rapide, économique et écolo
    </UiP>
    <UiP class="ml-20 group hover:text-zinc-400">
      <span class="i-mingcute-search-3-line mr-2 h-6 w-6 inline-flex align-bottom text-bego-400 group-hover:text-bego-700" :class="{ 'animate-bounce': shitMode }" />
      Optimisation pour les moteurs de recherche (SEO)
    </UiP>
    <UiP class="mb-4 ml-20 group hover:text-zinc-400">
      <span class="i-mingcute-cellphone-line mr-2 h-6 w-6 inline-flex align-bottom text-bego-400 group-hover:text-bego-700" :class="{ 'animate-bounce': shitMode }" />
      Adaptation pour tous les tailles d'écran (responsive design)
    </UiP>
    <UiP class="mb-8 ml-10 group hover:text-zinc-400">
      <span class="i-mingcute-tool-line mr-2 h-7 w-7 inline-flex align-bottom text-bego-400 group-hover:text-bego-700" :class="{ 'animate-bounce': shitMode }" />
      Refontes, optimisations du code et des performances, maintenance, corrections et assistance technique sur projets existants
    </UiP>
    <UiP class="mb-8 group hover:text-zinc-400">
      <span class="i-mingcute-run-line mr-2 h-8 w-8 inline-flex align-bottom text-bego-400 group-hover:text-bego-700" :class="{ 'animate-bounce': shitMode }" />
      Entre deux projets dev, sérieux ou non, j'aime courir des marathons et randonner autour de <span class="i-mingcute-triumphal-arch-line h-6 w-6 inline-flex align-sub" /> Montpellier
    </UiP>
  </div>
  <div class="flex items-center flex-wrap gap-x-8 gap-y-4 my-8 lg:my-16">
    <UiButton
      to="/contact"
      icon="i-mingcute-send-plane-line"
      variant="solid"
      size="lg"
      :class="{ 'animate-pulse': shitMode }"
    >
      Contactez-moi !
    </UiButton>
    <UiButton
      v-if="0"
      to="/services"
      icon="i-mingcute-arrow-right-line"
      variant="link"
      size="lg"
      trailing
      :class="{ 'animate-pulse': shitMode }"
    >
      Mes prestations
    </UiButton>
  </div>
</template>
