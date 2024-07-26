<script lang="ts" setup>
const { shitMode, toggleShitMode } = useShitMode()
const { headerLinks } = useLinks()
</script>

<template>
  <BegoHeader title="Thibaut Castanié" :links="headerLinks">
    <template #right>
      <BegoButton
        variant="ghost"
        icon="i-mingcute-planet-line"
        square
        :white="!shitMode"
        :class="{ 'animate-spin': shitMode }"
        @click="toggleShitMode()"
      />
    </template>
  </BegoHeader>
</template>
