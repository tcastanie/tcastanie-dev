// @unocss-include
export const useLinks = () => {
  const headerLinks = ref([
    { label: 'CV', to: '/cv', icon: 'i-mingcute-profile-line' },
    { label: 'Projets', to: '/projets', icon: 'i-mingcute-folder-more-line' },
    { label: 'Prestations', to: '/prestations', icon: 'i-mingcute-necktie-line' },
    { label: 'Contact', to: '/contact', icon: 'i-mingcute-send-plane-line' },
  ])
  // footerLinks equals headerLinks minus icon property
  const footerLinks = computed(() => headerLinks.value.map(({ icon, ...link }) => link))

  const footerLinksRight = ref([
    {
      label: 'Linkedin',
      to: 'https://www.linkedin.com/in/tcastanie',
      icon: 'i-mingcute-linkedin-line',
      target: '_blank',
    },
    {
      label: 'Github',
      to: 'https://github.com/tcastanie',
      icon: 'i-mingcute-github-line',
      target: '_blank',
    },
  ])

  return {
    headerLinks,
    footerLinks,
    footerLinksRight,
  }
}
