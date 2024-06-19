<script setup lang="ts">
</script>

<template>
  <Body class="bg-zinc-900 text-white">
    <NuxtLoadingIndicator color="#E02956" />
    <TheHeader />
    <NuxtPage />
    <!-- divider -->
    <TheFooter />
  </Body>
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
