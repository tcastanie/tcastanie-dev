<script lang="ts" setup>
import { TAU, Illustration, Shape, Anchor } from 'zdog'

const { toggleShitMode } = useShitMode()

onMounted(async () => {
  await nextTick()

  let isSpinning = true
  const illo = new Illustration({
    element: '.zdog',
    zoom: 1,
    dragRotate: true,
    onDragStart: function () {
      isSpinning = false
      toggleShitMode()
    },
    onDragEnd: function () {
      isSpinning = true
    },
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
  <canvas class="zdog cursor-[url(/rocket.gif),_pointer]" width="128" height="128" />
</template>
