const title = 'Thibaut Castanié'
const subtitle = 'Développeur web front-end indépendant'
const picture = 'tcastanie.jpg'
const location = 'Montpellier'
const description = `Fort de 8 ans d'expérience dans le développement web, je mets à disposition mes compétences de développeur front-end spécialisé en JavaScript, Vue et Nuxt. Je m'applique à assurer une modernité technique et des services web épurés. Cela passe par un développement scrupuleux des interfaces liées aux fonctionnalités clés de votre application, ainsi que par un soutien didactique lors du déploiement de vos outils de travail.`

const experiences = [
  {
    title: 'Développeur web freelance',
    location: 'Montpellier',
    startDate: '2023-09-01',
    endDate: 'new Date()',
    description: 'Auto-entrepreneur',
    missions: [
        `Création du site web du Domaine l'Angélus, permettant notamment la réservation de gîtes et de cours de chiens de troupeaux. Développement complet du front full-static (Nuxt), déploiement du back-office sur mesure (Directus) et gestion des paiements (Stripe). Accompagnement, aide à la contribution et support continu.`,
        `Formation continue aux dernières versions des outils de l'écosystème Nuxt et Vue`,
        `Développement de mini projets personnels`,
    ],
  },
  {
    title: 'Ingénieur étude et développement',
    company: 'Smile',
    location: 'Montpellier',
    startDate: '2021-02-01',
    endDate: '2023-04-30',
    description: 'Développeur et intégrateur front-end de sites e-commerce complexes.',
    missions: [
        `Gestion complète du front du site e-commerce Snowleader, intégration de fonctionnalités (dont SSR, SEO, tests unitaires), optimisations des performances (web, scores SEO et paiements), amélioration continue et support. Accompagnement d'un alternant et d'un stagiaire.`,
        `Intégration web de maquettes (Avène, Aderma, Klorane)`,
        `Aide ponctuelle sur d'autres projets`,
    ],
  },
  {
    title: 'Co-fondateur & Président',
    company: 'Qyrolab',
    location: 'Montpellier',
    startDate: '2019-03-01',
    endDate: '2020-09-30',
    description: '',
    missions: [
        `Création et gestion d'une société dans le domaine du jeu-vidéo et de l'apprentissage. (EdTech)`,
        `Développement de Grammaticus, un jeu mobile d’apprentissage de la grammaire française à destination des enfants en ﬁn du primaire.`,
        `Création de Gameji, une application web & mobile permettant de créer et partager son jeu en quelques minutes.`,
    ],
  },
  {
    title: 'Ingénieur front-end',
    company: 'SATT AxLR / WeAreLearning',
    location: 'Montpellier',
    startDate: '2017-01-01',
    endDate: '2018-11-30',
    description: '',
    missions: [
        `Développement d'une plateforme proposant une solution complète pour créer des jeux sérieux dans le domaine de la formation et de la RH. (1 an et demi sous contrat avec la SATT AxLR)`,
        `Maintenance et amélioration continue de la plateforme.`,
    ],
  },
  {
    title: 'Master Informatique',
    company: 'Université de Montpellier',
    startDate: '2014',
    endDate: '2016',
    description: 'Master IMAGINA (IMAges, Games, INtelligent Agents)',
  },
  {
    title: 'License Informatique',
    company: 'Université de Montpellier',
    startDate: '2013',
    endDate: '2014',
  },
  {
    title: 'DUT Informatique',
    company: 'IUT de Montpellier',
    startDate: '2011',
    endDate: '2013',
  },
]

const skills = [
  'Vue.js',
  'Nuxt',
  'JavaScript',
  'TypeScript',
  'TailwindCSS',
  'UnoCSS',
  'Directus',
  'Unit testing',
  'git',
  'JAMstack / SSG',
  'SEO',
  'GraphQL',
  'Cloudflare tools',
]

export default {
  title,
  subtitle,
  description,
  location,
  picture,
  experiences,
  skills,
}
