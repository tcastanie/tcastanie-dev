<template>
  <footer class="h-8 text-center text-xs">
    <NuxtLink
      to="https://creativecommons.org/licenses/by-nc-sa/4.0/"
      class="underline-offset-2 hover:text-bleu hover:underline"
      target="_blank"
      noopener
      noreferrer
    >
      CC BY-NC-SA 4.0
    </NuxtLink>
    <span>© 2023 tcastanie.dev</span>
    <span
      class="i-mingcute-planet-line ml-2 h-4 w-4 inline-flex cursor-pointer p-1 align-bottom hover-animate-spin hover:text-bego-0"
      :class="shitMode ? 'animate-spin text-bego-0' : ''"
      @click="toggleShitMode()"
    />
  </footer>
</template>

<script lang="ts" setup>
const shitMode = useState('shitMode')
const toggleShitMode = () => {
  shitMode.value = !shitMode.value
}
</script>
