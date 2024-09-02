export const useHackerz = () => {
  const [hackerzMode, toggleHackerzMode] = useToggle()

  const img = useImage()
  const avatarUrl = img('/avatar.jpg', { width: 160, height: 160, format: 'webp', quality: 95 })
  const codingUrl = img('/coding.gif', { width: 80, height: 80, format: 'gif', quality: 95 })
  const bgAvatar = ref(`url('${avatarUrl}')`)
  const bgCoding = ref(`url('${codingUrl}')`)

  return {
    hackerzMode,
    toggleHackerzMode,
    bgAvatar,
    bgCoding,
  }
}
