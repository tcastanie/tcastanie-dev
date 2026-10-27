export function useScripts() {
  const config = useRuntimeConfig()
  return [{
    'src': String(config.public.pallas),
    'async': true,
    'data-website-id': String(config.public.umami),
    'data-performance': true,
  }]
}
