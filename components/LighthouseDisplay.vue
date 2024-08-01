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
      class="grid h-14 w-14 place-items-center border-3 rounded-full sm:h-24 sm:w-24 sm:border-6"
      :class="{
        'bg-green border-green-800 text-green-800': metric > 89,
        'bg-yellow border-yellow-800 text-yellow-800': metric <= 89 && metric > 49,
        'bg-red border-red-800 text-red-800': metric <= 49,
      }"
      :title="getTitle(key)"
    >
      <span class="text-2xl font-medium font-mono sm:text-5xl sm:font-bold">{{ metric }}</span>
    </div>
  </div>
</template>
