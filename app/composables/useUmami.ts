export function useUmami() {
  const { public: { scripts: { umamiAnalytics } } } = useRuntimeConfig()
  return useScriptUmamiAnalytics({
    websiteId: umamiAnalytics.websiteId,
    scriptInput: {
      src: umamiAnalytics.src,
    },
  })
}
