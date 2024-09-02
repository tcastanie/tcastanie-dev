<script lang="ts" setup>
defineProps<{ id?: string }>()
</script>

<template>
  <BegoH2 :id="id" class="mb-6 mt-12">
    <slot />
  </BegoH2>
</template>
