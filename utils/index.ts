export const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  const options = { year: 'numeric', month: 'short' } as Record<string, string>
  return new Intl.DateTimeFormat('fr-FR', options).format(date)
}
