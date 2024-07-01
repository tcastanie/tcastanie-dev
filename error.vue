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
      <UiCard class="text-center overflow-y-auto">
        <template #header>
          <UiH1>Erreur {{ error.statusCode }}</UiH1>
        </template>
        <UiP v-if="error.statusCode === 404" class="mb-4">
          You found a <b>dead link</b> 😱
          <NuxtImg
            src="/404link.jpg"
            format="webp"
            alt="dead link"
            width="512"
            height="384"
            class="rounded-lg mt-4"
          />
        </UiP>
        <div class="font-mono">
          {{ error.message }}
        </div>
        <template #footer>
          <UiButton icon="i-mingcute-exit-door-line" @click="handleError">
            Retour à l'accueil
          </UiButton>
        </template>
      </UiCard>
    </div>
  </Body>
</template>
