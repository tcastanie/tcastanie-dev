export const formatShortDate = (dateString: string): string => {
  const date = new Date(dateString)
  const options = { year: 'numeric', month: 'short' } as Record<string, string>
  return new Intl.DateTimeFormat('fr-FR', options).format(date)
}

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  const options = { year: 'numeric', month: 'short', day: 'numeric' } as Record<string, string>
  return new Intl.DateTimeFormat('fr-FR', options).format(date)
}

// function that convert a string to a slug
export const slugify = (input: string) => {
  if (!input) return ''
  let slug = input.toLowerCase().trim()
  slug = slug.normalize('NFD').replace(/[\u0300-\u036F]/g, '')
  slug = slug.replace(/[^a-z0-9\s-]/g, ' ').trim()
  slug = slug.replace(/[\s-]+/g, '-')
  return slug
}
