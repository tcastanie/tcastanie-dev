<script lang="ts" setup>
onMounted(async () => {
  await nextTick()
  useZdog().createPlanet()
})
</script>

<template>
  <canvas class="zdog cursor-[url(/rocket.gif),_pointer]" width="128" height="128" />
</template>
