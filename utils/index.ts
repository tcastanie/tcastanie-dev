export const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  const options = { year: 'numeric', month: 'short' } as Record<string, string>
  return new Intl.DateTimeFormat('fr-FR', options).format(date)
}

export const capitalize = (text: string): string => {
  return text.charAt(0).toUpperCase() + text.slice(1)
}
