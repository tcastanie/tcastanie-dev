<script setup lang="ts">
const { shitMode } = useShitMode()
</script>

<template>
  <div v-auto-animate class="w-full">
    <BegoDivider
      v-if="!shitMode"
      orientation="horizontal"
      icon="i-mingcute-code-line"
      size="xs"
      type="dashed"
    />
    <img
      v-else
      src="~/assets/bluline.gif"
      alt="separator"
      width="575"
      height="10"
      class="mx-auto"
    >
  </div>
</template>
