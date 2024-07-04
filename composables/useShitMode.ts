export const useShitMode = () => {
  const shitMode = useState('shitMode', () => false)
  const toggleShitMode = useToggle(shitMode)

  const img = useImage()
  const starsImg = img('/stars.gif', { width: 304, height: 234, quality: 95, format: 'gif' })
  const rocketImg = img('/rocket.gif', { width: 94, height: 50, quality: 95, format: 'gif' })

  watch(shitMode, (newValue) => {
    if (newValue) {
      document.body.style.backgroundImage = `url("${starsImg}")`
      document.body.style.backgroundRepeat = 'repeat'
      document.body.style.cursor = `url("${rocketImg}"), auto`
    } else {
      document.body.style.backgroundImage = ''
      document.body.style.backgroundRepeat = ''
      document.body.style.cursor = ''
    }
  })

  return { shitMode, toggleShitMode }
}
