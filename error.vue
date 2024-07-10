<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{
  error: NuxtError
}>()

useHead({
  titleTemplate: `${props.error.statusCode} %separator %siteName`,
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <Body class="bg-zinc-900 text-white">
    <div class="grid place-content-center justify-items-center h-screen">
      <BegoCard class="text-center overflow-y-auto">
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
            class="rounded-lg mt-4"
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
  </Body>
</template>
