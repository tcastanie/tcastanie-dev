export function useScripts() {
  const config = useRuntimeConfig()
  return [{
    'src': config.public.pallas,
    'async': true,
    'data-website-id': config.public.umami,
    'data-performance': true,
  }]
}
