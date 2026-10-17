<script lang="ts" setup>
import { Anchor, Illustration, Shape, TAU } from 'zdog'

const { size = 256 } = defineProps<{
  size?: number
}>()
const sizePx = `${size}px`

const canvas = useTemplateRef('canvas')
let rafId: number | undefined

onMounted(async () => {
  await nextTick()
  if (!canvas.value)
    return

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  let isSpinning = !reducedMotion
  const illo = new Illustration({
    element: canvas.value,
    zoom: 2,
    dragRotate: true,
    onDragStart() { isSpinning = false },
    onDragEnd() { isSpinning = !reducedMotion },
  })
  // sphere
  const sphere = new Shape({
    addTo: illo,
    stroke: 80,
    color: '#FF7777',
  })
  // ring
  const nbParts = 32
  const sizeParts = 8
  for (let i = 0; i < nbParts; i++) {
    const anchor = new Anchor({
      addTo: sphere,
      rotate: { y: TAU * (i / nbParts), x: TAU / 18 },
    })
    const _ring = new Shape({
      addTo: anchor,
      path: [{ z: -(sizeParts / 2) }, { z: sizeParts / 2 }],
      translate: { x: 54, y: 0, z: 0 },
      stroke: 14,
      color: '#C31C56',
    })
  }

  function animate() {
    illo.rotate.y += isSpinning ? 0.02 : 0
    illo.updateRenderGraph()
    rafId = requestAnimationFrame(animate)
  }
  animate()
})

onBeforeUnmount(() => {
  if (rafId !== undefined)
    cancelAnimationFrame(rafId)
})
</script>

<template>
  <canvas ref="canvas" class="mx-auto" :width="size" :height="size" />
</template>

<style scoped>
canvas {
  max-width: v-bind('sizePx');
}
</style>
