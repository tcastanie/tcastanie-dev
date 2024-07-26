<script lang="ts" setup>
const props = defineProps<{
  perf: number
  a11y: number
  bp: number
  seo: number
}>()

const getTitle = (key: string) => {
  switch (key) {
    case 'perf':
      return 'Performances'
    case 'a11y':
      return 'Accessibilité'
    case 'bp':
      return 'Bonnes pratiques'
    case 'seo':
      return 'SEO'
    default:
      break
  }
}
</script>

<template>
  <div class="grid grid-cols-4 place-items-center">
    <div
      v-for="(metric, key) of props"
      :key="key"
      class="grid place-items-center h-14 w-14 sm:h-24 sm:w-24 rounded-full border-3 sm:border-6"
      :class="{
        'bg-green border-green-800 text-green-800': metric > 89,
        'bg-yellow border-yellow-800 text-yellow-800': metric <= 89 && metric > 49,
        'bg-red border-red-800 text-red-800': metric <= 49,
      }"
      :title="getTitle(key)"
    >
      <span class="text-2xl sm:text-5xl font-medium sm:font-bold font-mono">{{ metric }}</span>
    </div>
  </div>
</template>

<style scoped>

</style>
