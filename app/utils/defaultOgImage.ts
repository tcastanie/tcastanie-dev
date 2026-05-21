export default (title?: string) => {
  const route = useRoute()
  return defineOgImage('Carte', {
    colorMode: 'dark',
    primaryColor: '#E6375A',
    primaryTextColor: '#E6375A',
    site: route?.fullPath || '',
    ...(title && { title }),
  })
}
