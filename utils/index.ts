export const headerLinks = [
  { label: 'CV', to: '/cv', icon: 'i-mingcute-profile-line' },
  { label: 'Projets', to: '/projets', icon: 'i-mingcute-folder-more-line' },
  { label: 'Prestations', to: '/prestations', icon: 'i-mingcute-server-line' },
  { label: 'Contact', to: '/contact', icon: 'i-mingcute-send-plane-line' },
]

export const footerLinks = headerLinks.map(({ icon, ...rest }) => rest)

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  const options = { year: 'numeric', month: 'short' } as Record<string, string>
  return new Intl.DateTimeFormat('fr-FR', options).format(date)
}
