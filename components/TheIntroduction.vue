<script lang="ts" setup>
const { shitMode } = useShitMode()
</script>

<template>
  <div class="grid cursor-default gap-y-8 text-pretty">
    <BegoH2 class="" :class="{ 'animate-bounce': shitMode }">
      Bonjour !
    </BegoH2>
    <BegoP class="group hover:text-zinc-400">
      <span class="i-mingcute-user-2-line mr-2 inline-block h-8 w-8 align-bottom text-bego-400 group-hover:animate-ping group-hover:text-bego-700" :class="{ 'animate-bounce': shitMode }" />
      Je suis Thibaut Castanié, développeur web indépendant spécialisé en JavaScript.
    </BegoP>
    <BegoP class="group hover:text-zinc-400">
      <span class="i-mingcute-terminal-box-line mr-2 inline-block h-8 w-8 align-bottom text-bego-400 group-hover:animate-ping group-hover:text-bego-700" :class="{ 'animate-bounce': shitMode }" />
      J'ai huit ans d'xp en développement web, principalement en front-end et dans l'écosystème de Vue <span class="i-logos-vue mx-0.5 mb-0.5 inline-block h-5 w-5 align-sub hover:animate-ping" /> et Nuxt <span class="i-logos-nuxt-icon mx-0.5 inline-block h-6 w-6 align-sub hover:animate-ping" />.
    </BegoP>
    <div class="group text-pretty text-lg text-zinc-300 hover:text-zinc-400">
      <span class="i-mingcute-package-line mr-2 inline-block h-8 w-8 align-bottom text-bego-400 group-hover:animate-ping group-hover:text-bego-700" :class="{ 'animate-bounce': shitMode }" />
      <TextSwitcher :text="['Je construis', '&nbsp;&nbsp;&nbsp;&nbsp;Je répare', '&nbsp;&nbsp;J\'améliore']" class="w-25" /> votre <TextSwitcher :text="['app', 'site']" delay class="w-8" /> web sur mesure, en accord avec vos besoins et vos contraintes métier.
      <BegoButton
        to="/prestations"
        variant="link"
        icon="i-mingcute-arrow-right-line"
        trailing
        class="ml-4"
      >
        Mes prestations
      </BegoButton>
    </div>
    <BegoP class="group hover:text-zinc-400">
      <span class="i-mingcute-tool-line mr-2 inline-block h-8 w-8 align-bottom text-bego-400 group-hover:animate-ping group-hover:text-bego-700" :class="{ 'animate-bounce': shitMode }" />
      Mes compétences de développeur senior sont à votre disposition pour vous accompagner lors du déploiement et de la maintenance de vos outils de travail.
    </BegoP>
    <BegoP v-if="0" class="group hover:text-zinc-400">
      <span class="i-mingcute-package-line mr-2 inline-block h-8 w-8 align-bottom text-bego-400 group-hover:animate-ping group-hover:text-bego-700" :class="{ 'animate-bounce': shitMode }" />
      Je m'applique à assurer une modernité technique et des services web épurés. Cela passe par un développement soigné des interfaces et des fonctionnalités de l'application, ainsi que par un soutien didactique lors du déploiement des outils de travail.
    </BegoP>
    <BegoP class="group hover:text-zinc-400">
      <span class="i-mingcute-run-line mr-2 inline-block h-8 w-8 align-bottom text-bego-400 group-hover:animate-ping group-hover:text-bego-700" :class="{ 'animate-bounce': shitMode }" />
      Entre deux projets dev, sérieux ou non, j'aime courir des marathons et des ultra-trails autour de <span class="i-mingcute-triumphal-arch-line h-6 w-6 inline-flex align-sub hover:animate-ping" /> Montpellier
    </BegoP>
  </div>
  <div class="my-8 flex flex-wrap items-center gap-x-6 gap-y-3 lg:my-16">
    <BegoButton
      to="/contact"
      icon="i-mingcute-send-plane-line"
      variant="solid"
      size="lg"
      :class="{ 'animate-pulse': shitMode }"
    >
      Contactez-moi !
    </BegoButton>
    <BegoButton
      to="/projets"
      icon="i-mingcute-arrow-right-line"
      variant="link"
      size="lg"
      trailing
      :class="{ 'animate-pulse': shitMode }"
    >
      Mes projets et expérimentations
    </BegoButton>
  </div>
</template>
