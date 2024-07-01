<script setup lang="ts">
// 🚧 WIP
// https://ui.nuxt.com/pro/components/pricing-card ?
</script>

<template>
  <div v-if="0" class="flex flex-col text-lg">
    <span class="i-simple-icons-codechef h-48 w-48 mx-auto mb-12 text-bleu" />
    <ul class="list-disc list-image-[url(/favicon-16x16.png)] mb-2">
      <li>Conception et création de sites web sur mesure, de la simple vitrine aux applications complexes</li>
      <li> Refontes, maintenance, optimisations des performances, corrections et assistance technique sur projets existants</li>
    </ul>
    <p class="mb-12">
      -> Devis sur mesure, en fonction du projet (TJM adapté à la complexité technique).
    </p>
    <p class="mb-6">
      Une fois que le site est construit, le code est prêt à être déployé sur un serveur. Pour simplifier les choses, je vous propose mes services pour déployer et maintenir celui-ci :
    </p>
    <ul class="list-disc list-image-[url(/favicon-16x16.png)]">
      <li>
        Site simple : 5€/mois ou 60€/an
        <ul class="list-disc list-inside">
          <li>Disponible 99,9% du temps</li>
          <li>Mises à jour de sécurité</li>
          <li>Support par mail</li>
        </ul>
      </li>
      <li>
        Web app : 10€/mois ou 120€/an
        <ul class="list-disc list-inside">
          <li>Accès à une plateforme pour modifier des parties du site</li>
          <li>+2€/mois par accès supplémentaire à la plateforme</li>
          <li>Services du "site simple"</li>
        </ul>
      </li>
      <li>Nom de domaine : prix coûtant de la location (en général 10€~20€/an)</li>
    </ul>
  </div>
  <UiPage v-else>
    <UiHero title="Prestations" icon="i-mingcute-server-line" />
  </UiPage>
</template>
