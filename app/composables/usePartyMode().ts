export function usePartyMode() {
  const partyMode = useState('party-mode', () => false)

  const togglePartyMode = () => {
    partyMode.value = !partyMode.value
  }

  return {
    partyMode,
    togglePartyMode,
  }
}
