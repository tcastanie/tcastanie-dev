<script setup lang="ts">
defineProps<{
  href?: string
  target?: '_blank' | '_parent' | '_self' | '_top'
}>()
</script>

<template>
  <BegoButton
    :to="href"
    :target="target"
    variant="link"
    class="text-lg!"
    no-padding
  >
    <slot />
  </BegoButton>
</template>
