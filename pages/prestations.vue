<template>
  <UiPage>
    <UiHero title="Prestations" icon="i-mingcute-server-line" />
    <UiP class="italic mb-4 text-sm">
      Tous les prix sont donnés à titre indicatif et sont susceptibles de varier en fonction de la complexité technique du projet et des contraintes métiers liées à celui-ci.
    </UiP>
    <UiButton
      to="/contact"
      icon="i-mingcute-send-plane-line"
      variant="solid"
      class="mb-12"
    >
      Contactez-moi pour un devis sur mesure
    </UiButton>
    <div class="grid gap-8">
      <PriceCard
        icon="i-mingcute-web-line"
        title="Site web"
        description="Conception et création sur mesure, de la simple vitrine aux applications les plus complexes"
        price="500€"
        discount="450€"
        cycle="/j"
        :features="[
          { label: 'Code léger et ultra-rapide', icon: 'i-mingcute-lightning-line' },
          { label: 'Adapté à tous les écrans', icon: 'i-mingcute-cellphone-2-line' },
          { label: 'Poids écolo et économique', icon: 'i-mingcute-leaf-line' },
          { label: 'Optimisations SEO', icon: 'i-mingcute-search-3-line' },
          { label: 'Technos dernier cri', icon: 'i-simple-icons-vuedotjs' },
          { label: 'Intégration services paiements', icon: 'i-mingcute-bank-card-line' },
        ]"
      >
        <template #cta>
          <UiP class="italic text-center text-xs">
            (TJM donné à titre indicatif, devis sur mesure)
          </UiP>
        </template>
      </PriceCard>
      <PriceCard
        icon="i-mingcute-tool-line"
        title="Support technique"
        description="Interventions sur code existant"
        price="500€"
        discount="450€"
        cycle="/j"
        :features="[
          { label: 'Intégrations de maquettes', icon: 'i-mingcute-file-code-line' },
          { label: 'Refontes / Réusinages', icon: 'i-mingcute-recycle-line' },
          { label: 'Optimisations performances', icon: 'i-mingcute-rocket-line' },
          { label: 'Corrections bugs', icon: 'i-mingcute-bug-line' },
          { label: 'Maintenance', icon: 'i-mingcute-chart-line-line' },
          { label: 'Assistance technique', icon: 'i-mingcute-lifebuoy-line' },
        ]"
      >
        <template #cta>
          <UiP class="italic text-center text-xs">
            (TJM donné à titre indicatif, devis sur mesure)
          </UiP>
        </template>
      </PriceCard>
      <div class="flex">
        <UiButton
          to="/contact"
          icon="i-mingcute-send-plane-line"
          variant="solid"
          size="lg"
        >
          Contactez-moi
        </UiButton>
      </div>
      <UiDivider label="Déploiement et maintenance" />
      <PriceCard
        title="Formule « Site vitrine »"
        description="Déploiement et maintient en ligne du site"
        price="5€"
        cycle="/mois"
        :features="[
          { label: 'Disponibilité 99,9%' },
          { label: 'Mises à jour de sécurité', icon: 'i-mingcute-safety-certificate-line' },
          { label: 'Affichage ultra-rapide', icon: 'i-mingcute-train-line' },
          { label: 'Support par mail', icon: 'i-mingcute-mail-send-line' },
        ]"
      />
      <PriceCard
        title="Formule « Web app »"
        description="Accès à la modification des composants du site"
        price="10€"
        cycle="/mois"
        :features="[
          { label: 'Plateforme de contribution', icon: 'i-mingcute-edit-2-line' },
          { label: 'Adaptation contraintes métier', icon: 'i-mingcute-briefcase-line' },
          { label: 'Sections personnalisables', icon: 'i-mingcute-layout-2-line' },
          { label: 'Services de « Site vitrine »' },
        ]"
      >
        <template #cta>
          <UiP class="italic text-center text-xs">
            +2€/mois par accès supplémentaire à la plateforme
          </UiP>
        </template>
      </PriceCard>
      <div class="flex">
        <UiButton
          to="/contact"
          icon="i-mingcute-send-plane-line"
          variant="solid"
          size="lg"
        >
          Contactez-moi
        </UiButton>
      </div>
      <UiP>
        Si vous souhaitez que je m'occupe de la gestion du nom de domaine, je facturerai le prix de la location (en général 10€~20€/an).
      </UiP>
    </div>
  </UiPage>
</template>
