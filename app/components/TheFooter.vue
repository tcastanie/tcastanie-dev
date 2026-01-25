<script lang="ts" setup>
const { partyMode, togglePartyMode } = usePartyMode()
</script>

<template>
  <UFooter :ui="{ left: 'text-muted' }">
    <template #left>
      <UIcon name="i-mingcute-copyright-line" />
      <div class="text-sm mx-2">
        CC BY-NC-SA 4.0
      </div>
      <div>tcastanie.dev {{ new Date().getFullYear() }}</div>
    </template>

    <img v-if="partyMode" src="/gifs/valid-html40.png" width="88" height="31">
    <UButton
      icon="i-mingcute-celebrate-line"
      color="neutral" variant="ghost"
      :class="{ 'animate-spin': partyMode }"
      @click="togglePartyMode"
    />
    <img v-if="partyMode" src="/gifs/valid-css2.png" width="88" height="31">

    <template #right>
      <DrawerContact>
        <UButton
          :label="$t('contact')"
          trailing-icon="i-mingcute-send-plane-line"
          variant="ghost"
        />
      </DrawerContact>
    </template>
  </UFooter>
  <audio
    v-if="partyMode"
    src="/sg1.mp3"
    controls
    autoplay
    loop
    volume="0.4"
    class="fixed bottom-0 left-0 mx-auto"
  />
</template>
