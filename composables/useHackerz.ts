export const useHackerz = () => {
  const [hackerzMode, toggleHackerzMode] = useToggle()

  const img = useImage()
  const avatarUrl = img('/avatar.jpg', { width: 160, height: 160, quality: 95, format: 'webp' })
  const codingUrl = img('/coding.gif', { width: 80, height: 80, quality: 95, format: 'gif' })
  const bgAvatar = ref(`url('${avatarUrl}')`)
  const bgCoding = ref(`url('${codingUrl}')`)

  return {
    hackerzMode,
    toggleHackerzMode,
    bgAvatar,
    bgCoding,
  }
}
