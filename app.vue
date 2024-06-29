<script setup lang="ts">
const { shitMode } = useShitMode()
</script>

<template>
  <Body class="bg-zinc-900 text-white">
    <NuxtLoadingIndicator color="#E02956" />
    <TheHeader />
    <NuxtPage />
    <UiDivider
      v-if="!shitMode"
      orientation="horizontal"
      icon="i-mingcute-code-line"
      size="xs"
      type="dashed"
    />
    <NuxtImg
      v-else
      src="/bluline.gif"
      alt="separator"
      format="gif"
      width="575"
      height="10"
      class="mx-auto"
    />
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
