<script lang="ts" setup>
import { Anchor, Illustration, Shape, TAU } from 'zdog'

const { size = 256 } = defineProps<{
  size?: number
}>()
const sizePx = `${size}px`

onMounted(async () => {
  await nextTick()

  let isSpinning = true
  const illo = new Illustration({
    element: '.zdog',
    zoom: 2,
    dragRotate: true,
    onDragStart() { isSpinning = false },
    onDragEnd() { isSpinning = true },
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
    // eslint-disable-next-line no-new
    new Shape({
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
    requestAnimationFrame(animate)
  }
  animate()
})
</script>

<template>
  <canvas class="zdog mx-auto" :width="size" :height="size" />
</template>

<style scoped>
.zdog {
  max-width: v-bind('sizePx');
}
</style>
