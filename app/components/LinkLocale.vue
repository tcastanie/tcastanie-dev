<script lang="ts" setup>
const { to } = defineProps<{ to?: string }>()
const localePath = useLocalePath()
</script>

<template>
  <ULink :to="to ? localePath(to) : undefined">
    <slot />
  </ULink>
</template>
