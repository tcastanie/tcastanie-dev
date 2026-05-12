<script lang="ts" setup>
import type { RouteLocationRaw } from 'vue-router'

const { to } = defineProps<{ to?: RouteLocationRaw }>()
const localePath = useLocalePath()
</script>

<template>
  <UButton :to="to ? localePath(to) : undefined">
    <slot />
  </UButton>
</template>
