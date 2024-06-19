<script setup lang="ts">
withDefaults(defineProps<{
  title?: string
  description?: string
  avatar?: boolean
}>(), {
  avatar: false,
})
</script>

<template>
  <div class="py-8 sm:py-16">
    <div class="grid">
      <UiH1 v-if="$slots.title" :class="{ 'inline-flex items-center gap-4': avatar }">
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
