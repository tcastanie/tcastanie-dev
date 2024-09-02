<script lang="ts" setup>
defineProps<{ id?: string }>()
</script>

<template>
  <BegoH1 :id="id" class="mb-12">
    <slot />
  </BegoH1>
</template>
