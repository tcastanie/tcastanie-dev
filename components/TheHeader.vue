<script lang="ts" setup>
const { shitMode, toggleShitMode } = useShitMode()
const { headerLinks, footerLinksRight } = useLinks()
</script>

<template>
  <BegoHeader title="Thibaut Castanié" :links="headerLinks">
    <template #right>
      <BegoButton
        v-for="{ label, to, icon, target } of footerLinksRight"
        :key="label"
        :to="to"
        :target="target"
        :icon="icon"
        variant="ghost"
        square
        white
        :title="label"
        :aria-label="label"
      />
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
