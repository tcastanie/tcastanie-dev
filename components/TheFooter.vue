<template>
  <footer class="text-center text-xs" :class="shitMode ? 'h-16' : 'h-8'">
    <div
      v-if="shitMode"
      class="mb-2 flex items-center justify-center gap-x-3"
    >
      <NuxtImg
        src="/valid-html40.png"
        alt="valid-html40"
        format="webp"
        width="88"
        height="31"
      />
      <NuxtImg
        src="/valid-css2.png"
        alt="valid-css2"
        format="webp"
        width="88"
        height="31"
      />
    </div>
    <NuxtLink
      to="https://creativecommons.org/licenses/by-nc-sa/4.0/"
      class="underline-offset-2 hover:text-bleu hover:underline"
      target="_blank"
      noopener
      noreferrer
    >
      CC BY-NC-SA 4.0
    </NuxtLink>
    <span>© {{ currentYear }} tcastanie.dev</span>
    <span
      class="i-game-icons-star-swirl ml-2 h-5 w-5 inline-flex cursor-pointer p-1 align-bottom hover-animate-ping hover:text-bego-0"
      :class="shitMode ? 'animate-spin text-bego-0' : ''"
      @click="toggleShitMode()"
    />
    <audio
      v-if="shitMode"
      ref="sg1"
      src="/sg1.mp3"
      controls
      autoplay
      loop
      volume="0.4"
      class="fixed bottom-20 left-0 mx-auto lg:bottom-0"
    />
  </footer>
</template>

<script lang="ts" setup>
const currentYear = new Date().getFullYear()

const shitMode = useState('shitMode')
const toggleShitMode = () => {
  shitMode.value = !shitMode.value
}
</script>
