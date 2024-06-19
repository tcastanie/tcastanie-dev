<template>
  <div class="bg-bego-950/10 divide-y divide-bego-100 ring-1 ring-bego-100 rounded-lg shadow">
    <div v-if="$slots.header" class="px-4 py-5 sm:px-6">
      <slot name="header" />
    </div>
    <div v-if="$slots.default" class="px-4 py-5 sm:px-6">
      <slot />
    </div>
    <div v-if="$slots.footer" class="px-4 py-5 sm:px-6">
      <slot name="footer" />
    </div>
  </div>
</template>
