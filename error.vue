<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{
  error: NuxtError
}>()

useHead({
  bodyAttrs: {
    class: 'bg-zinc-900 text-white',
  },
  title: `Erreur ${props.error.statusCode}`,
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="grid h-screen place-content-center justify-items-center">
    <BegoCard class="overflow-y-auto text-center">
      <template #header>
        <BegoH1>Erreur {{ error.statusCode }}</BegoH1>
      </template>
      <BegoP v-if="error.statusCode === 404" class="mb-4">
        You found a <b>dead link</b> 😱
        <img
          src="/404link.jpg"
          alt="dead link"
          width="512"
          height="384"
          class="mt-4 rounded-lg"
        >
      </BegoP>
      <div class="font-mono">
        {{ error.message }}
      </div>
      <template #footer>
        <BegoButton icon="i-mingcute-exit-door-line" @click="handleError">
          Retour à l'accueil
        </BegoButton>
      </template>
    </BegoCard>
  </div>
</template>
