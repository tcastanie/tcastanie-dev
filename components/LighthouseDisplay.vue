<script lang="ts" setup>
const props = defineProps<{
  performance: number
  a11y: number
  bestPractices: number
  seo: number
}>()
</script>

<template>
  <div class="grid grid-cols-4 place-items-center">
    <div
      v-for="(metric, key) of props"
      :key="key"
      class="grid place-items-center h-28 w-28 rounded-full border-8"
      :class="{
        'bg-green border-green-800 text-green-800': metric > 89,
        'bg-yellow border-yellow-800 text-yellow-800': metric <= 89 && metric > 49,
        'bg-red border-red-800 text-red-800': metric <= 49,
      }"
      :title="capitalize(key)"
    >
      <span class="text-5xl font-bold font-mono">{{ metric }}</span>
    </div>
  </div>
</template>

<style scoped>

</style>
