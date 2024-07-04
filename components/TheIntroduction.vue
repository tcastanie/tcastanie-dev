<script lang="ts" setup>
const { shitMode } = useShitMode()
</script>

<template>
  <div class="cursor-default text-pretty grid gap-y-8">
    <UiH2 class="" :class="{ 'animate-bounce': shitMode }">
      Bonjour !
    </UiH2>
    <UiP class="group hover:text-zinc-400">
      <span class="i-mingcute-user-2-line mr-2 h-8 w-8 inline-flex align-bottom text-bego-400 group-hover:text-bego-700" :class="{ 'animate-bounce': shitMode }" />
      Je suis Thibaut Castanié, développeur web indépendant spécialisé en JavaScript.
    </UiP>
    <UiP class="group hover:text-zinc-400">
      <span class="i-mingcute-terminal-box-line mr-2 h-8 w-8 inline-flex align-bottom text-bego-400 group-hover:text-bego-700" :class="{ 'animate-bounce': shitMode }" />
      J'ai huit ans d'XP en développement web, principalement en front-end et dans l'écosystème de Vue <span class="i-logos-vue h-5 w-5 inline-flex align-sub mx-0.5 mb-0.5" /> et Nuxt <span class="i-logos-nuxt-icon h-6 w-6 inline-flex align-sub mx-0.5" />.
    </UiP>
    <UiP class="group hover:text-zinc-400">
      <span class="i-mingcute-tool-line mr-2 h-8 w-8 inline-flex align-bottom text-bego-400 group-hover:text-bego-700" :class="{ 'animate-bounce': shitMode }" />
      Je mets à disposition mes compétences de développeur senior pour vous accompagner dans la réalisation et la maintenance de vos projets web, nouveaux ou déjà existants.
    </UiP>
    <UiP class="group hover:text-zinc-400">
      <span class="i-mingcute-package-line mr-2 h-8 w-8 inline-flex align-bottom text-bego-400 group-hover:text-bego-700" :class="{ 'animate-bounce': shitMode }" />
      Je m'applique à assurer une modernité technique et des services web épurés. Cela passe par un développement soigné des interfaces et des fonctionnalités de l'application, ainsi que par un soutien didactique lors du déploiement des outils de travail.
    </UiP>
    <UiP class="group hover:text-zinc-400">
      <span class="i-mingcute-run-line mr-2 h-8 w-8 inline-flex align-bottom text-bego-400 group-hover:text-bego-700" :class="{ 'animate-bounce': shitMode }" />
      Entre deux projets dev, sérieux ou non, j'aime courir des marathons et randonner autour de <span class="i-mingcute-triumphal-arch-line h-6 w-6 inline-flex align-sub" /> Montpellier
    </UiP>
  </div>
  <div class="flex items-center flex-wrap gap-x-6 gap-y-3 my-8 lg:my-16">
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
      to="/prestations"
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
