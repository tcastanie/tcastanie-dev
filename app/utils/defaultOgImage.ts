export default (title?: string) => {
  return defineOgImageComponent('NuxtSeo', {
    theme: '#E6375A',
    colorMode: 'dark',
    siteName: 'tcastanie.dev',
    ...(title && { title }),
  })
}
