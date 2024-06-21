<script setup lang="ts">
defineProps<{
  title?: string
  description?: string
}>()
</script>

<template>
  <div class="py-8 sm:py-16">
    <div class="grid">
      <UiH1 v-if="$slots.title">
        <slot name="title" />
      </UiH1>
      <UiH1 v-else-if="title">
        {{ title }}
      </UiH1>
      <div v-if="description" class="mt-4 text-lg text-zinc-300">
        {{ description }}
      </div>
    </div>
  </div>
</template>
