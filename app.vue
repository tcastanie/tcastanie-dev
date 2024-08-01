<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: 'bg-zinc-900 text-white',
  },
})
</script>

<template>
  <NuxtLoadingIndicator color="#E02956" />
  <TheHeader />
  <NuxtPage />
  <TheSeparator />
  <TheFooter />
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.5rem);
}
</style>
