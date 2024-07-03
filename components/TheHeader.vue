<script lang="ts" setup>
const { shitMode, toggleShitMode } = useShitMode()
</script>

<template>
  <UiHeader title="Thibaut Castanié" :links="headerLinks">
    <template #right>
      <UiButton
        variant="ghost"
        icon="i-mingcute-planet-line"
        square
        :white="!shitMode"
        :class="{ 'animate-spin': shitMode }"
        @click="toggleShitMode()"
      />
    </template>
  </UiHeader>
</template>
