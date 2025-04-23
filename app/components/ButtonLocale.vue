<script lang="ts" setup>
const { to } = defineProps<{ to?: string }>()
const localePath = useLocalePath()
</script>

<template>
  <UButton :to="to ? localePath(to) : undefined">
    <slot />
  </UButton>
</template>
