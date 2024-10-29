// @unocss-include
export const useProjects = () => {
  const projects = ref([
    {
      title: 'Quick UI designs',
      description: `Intégrations de quelques designs créés par <u><a href="https://www.uidesigndaily.com/" target="_blank">uidesigndaily.com</a></u>. Pour le fun.<br/><s>Mobile</s>Desktop-first 🙃`,
      date: '2024',
      skills: ['Vue', 'Vite', 'UnoCSS', 'TailwindCSS', 'Radix Vue', 'Apache ECharts'],
      links: [
        {
          label: 'quick-ui-designs.tcastanie.dev',
          to: 'https://quick-ui-designs.tcastanie.dev/',
          icon: 'i-mingcute-grid-2-line',
        },
        {
          label: 'tcastanie/quick-ui-designs',
          to: 'https://github.com/tcastanie/quick-ui-designs',
          icon: 'i-mingcute-github-line',
        },
      ],
    },
    {
      title: 'Wacky Planets',
      description: `Petite application SPA rapide et superflue utilisant le module Nuxt I18n. Développement chronométré afin d'améliorer mon efficacité et de m'auto-évaluer.`,
      date: 'Juillet 2024',
      skills: ['Nuxt', 'SPA', 'I18n'],
      links: [
        {
          label: 'wacky-planets.tcastanie.dev',
          to: 'https://wacky-planets.tcastanie.dev/',
          icon: 'i-mingcute-link-line',
        },
        {
          label: 'tcastanie/wacky-planets',
          to: 'https://github.com/tcastanie/wacky-planets',
          icon: 'i-mingcute-github-line',
        },
      ],
    },
    {
      title: 'Nuxt Bego UI',
      subtitle: 'Librairie de composants pour Nuxt',
      description: `Fortement inspiré par <i>Nuxt UI</i> mais avec <i>UnoCSS</i> au lieu de <i>TailwindCSS</i>. Le but est de pouvoir démarrer rapidement certains de mes projets. Ce site est d'ailleurs construit avec.`,
      date: 'Juillet 2024',
      skills: ['Nuxt layer', 'Open source'],
      links: [
        {
          label: 'nuxt-bego-ui.tcastanie.dev (showcase)',
          to: 'https://nuxt-bego-ui.tcastanie.dev/',
          icon: 'i-mingcute-grid-2-line',
        },
        {
          label: 'tcastanie/nuxt-bego-ui',
          to: 'https://github.com/tcastanie/nuxt-bego-ui',
          icon: 'i-mingcute-github-line',
        },
      ],
    },
    {
      primary: true,
      title: `Domaine l'Angélus`,
      subtitle: 'Location de gîtes et de cours de dressage de chiens de troupeaux',
      description: `Création d'un site web pour le <b>Domaine l'Angélus</b> servant de vitrine et permettant également la réservation de gîtes et de cours de dressage de chiens de troupeaux. Développement complet du front <i>full static</i>, déploiement du back-office sur mesure, gestion des paiements et système de réservation réalisé <i>from scratch</i>.<br/>Accompagnement, aide à la contribution et support continu.`,
      image: '/doma_social.png',
      date: 'Juillet 2024',
      skills: ['Nuxt', 'Vue.js', 'TypeScript', 'Directus', 'UnoCSS', 'Stripe', 'Cloudflare', 'Node.js', 'SEO'],
      lighthouse: { perf: 85, a11y: 98, bp: 100, seo: 100 },
      lighthousePages: 26,
      links: [
        {
          label: 'www.domaine-langelus.fr',
          to: 'https://www.domaine-langelus.fr/',
          icon: 'i-mingcute-link-line',
        },
      ],
    },
    {
      title: 'Another APOD viewer',
      subtitle: `Simple appli de visualisation de l'image du jour de la NASA`,
      description: `Petit projet personnel pour améliorer mes compétences sur Vue, son écosystème, et tout le reste. Principalement Vue 3 et la <i>Composition API</i>, Vite, Pinia, Vitest... tout cela prêt à l'emploi dans un environnement convivial pour les développeurs.<br/><b>Juin 2024 :</b> Réusinage complet avec Nuxt, Nuxt UI et création d'un proxy avec Nitro (serveur Nuxt) pour l'API de la NASA.`,
      image: '/APOD_social.png',
      date: 'Août 2022',
      skills: ['Vue 3', 'Vite', 'Pinia', 'Vitest', 'Nuxt', 'Nuxt UI', 'Nitro'],
      links: [
        {
          label: 'apod.tcastanie.dev',
          to: 'https://apod.tcastanie.dev',
          icon: 'i-mingcute-link-line',
        },
        {
          label: 'tcastanie/another-apod-viewer',
          to: 'https://github.com/tcastanie/another-apod-viewer',
          icon: 'i-mingcute-github-line',
        },
        {
          label: 'apod.nasa.gov',
          to: 'https://apod.nasa.gov',
          icon: 'i-simple-icons-nasa',
        },
      ],
    },
  ])
  return { projects }
}
