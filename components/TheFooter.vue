<script lang="ts" setup>
const { shitMode, toggleShitMode } = useShitMode()
const { footerLinks, footerLinksRight } = useLinks()
</script>

<template>
  <BegoFooter :links="footerLinks">
    <template #left>
      <div class="flex items-center">
        <BegoIcon icon="i-mingcute-copyright-line" />
        <BegoButton
          to="https://creativecommons.org/licenses/by-nc-sa/4.0/"
          target="_blank"
          variant="link"
          size="sm"
          white
        >
          CC BY-NC-SA 4.0
        </BegoButton>
        <span>tcastanie.dev {{ new Date().getFullYear() }}</span>
      </div>
    </template>
    <template #right>
      <BegoButton
        v-for="{ label, to, icon, target } of footerLinksRight"
        :key="label"
        :to="to"
        :target="target"
        :icon="icon"
        variant="link"
        size="lg"
        square
        white
        :title="label"
        :aria-label="label"
      />
      <BegoButton
        to="https://www.malt.fr/profile/tcastanie"
        target="_blank"
        variant="link"
        size="lg"
        square
        white
        title="Malt"
        aria-label="Malt"
      >
        <SvgMalt class="h-4 w-4" />
      </BegoButton>
      <BegoButton
        v-if="shitMode"
        icon="i-mingcute-planet-line"
        variant="link"
        size="lg"
        square
        title="Turn off party mode"
        aria-label="Party mode"
        class="animate-spin"
        @click="toggleShitMode()"
      />
    </template>
  </BegoFooter>
  <audio
    v-if="shitMode"
    ref="sg1"
    src="/sg1.mp3"
    controls
    autoplay
    loop
    volume="0.4"
    class="fixed lg:bottom-16 left-0 mx-auto bottom-0"
  />
</template>
