<script lang="ts" setup>
import { NuxtLink } from '#components'

const props = withDefaults(defineProps<{
  title?: string
  to?: `/${string}` | ''
}>(), {
  to: '/',
})
const { title, to } = toRefs(props)
</script>

<template>
  <header class="bg-background/75 backdrop-blur border-b border-zinc-800 -mb-px sticky top-0 z-50">
    <div class="flex items-center justify-between gap-3 h-[--header-height]">
      <div class="lg:flex-1 flex items-center gap-1.5">
        <template v-if="$slots.left">
          <slot name="left" />
        </template>
        <component
          :is="to ? NuxtLink : 'div'"
          v-else-if="$slots.logo"
          :to="to"
          class="flex-shrink-0 font-bold text-xl text-white flex items-end gap-1.5"
        >
          <slot name="logo" />
        </component>
        <component
          :is="to ? NuxtLink : 'div'"
          v-else-if="title"
          :to="to"
          class="font-bold text-xl text-white flex items-end"
        >
          {{ title }}
        </component>
      </div>
      <template v-if="$slots.default">
        <slot />
      </template>
      <div class="flex items-center justify-end lg:flex-1 gap-1.5">
        <template v-if="$slots.right">
          <slot name="right" />
        </template>
      </div>
    </div>
  </header>
</template>
