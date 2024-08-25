<template>
  <BegoPage>
    <BegoHero title="Prestations" icon="i-mingcute-necktie-fill" />
    <BegoP class="mb-4 text-sm italic">
      Tous les prix sont donnés à titre indicatif et sont susceptibles de varier en fonction de la complexité technique du projet et des contraintes métiers liées à celui-ci.
    </BegoP>
    <BegoButton
      to="/contact"
      icon="i-mingcute-send-plane-line"
      variant="solid"
      class="mb-12"
    >
      Contactez-moi pour un devis sur mesure
    </BegoButton>
    <div class="grid gap-8">
      <BegoDivider label="🏗️ Développement et construction 🔨" type="dashed" />
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
          <BegoP class="text-center text-xs italic">
            (TJM donné à titre indicatif, devis sur mesure)
          </BegoP>
        </template>
      </PriceCard>
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
          { label: 'Technologies dernier cri', icon: 'i-simple-icons-vuedotjs' },
          { label: 'Intégration paiements (Stripe)', icon: 'i-mingcute-bank-card-line' },
        ]"
      >
        <template #cta>
          <BegoP class="text-center text-xs italic">
            (TJM donné à titre indicatif, devis sur mesure)
          </BegoP>
        </template>
      </PriceCard>
      <div class="flex">
        <BegoButton to="/contact" icon="i-mingcute-send-plane-line" variant="solid">
          Contactez-moi
        </BegoButton>
      </div>
      <BegoDivider label="🚀 Hébergement et maintenance 🛎️" type="dashed" />
      <PriceCard
        icon="i-mingcute-display-line"
        title="Formule « Site vitrine »"
        description="Déploiement et maintien en ligne du site"
        price="60€"
        cycle="/an"
        :features="[
          { label: 'Disponibilité 99,9%' },
          { label: 'Mises à jour de sécurité', icon: 'i-mingcute-safety-certificate-line' },
          { label: 'Affichage ultra-rapide', icon: 'i-mingcute-dashboard-3-line' },
          { label: 'Support par e-mail', icon: 'i-mingcute-mail-send-line' },
        ]"
      />
      <PriceCard
        icon="i-mingcute-report-forms-line"
        title="Formule « Web app »"
        description="Accès à la modification des composants du site"
        price="120€"
        cycle="/an"
        :features="[
          { label: 'Services de « Site vitrine »', icon: 'i-mingcute-display-line' },
          { label: 'Plateforme de contribution', icon: 'i-mingcute-edit-2-line' },
          { label: 'Adaptation contraintes métier', icon: 'i-mingcute-briefcase-line' },
          { label: 'Sections personnalisables', icon: 'i-mingcute-layout-2-line' },
        ]"
      >
        <template #cta>
          <BegoP class="text-center text-xs italic">
            +10€/an par accès supplémentaire à la plateforme de contribution
          </BegoP>
        </template>
      </PriceCard>
      <PriceCard
        title="Nom de domaine"
        description="Déploiement et renouvellement annuel de votre nom de domaine (.fr, .com, .net, etc.) au prix de sa location (généralement 10~20€/an)"
      />
      <div class="flex">
        <BegoButton to="/contact" icon="i-mingcute-send-plane-line" variant="solid">
          Contactez-moi
        </BegoButton>
      </div>
    </div>
  </BegoPage>
</template>
